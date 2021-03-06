const express=require('express');
const userRouter = express.Router();
const JWT =require('jsonwebtoken')
const passport = require('passport');
const passportConfig = require('../passport');
const User= require('../Models/UserModel');
const dotenv=require('dotenv')


const signToken=userID=>{
    return JWT.sign({
        iss:"GymLord",
        sub:userID
    },process.env.secretKey,{expiresIn:"1h"});
}

userRouter.post('/register',(req,res)=>{
const {username,password,email,role,Bmi} =req.body
    User.findOne({username},(err,user)=>{
            if(err) res.status(500).json({
                message:{msgBody:"Error has occured 1"},
                msgError:true })

            if(user)res.status(400).json({
                message:{msgBody:"Username is already taken "},
                msgError:true })
                else{
                    const newUser = new User({
                        username,password,email,role,Bmi
                    })
                    newUser.save(err=>{
                        if(err)res.status(500).json({
                            message:{msgBody:"Error has occured 2"},
                            msgError:true })
                        else res.status(200).json({
                            message:{msgBody:"Account succesfully created"},
                            msgError:false })
                    })
                }
    })
})
userRouter.post('/login',passport.authenticate('local',{session:false}),(req,res)=>{
    if(req.isAuthenticated()){
        const{_id,username,role}=req.user;
        const token=signToken(_id);
        
        res.cookie('access_token',token,{httpOnly:true})
        res.status(200).json({
            isAuthenticated:true,
            user:{username,role}
        })
    }
    else{
        res.status(401).json({
           "msg":"wrong login"
        })
    }
})


userRouter.get('/info',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {username} = req.user;
    if(!username) res.status(500).json({
        message:{msgBody:"Error has occured 1"},
        msgError:true })
     User.findOne({username},(err,user)=>{
        
            if(err) res.status(500).json({
                message:{msgBody:"Error has occured 1"},
                msgError:true })
            if(!user){
                res.status(404).json({
                    message:{msgBody:"username not found "}
            })}
            if(user){
                    let Userinfo = { ...JSON.parse(JSON.stringify(user)), password:"hidden" };
                    res.status(200).json({
                      Userinfo:Userinfo
                    })

                }
        });
})


userRouter.post('/bmi',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {Bmi} =req.body
    const {username} = req.user;
   
    User.findOneAndUpdate({username:username,Bmi:{ $elemMatch:{curTime: Bmi.curTime}}}, { $set: {"Bmi.$":Bmi} } ,(err,user)=>{
        if(err) res.status(500).json({
            message:{msgBody:"Error has occured 1"},
            msgError:true })
       
   
       if(!user)   User.updateOne({username:username},{$addToSet:{Bmi:Bmi}}, function (err) {
            if(err) res.status(401).json({
                message:{msgBody:"Error has occured 1"},
                msgError:true })
            res.status(200).json({ message: `update success  `});
        })

        if(user) res.status(200).json({ message: `update successfully  `})
    }) 
    })
   
    userRouter.post('/plan',passport.authenticate('jwt',{session : false}),(req,res)=>{
        const {plan} =req.body
        const {username} = req.user;
       
        User.findOneAndUpdate({username:username,}, { $set: {"Plan":plan} } ,(err,user)=>{
            if(err) res.status(500).json({
                message:{msgBody:"Error has occured 1"},
                msgError:true })
           
       
           if(!user)    res.status(401).json({
                    message:{msgBody:"Error has occured 1"},
                    msgError:true })
            
         
    
            if(user) res.status(200).json({ message: `update successfully  `})
        }) 
        })
       
userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
    res.clearCookie('access_token');
    const{_id,username,role}=req.user;
    res.json({
        message:"you are logout",
        user:{ username,_id,role},
        success : true});
});
userRouter.get('/resetpasswd',(req,res)=>{
    const{username}=req.body;
     User.findOne({username},(err,user)=>{
        
            if(err) res.status(500).json({
                message:{msgBody:"Error has occured 1"},
                msgError:true })
            if(!user){
                res.status(404).json({
                    message:{msgBody:"username not found "}
                
            })}
            if(user) 
                {
                    res.status(200).json({
                        message:{msgBody:"Reset password succesfully  "}
                    })

                //     newUser.save(err=>{
                //         if(err)res.status(500).json({
                //             message:{msgBody:"Error has occured 2"},
                //             msgError:true })
                //         else res.status(201).json({
                //             message:{msgBody:"Account succesfully created"},
                //             msgError:false })
                //     })
                // }
                    
                }
        });
})


userRouter.get('/admin',passport.authenticate('jwt',{session : false}),(req,res)=>{
    if(req.user.role === 'admin'){
        res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "You're not an admin,go away", msgError : true}});
});

userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {username,role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username,role}});
});

module.exports = userRouter;