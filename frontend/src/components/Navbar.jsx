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
   <div className='flex mt-2 w-screen h-fit justify-center'>
    <div className="flex justify-between shadow-lg items-center w-[95%] h-[60px]  font-bold border border-white ">
    <div className="flex w-[50%] items-center text-blue-700  pl-[10%] h-[100%] font-extrabold text-[20px] lg:text-[25px] animate-pulse lg:animate-bounce " >Quiz Master</div>
    <div className="flex w-[50%] pr-5 justify-end lg:hidden " onClick={()=>(setmnav(!mnav))}> <FaListUl size={25} className="flex bg-white" /></div>
     <div className=" hidden lg:flex justify-evenly items-center w-[60%] h-[100%] text-[20px]">
 
 <NavLink to="/home" className=" text-blue-700  py-[8px] px-[12px] rounded-[8px]  group">
    Home
    <div className="w-[100%] h-[2px] bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </NavLink>

 <NavLink to="/createquiz" className=" text-blue-700 py-[8px] px-[12px] rounded-[8px] group ">
 Createquize
 <div className="w-[100%] h-[2px] bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </NavLink>

    <NavLink to="/quiz" className=" text-blue-700 py-[8px] px-[12px] rounded-[8px]  group  ">
    Quiz
    <div className="w-[100%] h-[2px] bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </NavLink>

    <NavLink to="/profile" className=" text-blue-700 py-[8px] px-[12px] rounded-[8px] group ">
    Profile
    <div className="w-[100%] h-[2px] bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </NavLink>

    <NavLink to={log?"":"/login"} className=" text-blue-700 py-[8px] px-[12px] rounded-[8px] group " onClick={statushandler}>
    {log?'Logout':'Login'}
    <div className="w-[100%] h-[2px] bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </NavLink>

    
    </div>
   </div>
   </div>
  )
}
