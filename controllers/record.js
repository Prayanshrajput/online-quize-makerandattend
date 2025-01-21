const profile=require("../models/profile")

exports.record=async(req,res)=>{
    try{
        const{email,quizid,score}=req.body

        const fetchprofile=await profile.findOneAndUpdate({email})

        if(!fetchprofile){
            return res.json({
                success:true,
                message:"profile not find"
            })
        }

        if(fetchprofile.quiz==undefined){
            fetchprofile.quiz=[]
        }

        fetchprofile.quiz.map(async(data)=>{
            if(data.quizid==quizid){
                data.Numberofattend=score
                await profile.findOneAndUpdate({email},{quiz:fetchprofile.quiz})
            
                return res.json({
                success:true,
                message:"sucessfully updated data",
            })

            }
        })

         fetchprofile.quiz.push({
            "quizid":quizid,
            "Numberofattend":score,
         })

        await profile.findOneAndUpdate({email},{quiz:fetchprofile.quiz})

          res.json({
            success:true,
            message:"new data update successfully"
        })
    }
    catch(error){
        res.json({
            success:false,
            message:"Internal Error in server",
            issue:error.message
        })
    }
}