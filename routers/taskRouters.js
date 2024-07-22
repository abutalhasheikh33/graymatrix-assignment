const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const catchAsync = require('../utils/catchAsync');

router.route('/tasks').get(catchAsync(taskController.getAllTasks)).post(catchAsync(taskController.createTask))

router.route('/tasks/:id').get(catchAsync(taskController.getTaskById)).patch(catchAsync(taskController.updateTask)).delete(catchAsync(taskController.deleteTask))

router.patch('/tasks/:id/reminder',catchAsync(taskController.setReminder));


module.exports = router;