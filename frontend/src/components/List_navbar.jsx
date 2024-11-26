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
    <div className="flex end-0 absolute justify-center h-screen w-[50%] bg-gray-50 font-bold text-black text-[25px] "> 
    <div className="flex mt-5 justify-around  h-[60%] flex-col">
    <NavLink to="/home" className="  py-[8px] px-[12px] rounded-[8px]  group">
  Home
  <div className=" h-[2px] hover:animate-ping bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </NavLink>

<NavLink to="/createquiz" className="  py-[8px] px-[12px] rounded-[8px]  group ">
Createquize
<div className="w-[100%] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </NavLink>

  <NavLink to="/quiz" className="  py-[8px] px-[12px] rounded-[8px]  group  ">
  Quiz
  <div className="w-[100%] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </NavLink>

  <NavLink to="/profile" className="  py-[8px] px-[12px] rounded-[8px]  group ">
  Profile
  <div className="w-[100%] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </NavLink>

  <NavLink to={log?"":"/login"} className="  py-[8px] px-[12px] rounded-[8px]  group " onClick={statushandler}>
  {log?'Logout':'Login'}
  <div className="w-[100%] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </NavLink>

  <NavLink className=" flex   py-[8px] px-[12px] rounded-[8px]  group " onClick={()=>(setmnav(false))}>
  <CiCircleRemove size={24}/>
  </NavLink>

     </div>
    </div>
  )
}
