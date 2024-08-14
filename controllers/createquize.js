const title=require("../models/titleofquize")

exports.titlesave= async(req,res)=>{
    try{
const{quizetitle,time,email}=req.body

const newquiz= new title({nameofquize:quizetitle,idofquize:Date.now(),time,email})

const savetitle=newquiz.save()

res.json({
    success:true,
    message:newquiz
})
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}