const express=require('express');
const userRouter = express.Router();
const JWT =require('jsonwebtoken')
const passport = require('passport');
const passportConfig = require('../passport');
const User= require('../Models/UserModel');

userRouter.post('/register',(req,res)=>{
const {username,password,role} =req.body
    User.findOne({username},(err,user)=>{
            if(err) res.status(500).json({
                message:{msgBody:"Error has occured 1"},
                msgError:true })
            
            if(user)res.status(400).json({
                message:{msgBody:"Username is already taken "},
                msgError:true })
                else{
                    const newUser = new User({
                        username,password,role
                    })
                    
                    newUser.save(err=>{
                        if(err)res.status(500).json({
                            message:{msgBody:"Error has occured 2"},
                            msgError:true })
                        else res.status(201).json({
                            message:{msgBody:"Account succesfully created"},
                            msgError:false })
                    })
                }

    })
})
const signToken=userID=>{
    return JWT.sign({
        iss:"GymLord_issue",
        sub:userID
    },"GYMLORD",{expiresIn:"1h"});
}

userRouter.post('/login',passport.authenticate('local',
{session:false}),(req,res)=>{
    if(req.isAuthenticated()){
        const{_id,username,role}=req.user;
       
        const token=signToken(_id);
        res.cookie('acces_token',token,{httpOnly:true,sameSite:true})
        res.status(200).json({
            isAuthenticated:true,
            user:{username,role}
        })
    }
})
// userRouter.get('/logout',passport.authenticate('jwt',{session:false}),
// (req,res)=>{
//     res.clearCookie('access_token');
//     res.json({
//         user:{username:"",role=""},
//         success:true
//     })

// })
module.exports = userRouter;