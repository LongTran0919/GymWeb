const mongose = require('mongoose');
 
const ExerciseSchema = new mongose.Schema(
    {
        excName:{
            type:String,
            require:true,
        },
        title:{
            type:String
        },
        decription:{
            type:String
         },
         typeExc:{
            type:String
         },
         level:{
             type:String
         },
         taskList:{
             type:Array
         },
         date_created:{
             type:String
         },
         comment:{
             type:Array
         },
         compound:{
            type:String
         },
         author:{
             type:String,
             require:true
         },
         calories:{
             type:String
         },
         imgUrl:{
             type:String
         }
        
    }
)


module.exports=mongose.model('Exercise',ExerciseSchema)