import React, { useContext, useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom' 
import Cookies from 'js-cookie'
import { Datacontext } from '../context/Datacontext'

export const Navbar = () => {

 const{log,setlog}=useContext(Datacontext)


const statushandler=()=>{
  if(log){
    setlog(!log)
    Cookies.remove("data")
    Cookies.remove("token")
    window.location.reload();
  }
 
}

  return (
   <div className=" fixed flex justify-between items-center w-screen h-[60px] bg-black font-bold border border-white ">
    <div className="flex w-[40%] items-center text-white pl-[10%] h-[100%] font-extrabold text-[25px] " >Quiz Maker</div>
     <div className="flex justify-evenly items-center w-[60%] h-[100%] text-[20px]">
 
 <NavLink to="/home" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl group">
    Home
    <div className="w-[100%] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </NavLink>

 <NavLink to="/createquiz" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl group ">
 Createquize
 <div className="w-[100%] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </NavLink>

    <NavLink to="/quiz" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl group  ">
    Quiz
    <div className="w-[100%] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </NavLink>

    <NavLink to="/profile" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl group ">
    Profile
    <div className="w-[100%] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </NavLink>

    <NavLink to={log?"":"/login"} className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl group " onClick={statushandler}>
    {log?'Logout':'Login'}
    <div className="w-[100%] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </NavLink>

    
    </div>
   </div>
  )
}
