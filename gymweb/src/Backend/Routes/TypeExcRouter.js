const express=require('express');
const TypeExcRouter = express.Router();
const JWT =require('jsonwebtoken')
const passport = require('passport');
const passportConfig = require('../passport');
const TypeExc= require('../Models/TypeExc');
 
TypeExcRouter.post('/add', (req,res)=>{
const {typeID,typeName,compound}=req.body;
console.log(typeID,typeName,compound)
        try{ const newExc = new TypeExc({ typeID,typeName,compound  })
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
   


module.exports = TypeExcRouter;