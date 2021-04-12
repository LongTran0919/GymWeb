const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(express.json());

dotenv.config();
const uri=process.env.URI;

const  connection =async()=>{
  await  mongoose.connect(uri,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("mongoose connect");
} 
connection()
const userRouter = require('./routes/UserRouter');
app.use('/user',userRouter);
app.listen(5000,
  ()=>{console.log("server is running!!")});
