const Task = require('../models/Task');

class TaskService {
  async getAllTasks() {
    return Task.find();
  }

  async getTaskById(id) {
    return Task.findById(id);
  }

  async createTask(taskData) {
    const task = new Task(taskData);
    return task.save();
  }

  async updateTask(id, taskData) {
    return Task.findByIdAndUpdate(id, taskData, { new: true });
  }

  async deleteTask(id) {
    return Task.findByIdAndDelete(id);
  }

  async setReminder(id, reminderData) {
    return Task.findByIdAndUpdate(id, { reminder: reminderData }, { new: true });
  }
}

module.exports = new TaskService();
