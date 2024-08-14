
const singup_model=require("../models/sing_up")
const profile_model=require("../models/profile")
const bcrypt=require("bcryptjs")


exports.sing_up=async (req,res)=>{
    try{
 const{username,email,password}=req.body
        const check= await profile_model.findOne({email})

        if(check){
          return  res.json({
                success:false,
                message:"your accound is already exist"
            })
        }
        
        let hassedpassword
        try{
            hassedpassword=await bcrypt.hash(password,10)
        }
        catch(error){
          return  res.json({
                success:false,
                message:"problem for hassedpassword"
            })
        }

        const createaccount=new profile_model({username,email,password:hassedpassword});
        const save= await createaccount.save()
        res.json({
            success:true,
            message:"Accound created successfully",
        })
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}