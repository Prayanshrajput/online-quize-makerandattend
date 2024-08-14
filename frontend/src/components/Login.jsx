import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Datacontext } from '../context/Datacontext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {

 
   
    const[pass,setpass]=useState(true)
    const[Showhandler,setShowhandler]=useState(false)
    const[data,setdata]=useState({email:"",password:""})
    const{setCookie,setlog}=useContext(Datacontext)

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

  // return (
  //   <div className="flex flex-col h-screen w-screen justify-center items-center">
  //       <div className="text-[40px] text-indigo-700 font-extrabold">Quiz_Maker</div>
  //       <form className="flex flex-col justify-around  w-[500px] h-[350px] border border-black bg-gray-300" action="">
           
  //        <div className="flex flex-col gap-2">
  //        <label className="text-[20px] font-bold  " htmlFor="">Enter your mail</label>
  //        <input className=" flex h-[50px] border border-black font-bold" name="email" onChange={Inputhandler} type="email" placeholder="xyz@gmail.com" />
  //        </div>

  //          <div className="flex flex-col gap-2">
  //          <label className="text-[20px] font-bold" htmlFor="">Enter your password</label>
          
  //          <div class="w-[100%] flex items-center border border-black font-bold  bg-white">
  //           <input class="flex-grow h-[50px]  focus:outline-none " name='password' type={pass?"password":"text"} onChange={Inputhandler} placeholder="Enter your password"/>
  //         {Showhandler && <div class="cursor-pointer p-2" onClick={passwordhandler}>{pass?"Show":"Hide"}</div>}
  //           </div>
  //          </div>

  //           <div className="flex justify-center">
  //           <button className="flex justify-center items-center w-[100px] h-[50px] bg-blue-600 text-[20px] font-extrabold opacity-70 hover:opacity-100 " onClick={submithandler}>Login</button>
  //           </div>

  //           <div className="flex  justify-center items-center text-blue-600">
  //               <NavLink to="/forget"  className="hover:font-bold">
  //               Forget Password  |
  //               </NavLink>
  //               <NavLink to="/singup"  className="hover:font-bold">
  //               | Sing-Up
  //               </NavLink>
            
  //           </div>
  //       </form>
  //       <ToastContainer/>
  //   </div>
  // )

return (
  <div className="flex w-screen h-screen justify-center items-center">       
        <div className="flex flex-col gap-[32px] w-[648px] h-[556px]  rotate-[16px] border border-[#CECECE] p-[60px] bg-slate-50">
        <div className="flex justify-center text-[40px] h-[58px] w-[528px] font-[600]">Welcome to<div className="text-[#4534AC]">&nbsp;Quiz_Master </div></div>
      
       <div className="flex flex-col w-[528px] h-[290px] gap-[42px]">
        <input className="flex w-[528px] h-[56px] rounded-[8px] bg-[#EBEBEB] pr-[12px] pl-[12px]" type="email" name="email" onChange={Inputhandler} value={data.email} id="" placeholder="Your email" />

        <div className="flex w-[528px] h-[56px] rounded-[8px] bg-[#EBEBEB] ">
        <input className="w-[90%] bg-[#EBEBEB] rounded-[8px] focus:outline-none   pr-[12px] pl-[12px] " name="password" onChange={Inputhandler} value={data.password} type={pass?"text":"password"} placeholder='Password' />
       <div className="w-[10%] flex justify-center items-center"> 
        <img src='/show.png' className="w-[24px] h-[24px]" onClick={passwordhandler} alt=""/>
       </div>
        </div>

        <button onClick={submithandler} className="flex justify-center items-center w-[528px] ] h-[52px] text-[20px] rounded-[8px] bg-gradient-to-t from-[#4B36CC] to-[#9C93D4] font-[400] text-white">Login</button>
       </div>

       <div className="flex justify-center items-center h-[24px] gap-[4px]">
       <div className="flex justify-end w-[307px] h-[24px] text-[#606060] text-[20px]" >Don’t have an account? Create a</div>
        <Link className="flex w-[127px] h-[24px]  text-[#0054A1] text-[20px]" to={"/singup"}>new account.</Link>
       </div>
       
    </div>
    <ToastContainer />
    </div>
)

}
