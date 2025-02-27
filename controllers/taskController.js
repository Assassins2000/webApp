const TaskService = require('../services/taskService');

class TaskController {
    #taskService;

    constructor() {
        this.#taskService = new TaskService();
    }

    async getTaskHistory(req, res) {
        const taskHistory = await this.#taskService.getTaskHistory();
        res.json(taskHistory);
    }
}

module.exports = TaskController;