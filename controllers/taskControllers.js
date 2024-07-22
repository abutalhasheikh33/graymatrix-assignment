const taskService = require('../services/taskService');

class TaskController {
  async getAllTasks(req, res) {
    try {
      const tasks = await taskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTaskById(req, res) {
    try {
      const task = await taskService.getTaskById(req.params.id);
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createTask(req, res) {
    try {
      const task = await taskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateTask(req, res) {
    try {
      const task = await taskService.updateTask(req.params.id, req.body);
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteTask(req, res) {
    try {
      const task = await taskService.deleteTask(req.params.id);
      if (task) {
        res.json({ message: 'Task deleted' });
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async setReminder(req, res) {
    try {
      const task = await taskService.setReminder(req.params.id, req.body);
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new TaskController();
