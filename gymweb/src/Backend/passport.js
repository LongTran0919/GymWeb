const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const User = require('./Models/UserModel');
const dotenv= require('dotenv');
dotenv.config();
const cookieExtractor= req=>{
    let token= null;
    if(req&&req.cookies){
        token= req.cookies["access_token"];
    }
    return token;
}
//authorrization 
passport.use(new JWTStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey:process.env.secretkey

},

    (payload,done)=>{
         User.findById({_id:payload.sub},
      
        (err,user)=>{
            if(err)return done(err,false);

            if(user) return done(null,user);
            else return done(null,false);
        })
}))
//authenicated local strategy using username and passwd
passport.use(new LocalStrategy((username,password,done)=>{
 User.findOne({username},(err,user)=>{
     if(err) return done(err);

     if(!user) return done(null,false);

       user.comparePassword(password,done);
 })   
})

)