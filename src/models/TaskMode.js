const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  description: {
    type: String,
  },
  hostEmail: {
    type: String,
  },
  hostName: {
    type: String,
  },
  priority: {
    type: String,
  },
  taskName: {
    type: String,
  },
  status: {
    type: String,
  },
  time: {
    type: String,
  },
});

const TaskModel = model("Task", taskSchema);

module.exports = TaskModel;
