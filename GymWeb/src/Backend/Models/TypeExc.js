const mongose = require('mongoose');
 
const TypeExcSchema = new mongose.Schema(
    {
        typeID:{type:String,
        require:true},
        typetame:{
            type:String,
            require:true,
        },
        compound:{
            type:String
        }

    }
)


module.exports=mongose.model('Exercise',TypeExcSchema)