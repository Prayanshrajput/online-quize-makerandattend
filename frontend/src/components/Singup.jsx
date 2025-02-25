import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Datacontext } from '../context/Datacontext';
import { List_navbar } from './List_navbar';

export const Singup = () => {
  
    const{mnav}=useContext(Datacontext)
    const[pass,setpass]=useState(true)
    const[Showhandler,setShowhandler]=useState(false)
    const[conformpass,setconformpass]=useState(true)
    const[conformshowhandler,setconformshowhandler]=useState(false)
    const[data,setdata]=useState({username:"",email:"",password:"",conformpassword:""})

    const inputhandler=(e)=>{
        setdata((prev)=>{return {...prev,[e.target.name]:e.target.value}})
        console.log(data)
        if(data.password){
            setShowhandler(true);
        }
        else{
            setShowhandler(false);
        }

        if(data.conformpassword){
            setconformshowhandler(true);
        }
        else{
            setconformshowhandler(false);
        }
        
    }


   const passwordhandler = ()=>{
       setpass(!pass)
   }


   const conformpasswordhandler = ()=>{
       setconformpass(!conformpass)
   }

   const submithandler= async (event)=>{
    event.preventDefault()
    try{
        if(data.username==""||data.email==""){
            toast.error("please full fill your entries")   
        }
        else if(data.password!=data.conformpassword){
            toast.error("Password missmatch")  
        }
        else{
            postdata()
        }
    }
    catch(error){
        toast.error("server down")
    }
   }

   const postdata=async()=>{
    try{
     
      const response= await fetch(`${window.location.origin}/singup`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      })

    //   const response= await fetch(`http://localhost:2222/singup`,{
    //     method:"POST",
    //     body:JSON.stringify(data),
    //     headers:{
    //       "Content-Type":"application/json"
    //     }
    //   })

        const result=await response.json()

        if(result.success==true){
            toast.success("Singup successfully")
        }
        else{
          toast.error(result.message)
        }
    }
    catch(error){
      toast.error("Server down")
    }
   }



  return (

    <div className="flex w-screen h-screen justify-center items-start lg:items-center">       
    <div className="flex flex-col w-[90%] md:w-[500px] gap-[30px] lg:w-[648px] lg:h-[556px]  rotate-[16px] border border-[#CECECE] mt-[50px] lg:p-[60px] bg-slate-50">
    <div className="flex w-[100%] justify-center  text-[25px] lg:text-[40px] lg:h-[58px] lg:w-[528px] font-[600]">Welcome to<div className="text-[#4534AC]">&nbsp;Quiz_Master </div></div>
   <div className="flex flex-col items-center w-[100%]  lg:w-[528px] lg:h-[290px] gap-[15px]">
   <input className="flex w-[95%] h-[35px] lg:w-[528px] lg:h-[56px] rounded-[8px] border border-[#999999] bg-[#EBEBEB] pr-[12px] pl-[12px] " type="text" name="username" value={data.username} onChange={inputhandler} placeholder='Full name' />
    <input className="flex w-[95%] h-[35px] lg:w-[528px] lg:h-[56px] rounded-[8px] bg-[#EBEBEB] pr-[12px] pl-[12px]" type="email"  id="" name="email" value={data.email} onChange={inputhandler} placeholder="Your email" />
   
    <div className="flex w-[95%] lg:w-[528px] lg:h-[56px] rounded-[8px] bg-[#EBEBEB] ">
    <input className="w-[80%] h-[35px] bg-[#EBEBEB] rounded-[8px] focus:outline-none   pr-[12px] pl-[12px] " type={pass?"password":"text"} name='password' value={data.password} onChange={inputhandler} placeholder='Password' />
   <div className="w-[20%] flex justify-center items-center"> 
    {pass?<div onClick={passwordhandler}>Show</div >:<div onClick={passwordhandler}>Hide</div>}
    </div>
    </div>

    <div className="flex w-[95%] h-[35px] lg:w-[528px] lg:h-[56px] rounded-[8px] bg-[#EBEBEB] ">
    <input className="w-[80%] bg-[#EBEBEB] rounded-[8px] focus:outline-none   pr-[12px] pl-[12px] " type={conformpass?"password":"text"} name='conformpassword' value={data.conformpassword} onChange={inputhandler} placeholder='Conform Password' />
   <div className="w-[20%] flex justify-center items-center"> 
    {/* <img src="/show.png" className="w-[24px] h-[24px]" onClick={passwordhandler} alt="" /> */}
    {conformpass?<div onClick={conformpasswordhandler}>Show</div >:<div onClick={conformpasswordhandler}>Hide</div>}
    </div>
    </div>

    <button onClick={submithandler} className="flex w-[95%] justify-center items-center lg:w-[528px] h-[52px] text-[#FFFFFF] rounded-[8px] bg-gradient-to-t from-[#4B36CC] to-[#9C93D4]">Sing up</button>
   </div>

   <div className="flex w-[95%] justify-center items-center h-[24px] gap-[4px]">
   <div className="flex justify-end w-[244px] h-[24px] text-[#606060] font-[400] text-[20px]" >Already have an account?</div>
   <Link className="flex w-[63px] h-[24px] text-[20px] font-[400] text-[#0054A1]" to={"/login"}>Log in.</Link>
   </div>
  
</div>
      {
       mnav?<List_navbar></List_navbar>:<div></div>
      }
<ToastContainer />
</div>
  )
}
