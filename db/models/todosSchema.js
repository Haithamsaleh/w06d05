const mongoose = require("mongoose");
const todosSchema = new mongoose.Schema({
  task: { type: String, required: true,  },
  iscombleted: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  date: { type: String, default: new Date() },
  
});


module.exports = mongoose.model("todos", todosSchema); // User is refrans and name of the schema
