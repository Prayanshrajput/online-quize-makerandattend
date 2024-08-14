const profilemodel=require("../models/profile")

exports.profile= async (req,res)=>{
try{
    const{email}=req.body

    const useprofile=await profilemodel.find({email})

    res.json({
        success:true,
        message:"Successfully fetch",
        useprofile
    })
    
}
catch(error){
    res.json({
        success:false,
        message:"Refresh page"
    })
}
}