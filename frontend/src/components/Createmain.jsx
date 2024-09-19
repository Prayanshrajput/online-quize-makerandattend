import React, { useContext, useEffect, useRef, useState } from 'react'
import { Datacontext } from '../context/Datacontext'
import { Addquestion } from './Addquestion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
import { List_navbar } from './List_navbar';


export const Createmain = () => {
    const{id,setid,setobj,obj,mnav}=useContext(Datacontext)
    const[data,setdata]=useState({quizetitle:"",time:"",email:Cookies.get("data")})

    if(id){
      setid(" ")
    }

if(obj.idofquize){
  return <Addquestion></Addquestion>
}


    const inputhandler=(e)=>{
        setdata((prev)=>{return {...prev,[e.target.name]:e.target.value}})
    }


    const submithandler=async ()=>{
        setobj((prev)=>{return {...prev,"idofquize":123}})
        if(data.quizetitle&&data.time){
            try{
                const response=await fetch(`${window.location.origin}/createtitle`,{
                    method:"POST",
                    body: JSON.stringify(data),
                    headers: {
                    "Content-Type": "application/json"
                      }
                })
    

                const ans= await response.json()
                console.log(ans.message)
                 setobj((prev)=>{return {...prev,"idofquize":ans.message.idofquize}})
               
            }
            catch(error){
                console.log(error.message)
            }
        }
        else{
            toast.error("Please Full fill the entry")
        }
    }

  return (
   <div className="w-screen h-screen flex">
    <div className=" flex flex-col pt-[30%] lg:pt-0 lg:justify-center items-center h-screen w-screen bg-gray-400 text-[20px] gap-6 font-bold">
   <label htmlFor="quizetitle" className=" font-extrabold text-[30px] text-purple-600">Title of Quiz</label>
    <input className="rounded-md md:w-[350px] w-[300px] h-[50px] border border-slate-950 text-blue-500" type="text" placeholder="Title of Quiz" name="quizetitle" id="" onChange={inputhandler} />
    <label htmlFor="numberofque">Time  (hours : minites : seconds)</label>
    <input className="rounded-md w-[85%] h-[7%] lg:w-[350px] lg:h-[50px] border border-slate-950" type="text" name="time" placeholder="hours : minites : seconds" onChange={inputhandler} />
    <button className="hover:bg-green-600 bg-green-400 p-2 rounded-md" onClick={submithandler}>Submit</button>
    <ToastContainer />
   </div>
   {
    mnav?<List_navbar></List_navbar>:<div></div>
   }
   </div>
  )
}
