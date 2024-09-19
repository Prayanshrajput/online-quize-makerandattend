import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Datacontext } from '../context/Datacontext'
import { List_navbar } from './List_navbar'


export const Home = () => {

  const{id,setid,log,setlog,mnav,setmnav}=useContext(Datacontext)

  if(id){
    setid(" ")
  }

  const statushandler=()=>{
    if(log){
      setlog(!log)
      Cookies.remove("data")
      Cookies.remove("token")
      window.location.reload();
    }
   
  }
  return (
    
    <div className=" flex flex-col w-screen h-screen  bg-gray-300">

       <div className="flex w-screen h-screen justify-center items-center lg:flex-row flex-col gap-8">
       <NavLink to="/quiz" className=" rounded-lg hover:animate-bounce flex border border-blue-600  w-[250px] bg-blue-200  hover:bg-green-300 h-[100px] justify-center items-center text-[30px]  font-bold">Attemp Quiz</NavLink>
       <NavLink to="/createquiz" className="rounded-lg hover:animate-bounce flex border border-blue-600 w-[250px] hover:bg-green-300 bg-blue-200 h-[100px] justify-center items-center text-[30px] font-bold">Create Quiz</NavLink>
       </div>

      {
       mnav?<List_navbar></List_navbar>:<div></div>
      }
        
    </div>
  )
}
