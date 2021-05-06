const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
app.use(cookieParser());
app.use(express.json());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
   req.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
   
  next();
});
dotenv.config();
app.use(cors())
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
const TypeExcRouter=require('./Routes/TypeExcRouter')
app.use('/typeExercise',TypeExcRouter);
app.listen(5000,
  ()=>{console.log("server is running!!")});
