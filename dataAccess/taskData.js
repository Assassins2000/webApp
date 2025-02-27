const Task = require('../models/task');
const { redisClient } = require('../config/redis');
const { where } = require('sequelize');

class TaskData {
    async checkIfTaskRunning(taskName) {
        try {
            const result = await redisClient.get(taskName);
            return result === 'running';
        } catch (error) {
            console.error(`Error checking task status: ${error.message}`);
            throw error;
        }
    }
    
    async logTaskStart(taskName, serverId) {
        try {
            await redisClient.set(taskName, 'running');
            await Task.create({ name: taskName, serverId });
        } catch (error) {
            console.error(`Error logging task start: ${error.message}`);
            throw error;
        }
    }
 
    async logTaskCompletion(taskName) {
        try {
            await redisClient.del(taskName);
            await Task.update(
                { endTime: new Date(), status: 'completed' },
                { where: { name: taskName, endTime: null } }
            );
        } catch (error) {
            console.error(`Error logging task completion: ${error.message}`);
            throw error;
        }
    }
    
    async getTaskHistory() {
        try {
            return await Task.findAll({
                where: { status: 'idle' },
                order: [['createdAt', 'DESC']]
            });
        } catch (error) {
            console.error(`Error getting task history: ${error.message}`);
            throw error;
        }
    }

    async logTaskError(taskName, errorMessage) {
        try {
            await Task.update(
                { error: errorMessage, status: 'failed' },
                { where: { name: taskName } }
            );
        } catch (error) {
            console.error(`Error logging task error: ${error.message}`);
            throw error;
        }
    }
}

module.exports = TaskData;
