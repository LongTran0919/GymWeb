const mongose = require('mongoose');
const bcrypt= require('bcrypt');

const UserSchema = new mongose.Schema(
    {
        username:{
            type:String,
            require:true,
            min:5,
            max:20
        },
        useID:{type:String
        },
        password:{
            type:String,
            require:true,
        },
        Name:{type:String
        },
        Dob:{
            type:String
        },
        Sex:{
            type:String
        },
        Bmi:{
            type:Array
        },
        Avatar:{type:String
        },
        role:{
            type:String,
            enum:['user','admin','teacher']
        },
    }
)

UserSchema.pre('save',function(next){
    if(!this.isModified('password'))
        return next();
    
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err)return next(err);
        this.password=passwordHash;
        next();
    })
})

UserSchema.methods.comparePassword=function(password,cb){
    bcrypt.compare(password,this.password,(err,isMatch)=>{
        if(err)return cb(err);
            if(!isMatch)return cb(null,isMatch);
            return cb(null,this);
    });
}
module.exports=mongose.model('User',UserSchema)