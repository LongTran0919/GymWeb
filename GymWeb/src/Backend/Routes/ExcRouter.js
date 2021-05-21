const express=require('express');
const ExcRouter = express.Router();
const JWT =require('jsonwebtoken')
const passport = require('passport');
const passportConfig = require('../passport');
const Exc= require('../Models/ExerciseModel');
const cors = require('cors');
 
 ExcRouter.post('/add', (req,res)=>{
const {excName ,title,typeExc,level,taskList,date_created,comment,compound,author,calories,decription}=req.body;
        try{ const newExc = new Exc({ decription, excName ,title,typeExc,level,taskList,date_created,comment,compound,author,calories })
                console.log(newExc)
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
    ExcRouter.get('/all',cors(),(req,res)=>{
        Exc.find({}, function(err, exc) {
            res.send(exc.reduce((exc, item) => {
                exc[item.id] = item
                return exc
            }, {}));
         });
    })
    ExcRouter.get('/select',(req,res)=>{
        const {id}=req.body
        Exc.find({_id:id}, function(err, exc) {
            res.send(exc.reduce((exc, item) => {
                exc[item.id] = item
                return exc
            }, {}));
         });
    })


module.exports = ExcRouter;