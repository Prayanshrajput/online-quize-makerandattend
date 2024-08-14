import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Singup = () => {
  
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
            toast.error("Mach your password")
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
    // <div className="flex flex-col h-screen w-screen justify-center items-center">
    //     <div className="text-[40px] text-indigo-700 font-extrabold">Quiz_Maker</div>
    //     <form className="flex flex-col justify-around  w-[500px] h-fit border border-black bg-gray-300" action="">
           
    //     <div className="flex flex-col gap-2">
    //      <label className="text-[20px] font-bold  " htmlFor="">Enter your userName</label>
    //      <input className=" flex h-[50px] border border-black font-bold" name='username' onChange={changehandler} type="text" placeholder="Enter your name" />
    //      </div>

    //      <div className="flex flex-col gap-2">
    //      <label className="text-[20px] font-bold  " htmlFor="">Enter your mail</label>
    //      <input className=" flex h-[50px] border border-black font-bold" name='email' onChange={changehandler} type="email" placeholder="xyz@gmail.com" />
    //      </div>

    //        <div className="flex flex-col gap-2">
    //        <label className="text-[20px] font-bold" htmlFor="">Enter your password</label>
          
    //        <div class="w-[100%] flex items-center border border-black font-bold  bg-white">
    //         <input class="flex-grow h-[50px]  focus:outline-none " name='password'  type={pass?"password":"text"} onChange={changehandler} placeholder="Enter your password"/>
    //       {  Showhandler && <div class="cursor-pointer p-2" onClick={passwordhandler}>{pass?"Show":"Hide"}</div>}
    //         </div>
    //        </div>

    //        <div className="flex flex-col gap-2">
    //        <label className="text-[20px] font-bold" htmlFor="">Conform password</label>
          
    //        <div class="w-[100%] flex items-center border border-black font-bold  bg-white">
    //         <input class="flex-grow h-[50px]  focus:outline-none " name='conformpassword' type={conformpass?"password":"text"} onChange={changehandler} placeholder="Enter your password"/>
    //       {  conformshowhandler && <div class="cursor-pointer p-2" onClick={conformpasswordhandler}>{conformpass?"Show":"Hide"}</div>}
    //         </div>
    //        </div>

    //         <div className="flex justify-center">
    //         <button className="flex justify-center items-center w-[100px] h-[50px] bg-blue-600 text-[20px] font-extrabold opacity-70 hover:opacity-100 " onClick={submithandler}>Singup</button>
    //         </div>

    //         <div className="flex  justify-center items-center text-blue-600">
    //             <NavLink to="/login"  className="hover:font-bold">
    //              Login
    //             </NavLink>
    //         </div>
    //     </form>
    //     <ToastContainer />
    // </div>

    <div className="flex w-screen h-screen justify-center items-center">       
    <div className="flex flex-col gap-[32px] w-[648px] h-[556px]  rotate-[16px] border border-[#CECECE] p-[60px] bg-slate-50">
    <div className="flex justify-center text-[40px] h-[58px] w-[528px] font-[600]">Welcome to<div className="text-[#4534AC]">&nbsp;Quiz_Master </div></div>
   <div className="flex flex-col w-[528px] h-[290px] gap-[42px]">
   <input className="flex w-[528px] h-[56px] rounded-[8px] border border-[#999999] bg-[#EBEBEB] pr-[12px] pl-[12px] " type="text" name="name" value={data.name} onChange={inputhandler} placeholder='Full name' />
    <input className="flex w-[528px] h-[56px] rounded-[8px] bg-[#EBEBEB] pr-[12px] pl-[12px]" type="email"  id="" name="email" value={data.email} onChange={inputhandler} placeholder="Your email" />
   
    <div className="flex w-[528px] h-[56px] rounded-[8px] bg-[#EBEBEB] ">
    <input className="w-[90%] bg-[#EBEBEB] rounded-[8px] focus:outline-none   pr-[12px] pl-[12px] " type={pass?"text":"password"} name='password' value={data.password} onChange={inputhandler} placeholder='Password' />
   <div className="w-[10%] flex justify-center items-center"> <img src="/show.png" className="w-[24px] h-[24px]" onClick={passwordhandler} alt="" /></div>
    </div>

    <button onClick={submithandler} className="flex justify-center items-center w-[528px] h-[52px] text-[#FFFFFF] rounded-[8px] bg-gradient-to-t from-[#4B36CC] to-[#9C93D4]">Sing up</button>
   </div>

   <div className="flex justify-center items-center h-[24px] gap-[4px]">
   <div className="flex justify-end w-[244px] h-[24px] text-[#606060] font-[400] text-[20px]" >Already have an account?</div>
   <Link className="flex w-[63px] h-[24px] text-[20px] font-[400] text-[#0054A1]" to={"/login"}>Log in.</Link>
   </div>
  
</div>
<ToastContainer />
</div>
  )
}
