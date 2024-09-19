import React, { useContext, useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom' 
import Cookies from 'js-cookie'
import { Datacontext } from '../context/Datacontext'
import { FaListAlt, FaListUl } from "react-icons/fa";

export const Navbar = () => {

 const{log,setlog,mnav,setmnav}=useContext(Datacontext)


const statushandler=()=>{
  if(log){
    setlog(!log)
    Cookies.remove("data")
    Cookies.remove("token")
    window.location.reload();
  }
 
}

  return (
   <div className="flex justify-between items-center w-screen h-[60px] bg-black font-bold border border-solid border-white ">
    <div className="flex w-[50%] items-center text-white pl-[10%] h-[100%] font-extrabold text-[25px] " >Quiz Master</div>
    <div className="flex w-[50%] pr-5 justify-end lg:hidden " onClick={()=>(setmnav(!mnav))}> <FaListUl size={25} className="flex bg-white" /></div>
     <div className=" hidden lg:flex justify-evenly items-center w-[60%] h-[100%] text-[20px]">
 
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
