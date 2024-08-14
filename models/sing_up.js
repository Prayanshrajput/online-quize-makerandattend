const mongoose=require("mongoose")

const sing_up=new mongoose.Schema({
    username:{
        type:String,
        req:true
    },
    email:{
        type:String,
        req:true
    },
    password:{
        type:String,
        req:true
    }
})

module.exports=mongoose.model("sing_up",sing_up)