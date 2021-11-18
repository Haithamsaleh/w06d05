const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const db=require("./db/db.js");
const userRouter = require("./routers/routes/user")
const todosRouter = require("./routers/routes/todos")


const app =express();
dotenv.config()
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());




app.use("/users", userRouter);
app.use("/todos", todosRouter);


const PORT = process.env.PORT||4000 
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})