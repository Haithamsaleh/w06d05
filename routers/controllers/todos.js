const todosModel = require("./../../db/models/todosSchema");

const createNewTask = (req, res) => {
  const { task, iscombleted, isDeleted, date } = req.body;
  const newTask = new todosModel({
    task,
    iscombleted,
    isDeleted,
    date,
  });
  newTask
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const getAllTasks = (req, res) => {
  todosModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = {
  createNewTask,
  getAllTasks,
};
