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
    <div className="flex justify-evenly items-center w-screen h-[40px] bg-black font-extrabold text-[20px]">
 
 <NavLink to="/home" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl  ">
    Home
    </NavLink>

 <NavLink to="/createquiz" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl  ">
 Createquize
    </NavLink>

    <NavLink to="/quiz" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl  ">
    Quiz
    </NavLink>

    <NavLink to={log?"":"/login"} className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl  " onClick={statushandler}>
    {log?'Logout':'Login'}
    </NavLink>

    <NavLink to="/profile" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl  ">
    Profile
    </NavLink>

    </div>
  )
}
