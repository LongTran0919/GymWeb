const express=require('express');
const ExcRouter = express.Router();
const JWT =require('jsonwebtoken')
const passport = require('passport');
const passportConfig = require('../passport');
const Exc= require('../Models/ExerciseModel');
 
 ExcRouter.post('/add', (req,res)=>{
const {excName,author}=req.body;
console.log(excName ,author)
        try{ const newExc = new Exc({  excName,author  })
                 newExc.save(err=>{
                    if(err)res.status(500).json({
                        message:{msgBody:"Error has occured 2"},
                        msgError:true })
                    else res.status(201).json({
                        message:{msgBody:"Excercise succesfully created"},
                        msgError:false })
                })
        }
        catch(error){
            console.log(error);
        }

    })



module.exports = ExcRouter;