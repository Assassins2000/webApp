const cron = require('node-cron');
const { randomUUID } = require('crypto');
const tasks = require('../tasks/tasks');
const TaskData = require('../dataAccess/taskData');

class CronService {
    constructor() {
        this.taskData = new TaskData();
        this.serverId = process.env.SERVER_ID || randomUUID();
    }

    async init() {
        tasks.forEach(task => {
            if (!cron.validate(task.interval)) {
                console.error(`Invalid cron expression for task ${task.name}: ${task.interval}`);
                return;
            }

            cron.schedule(task.interval, async () => {
                await this.executeTask(task);
            });
        });
    }

    async executeTask(task) {
        try {
            const isTaskRunning = await this.taskData.checkIfTaskRunning(task.name);
            if (isTaskRunning) {
                console.log(`Task ${task.name} is already running on another server`);
                return;
            }

            await this.taskData.logTaskStart(task.name, this.serverId);

            console.log(`Starting task ${task.name} on server ${this.serverId}`);
            
            try {
                await task.handler();
                await this.taskData.logTaskCompletion(task.name);
            } catch (error) {
                console.error(`Error executing task ${task.name}:`, error);
                await this.taskData.logTaskError(task.name, error.message);
            }
        } catch (error) {
            console.error(`Error in task execution flow ${task.name}:`, error);
        }
    }
}

module.exports = CronService;