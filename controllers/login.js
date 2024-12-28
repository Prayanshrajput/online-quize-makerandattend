const profile_model=require("../models/profile")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

exports.login=async (req,res)=>{
    try{

    const{email,password}=req.body
    const check=await profile_model.findOne({email})

    if(!check){
        return res.json({
            success:false,
            message:"you have not account"
        })
    }
  
    const temp_password=check.password
    let status=false

    try{
        status=await bcrypt.compare(password,temp_password)
       }
       catch(error){
        return  res.json({
         sucess:false,
            message:error.message 
        })
       }

    if(status){
       const payload = {
            useid:email
          };

 

          const secret = 'prayansh123';

          const options = {
            expiresIn: '1h' 
          };

          const token = await jwt.sign(payload, secret, options);
        
         const addtoken=await profile_model.findOneAndUpdate({email},{current_token:token},{new:false})
         
         let option={
            expires:new Date( Date.now()+3*24*60*60*1000),
            }
            // res.cookie("prayansh",token,option)

        return res.json({
            success:true,
            message:"Successfully Login",
            token,
            userdata:check.username
        }) 
    }

    res.json({
        success:false,
        message:"Incorrect password"
    })

    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}