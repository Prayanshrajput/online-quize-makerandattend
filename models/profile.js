const mongoose=require("mongoose")

const profile=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    userid:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true 
    },
    current_token:{
        type:String
    },
    your_quiz:[
{
    type:String
}
    ],
    attend_quiz:[
        {
            type:String
        }
    ],
    quiz:[
        {
            quizid:{type:String},
            score:{type:String},
            Numberofattend:{type:String},
            creater:{type:String ,
                default:"N"
            }
        }
    ],
    
})

module.exports=mongoose.model("profile",profile)