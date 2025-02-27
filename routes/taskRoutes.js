const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

const taskController = new TaskController();

router.get('/taskHistory', (req, res) => taskController.getTaskHistory(req, res));

module.exports = router;
