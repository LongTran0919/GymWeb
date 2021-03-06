const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
 
const cookieParser = require('cookie-parser');
 
var bodyParser = require('body-parser');
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}))
 
app.use(cookieParser());
// app.use(express.json());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");// update to match the domain you will make the request from
   
   res.header('Access-Control-Allow-Credentials', true);
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  next();
});
dotenv.config();
app.use(cors({ credentials: true ,origin: [
  "http://localhost:3000",
  "http://127.0.0.1",
  "http://104.142.122.231",
],}))

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
