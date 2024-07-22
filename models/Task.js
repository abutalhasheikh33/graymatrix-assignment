const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true, minLength: 1, maxLength:100 },
    description: { type: String, minLength:0, maxLength:500 },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
    reminder: {
        date: { type: String},
        time: { type: String},
        message: { type: String, minLength:0, maxLength:255 },
    }
  },{
    timestamps:true
  });


  module.exports = mongoose.model('Task', taskSchema);