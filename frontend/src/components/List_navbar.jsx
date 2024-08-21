import React, { useContext } from 'react'
import { Datacontext } from '../context/Datacontext'
import { NavLink } from 'react-router-dom'
import { CiCircleRemove } from "react-icons/ci";

export const List_navbar = () => {

    const{id,setid,log,setlog,mnav,setmnav}=useContext(Datacontext)


  const statushandler=()=>{
    if(log){
      setlog(!log)
      Cookies.remove("data")
      Cookies.remove("token")
      window.location.reload();
    }
   
  }

  return (
    <div className="flex end-0 absolute justify-center h-screen w-[60%] bg-black text-[25px] "> 
    <div className="flex justify-around  h-[50%] flex-col">
    <NavLink to="/home" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl group">
  Home
  <div className=" h-[2px] hover:animate-ping bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

  <NavLink className=" flex  text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl group " onClick={()=>(setmnav(false))}>
  <CiCircleRemove size={24}/>
  </NavLink>

     </div>
    </div>
  )
}
