const express = require("express");
const { getAllUsere , ageFilter ,getUser,getUserbyid, createUser} = require("./../controllers/user")

const userRouter = express.Router()

userRouter.post("/create", createUser);
userRouter.get("/", getAllUsere);
userRouter.get("/:userName", getUser);
userRouter.get("/age", ageFilter);
userRouter.get("/:id", getUserbyid);





module.exports = userRouter