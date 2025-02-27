const TaskData = require('../dataAccess/taskData');

class TaskService {
    #taskData;

    constructor() {
        this.#taskData = new TaskData();
    }

    async getTaskHistory() {
        return await this.#taskData.getTaskHistory();
    }
}

module.exports = TaskService;