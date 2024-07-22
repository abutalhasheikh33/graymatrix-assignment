const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
    reminder: {
        date: { type: String, required: true },
        time: { type: String, required: true },
        message: { type: String, required: true },
        required:false
    }
  },{
    timestamps:true
  });


  module.exports = mongoose.model('Task', taskSchema);