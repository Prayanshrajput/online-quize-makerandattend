import React, {useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Login } from './Login'


export const Protected = (prop) => {
    const data= {email:"",token:""}
    const {Componet}=prop
   const[status,setstatus]=useState(false)
   
  const navigate=useNavigate()
    async function checkloginstatus(){
     
      if(Cookies.get("data")&&Cookies.get("token")){
        data.email=Cookies.get("data")
        data.token=Cookies.get("token")
  
       const response=await fetch(`${window.location.origin}/login_status`,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
                "Content-Type":"application/json"
        }
    }  )

    // const response= await fetch(`http://localhost:2222/login_status`,{
    //     method:"POST",
    //     body:JSON.stringify(data),
    //     headers:{
    //       "Content-Type":"application/json"
    //     }
    //   })

      const result=await response.json()
      console.log(result)
      if(result.success){
         setstatus(true)
      }

      }
      else{
         navigate("/login")
      }
      
    }
  
   checkloginstatus()
  
    return (
      status?<Componet></Componet>:<Login></Login>
    )
}
