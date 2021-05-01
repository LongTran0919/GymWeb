const mongose = require('mongoose');
 
const TypeExcSchema = new mongose.Schema(
    {
        typeID:{
            type:String,
            require:true
        },
        typeName:{
            type:String,
            require:true,
        },
        compound:{
            type:String
        }

    }
)


module.exports=mongose.model('TypeExercise',TypeExcSchema)