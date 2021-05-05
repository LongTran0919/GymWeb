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
         typeExc:{
            type:String
         },
         level:{
             type:String
         },
         content:{
             type:String
         },
         date_created:{
             type:Date
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
         }
    }
)


module.exports=mongose.model('Exercise',ExerciseSchema)