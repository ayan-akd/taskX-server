const TaskModel = require("../../models/TaskMode");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find();
    res.send(tasks);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllTasks;
