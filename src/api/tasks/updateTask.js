const TaskModel = require("../../models/TaskMode");

const updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    // const email = req.query.email;
    // if (req.user.email !== email) {
    //   return res.status(403).send({ message: "Forbidden Access" });
    // }
    const task = req.body;
    const result = await TaskModel.findOneAndUpdate({ _id: id }, task);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = updateTask;
