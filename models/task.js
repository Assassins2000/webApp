const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    endTime: {
        type: DataTypes.DATE,
    },
    serverId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'idle',
    },
    error: {
        type: DataTypes.STRING,
        defaultValue: '',
    },   
});

module.exports = Task;
