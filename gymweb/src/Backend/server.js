const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
app.use(cookieParser());
app.use(express.json());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
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
const excRouter=require('./Routes/ExcRouter')
app.use('/exercise',excRouter);
app.listen(5000,
  ()=>{console.log("server is running!!")});
