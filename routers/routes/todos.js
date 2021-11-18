const express = require("express");
const { getAllTasks , createNewTask} = require("./../controllers/todos")

const todosRouter = express.Router()

todosRouter.post("/create", createNewTask);
todosRouter.get("/", getAllTasks);
//get one user





module.exports = todosRouter