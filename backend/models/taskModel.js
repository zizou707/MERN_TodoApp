const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  completed: {
    type: String,
    required: false
  },
  user_id: {
    type: String,
  }
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)