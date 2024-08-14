const profile_model=require("../models/profile")

const jwt=require("jsonwebtoken")

exports.login_status=async (req,res)=>{
    try{
        const{email,token}=req.body

        const check=await profile_model.findOne({email})

        if(!check){
            return res.json({
                success:false,
                message:"Not valid data"
            })
        }

        let temp_token=check.current_token

       let status=temp_token==token;

        if(status){
            return res.json({
                success:true,
                message:"valid user",

            })
        }

         res.json({
            success:false,
            message:"login again",
            temp_token,
            token
        })

    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}