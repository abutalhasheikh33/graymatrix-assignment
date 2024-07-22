const taskService = require('../services/taskService');
const AppError = require('../utils/AppError');

class TaskController {
  
  async getAllTasks(req, res,next) {
  
      const tasks = await taskService.getAllTasks();
      res.status(200).json(tasks);
      console.log(x)
    
  }

  async getTaskById(req, res, next) {
    
      const task = await taskService.getTaskById(req.params.id);
      if (task) {
        res.status(200).json(task);
      } else {
        return next(new AppError("Task not found",404));
      }
    
  }

  async createTask(req, res, next) {
      // Date format :- 2024-07-23
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      // Time format :- 13:06:29
      const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
      if(req.body.reminder && (!dateRegex.test(req.body.reminder.date) || !timeRegex.test(req.body.reminder.time))){
        return next(new AppError('Invalid Date/Time format',404))
      }
      
      const task = await taskService.createTask(req.body);
      res.status(201).json(task);
  }

  async updateTask(req, res, next) {

      const task = await taskService.updateTask(req.params.id, req.body);
      if (task) {
        res.status(200).json(task);
      } else {
       return next(new AppError("Task not found",404))
      }
    
  }

  async deleteTask(req, res, next) {
    
      const task = await taskService.deleteTask(req.params.id);
      if (task) {
        res.status(200).json({ message: 'Task deleted' });
      } else {
        return next(new AppError("Task not found",404));
      }
    
  }

  async setReminder(req, res, next) {
   
      const task = await taskService.setReminder(req.params.id, req.body);
      if (task) {
        res.status(200).json(task);
      }else{
        return next(new AppError("Task not found",404))
      } 
  }
}

module.exports = new TaskController();
