import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Datacontext } from '../context/Datacontext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { List_navbar } from './List_navbar';

export const Login = () => {

 
   
    const[pass,setpass]=useState(true)
    const[Showhandler,setShowhandler]=useState(false)
    const[data,setdata]=useState({email:"",password:""})
    const{setCookie,setlog,mnav}=useContext(Datacontext)

    const nevigate=useNavigate()

    const Inputhandler=(e)=>{
      setdata((prev)=>{return {...prev,[e.target.name]:e.target.value}})
      console.log(data)

      if(data.password!=""){
        setShowhandler(true);
     }
    else{
        setShowhandler(false);
    }

    }

   const passwordhandler = ()=>{
       setpass(!pass)
   }

   const submithandler=async(event)=>{
    event.preventDefault()
    try{
      if(data.email==""||data.password==""){
        toast.error("plz full fill your entry")
      }
      else{
        postdata()
      }

    }
    catch(error){
      console.log("some error")
    }
   }

   const postdata=async()=>{
    try{
  
      const response= await fetch(`${window.location.origin}/login`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      })

      // const response= await fetch(`http://localhost:2222/login`,{
      //   method:"POST",
      //   body:JSON.stringify(data),
      //   headers:{
      //     "Content-Type":"application/json"
      //   }
      // })

        const result=await response.json()

        if(result.success==true){
          setCookie('token', result.token, { path: '/' });
          setCookie('data', data.email, { path: '/' });
          setCookie('username', result.userdata, { path: '/' });
          setlog(true)
          nevigate("/home")
        }
        else{
          toast.error(result.message)
        }
    }
    catch(error){
      toast.error("something wrong in server")
    }
   }


return (
  <div className="flex w-screen h-screen justify-center lg:items-center">       
        <div className="flex  flex-col w-[95%] h-fit  lg:gap-[32px] lg:w-[648px] lg:h-[556px]  lg:rotate-[16px] border border-[#CECECE] mt-[50px] lg:p-[60px] bg-slate-50">
        <div className="flex justify-center  text-[25px]  lg:text-[40px] lg:h-[58px] lg:w-[528px] font-[600]">Welcome to<div className="text-[#4534AC]">&nbsp;Quiz_Master </div></div>
      
       <div className="flex flex-col w-[100%] justify-center items-center  lg:w-[528px] h-[290px] gap-6 lg:gap-[42px]">
        <input className="flex pl-2  w-[90%] lg:w-[528px] h-[56px] rounded-[8px] bg-[#EBEBEB] lg:pr-[12px] lg:pl-[12px]" type="email" name="email" onChange={Inputhandler} value={data.email} id="" placeholder="Your email" />

        <div className="flex w-[90%] lg:w-[528px] h-[56px] rounded-[8px] bg-[#EBEBEB] ">
        <input className="w-[80%] bg-[#EBEBEB] rounded-[8px] focus:outline-none   pr-[12px] pl-[12px] " name="password" onChange={Inputhandler} value={data.password} type={pass?"password":"text"} placeholder='Password' />
       <div className="w-[20%] flex justify-center items-center"> 
        {pass?<div className="flex" onClick={passwordhandler}>Show</div >:<div onClick={passwordhandler}>Hide</div>}
       </div>
        </div>

        <button onClick={submithandler} className="flex w-[90%] justify-center items-center  lg:w-[528px] ] h-[52px] text-[20px] rounded-[8px] bg-gradient-to-t from-[#4B36CC] to-[#9C93D4] font-[400] text-white">Login</button>
       </div>

       <div className="flex justify-center items-center h-[24px] gap-[4px]">
       <div className="flex justify-end w-[70%] lg:w-[307px] h-[24px] text-[#606060] lg:text-[20px]" >Don’t have an account? Create a</div>
        <Link className="flex lg:w-[127px] w-[30%] h-[24px]  text-[#0054A1] lg:text-[20px]" to={"/singup"}>new account.</Link>
       </div>
       
    </div>
    {
       mnav?<List_navbar></List_navbar>:<div></div>
      }
    <ToastContainer />
    </div>
)

}
