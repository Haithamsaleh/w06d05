const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  // role: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Role",
  //   default: "we copy the id from the role we created in the role schema",
  // },
  emali: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: String, default: new Date() },
  isDeleted: { type: Boolean, default: false },
  phoneNumber: [{ type: Number }],
  age: { type: Number },
});
const roleSchema = new mongoose.Schema({
  typeOfUser: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", userSchema); // User is refrans and name of the schema
