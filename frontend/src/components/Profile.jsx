import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Datacontext } from '../context/Datacontext'
import { Quiz_question } from './Quiz_question'

export const Profile = () => {
 
useEffect(()=>{
postdata()
},[])


const{quiz,setquiz,num,id,setid}=useContext(Datacontext)

const data= {email:""}
const[createquiz,setcreatequiz]=useState([{nameofquize:"emaple",time:"00:10:00"}
])
const[attendquiz,setattendquiz]=useState([])

const postdata=async()=>{
  try{
      data.email=Cookies.get("data")
     const response=await fetch(`${window.location.origin}/userquiz`,{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
              "Content-Type":"application/json"
      }
  }  )

  // const response= await fetch(`http://localhost:2222/userprofile`,{
  //     method:"POST",
  //     body:JSON.stringify(data),
  //     headers:{
  //       "Content-Type":"application/json"
  //     }
  //   })

    const result=await response.json()
    console.log(result)
    if(result.success==true){
      setcreatequiz(result.quizdata)
    }
  }
  catch(error){
    alert(error.message)
  }
}


if(id.id){
  return <Quiz_question  id={id.id} time={id.time}></Quiz_question>
  }

  return (
   
    <div className="flex flex-col w-screen h-screen">
        <div className="flex flex-col text-[25px] gap-2 font-bold">
            <h1>User Name</h1>
            <h1>Prayansh Rajput</h1>
        </div>

        {/* <div className="bg-slate-400 flex flex-col w-screen h-[300px] gap-5">
            <h1 className="text-[25px]">Your Quiz</h1>
           <div className="flex w-svw  gap-5 overflow-x-scroll">
           {
             createquiz.map((data)=>{return <div  className="flex text:[20px] md:text-[25px] rounded-md font-bold flex-col justify-center items-center hover:bg-green-400 bg-slate-200 h-[100px] md:h-[200px] w-[150px] md:w-[250px] " >
              <div>{data.nameofquize}</div>
              <div>{data.time}</div>
             </div>})
            }
           </div>
           
           
        </div> */}

<div className="flex w-screen   justify-center items-center flex-wrap gap-5">
      <div className=" flex  w-screen justify-center items-center text-[25px] font-bold text-red-500">
        YOUR QUIZ
      </div>
        {
          createquiz.map((data,index)=>{
              return   <div  key={index} name="start"  onClick={(e)=>{
                  setid({id:e.target.id,time:e.target.getAttribute('time') }) 
              }}  className="flex text:[20px] md:text-[25px] rounded-md font-bold flex-col justify-center items-center hover:bg-green-400 bg-slate-200 h-[100px] md:h-[200px] w-[150px] md:w-[250px] " id={data.idofquize} time={data.time}>
             {data.nameofquize} <br />
           Time - {data.time}
           <div>Edit</div>
          </div>
          })
        }
      </div>

    </div>
  )
}
