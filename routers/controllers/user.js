const userModel = require("./../../db/models/userSchema");
const roleModel = require("./../../db/models/roleSchema");

const createUser = (req, res) => {
  const { userName, emali, password, phoneNumber, age } = req.body;
  const newUser = new userModel({
    userName,
    emali,
    password,
    phoneNumber,
    age,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllUsere = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
// get one
const getUser = (req, res) => {
  const { userName } = req.body;
  userModel
  .findOne({ userName }).exec()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const getUserbyid = (req, res) => {
  const { id } = req.body;
  userModel
  .findById(id).exec()
      .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const ageFilter = (req, res) => {
  userModel
    .find({})
    .where("age")
    .gt(20)
    .lt(30)
    .sort({ age: 1 })
    .select("userName age  ")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getAllUsere,
  ageFilter,
  createUser,
  getUser,
  getUserbyid,
};
