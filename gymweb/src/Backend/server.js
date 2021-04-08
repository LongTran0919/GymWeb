const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

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
 
// app.get("/", (req, res) => {
//   // res.redirect('/home');
// });
connection()
app.listen(4000,()=>{console.log("server is running!!")});

module.exports = connection;