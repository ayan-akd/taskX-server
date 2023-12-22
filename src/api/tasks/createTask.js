const TaskModel = require("../../models/TaskMode");

const createTask = async (req, res, next) => {
  try {
    // const email = req.query.email;
    // if (req.user.email !== email) {
    //   return res.status(403).send({ message: "Forbidden Access" });
    // }
    const task = req.body;
    const result = await TaskModel.create(task);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createTask;
