const express=require('express');
const ExcRouter = express.Router();
const JWT =require('jsonwebtoken')
const passport = require('passport');
const passportConfig = require('../passport');
const Exc= require('../Models/ExerciseModel');
const cors = require('cors');
 
 ExcRouter.post('/add', passport.authenticate('jwt',{session : false}),(req,res)=>{
   
const {excName ,title,typeExc,level,taskList,date_created,comment,compound,calories,decription,lessonImage}=req.body;
    var author =req.user.username;
        try{ const newExc = new Exc({ decription, excName ,title,typeExc,level,taskList,date_created,comment,compound,author,calories,lessonImage })
                
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
    ExcRouter.post('/delete',passport.authenticate('jwt',{session : false}),(req,res)=>{
        const {id}=req.body
        const{_id,username,role}=req.user;
        if(role!='admin'){
            res.status(500).json({
            message:{msgBody:"you not have permision"},
            msgError:true })
           return;
        }
        Exc.findOneAndDelete({_id:id}, function(err, exc) {
           

            if(err){res.status(500).json({
                message:{msgBody:"Error has occured 2"},
                msgError:true })
                return;
            }
            if(!exc)  { res.status(404).json({
           
                message:{msgBody:"not found Excercise  "},
                msgError:false })
                return;
            }
            if(exc) { res.status(200).json({
           
                message:{msgBody:"Excercise succesfully created"},
                msgError:false })
                return
            }
         
            });
       
         
    })
    ExcRouter.post('/update',passport.authenticate('jwt',{session : false}),(req,res)=>{
        const {data}=req.body
        const{_id,username,role}=req.user;
        if(role!='admin'){
            res.status(500).json({
            message:{msgBody:"you not have permision"},
            msgError:true })
           return;
        }
        console.log(data)
        Exc.findOneAndUpdate({_id:data._id},data ,function(err, exc) {
           

            if(err){res.status(500).json({
                message:{msgBody:"Error has occured 2"},
                msgError:true })
                return;
            }
            if(!exc)  { res.status(404).json({
           
                message:{msgBody:"not found Excercise  "},
                msgError:false })
                return;
            }
            if(exc) { res.status(200).json({
           
                message:{msgBody:"Excercise succesfully update!!"},
                msgError:false })
                return
            }
         
            });
       
         
    })
    ExcRouter.post('/comment',passport.authenticate('jwt',{session : false}),(req,res)=>{
        const {comment,id} =req.body
        const{_id,username,role}=req.user;
      
       
        Exc.findOneAndUpdate({_id:id},{$addToSet:{comment:{...comment,user:username}}}, function (err,exc) {
            if(err){
                console.log(err)
                return res.status(401).json({
                message:{msgBody:"Error has occured 1"},
                msgError:true })  
            }
            if(!exc)  return    res.status(404).json({ message: `not found    `});
        
    
            if(exc) return res.status(200).json({ message: `comment successfully  `})
        })
            
        
        })

module.exports = ExcRouter;