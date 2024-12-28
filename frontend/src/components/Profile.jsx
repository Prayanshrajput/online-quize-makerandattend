import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Datacontext } from '../context/Datacontext'
import { Quiz_question } from './Quiz_question'
import { List_navbar } from './List_navbar'
import { Edit } from './Edit'

export const Profile = () => {
 
useEffect(()=>{
postdata()
},[])



const{quiz,setquiz,num,id,setid,mnav}=useContext(Datacontext)

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
  console.log(id)
  return <Quiz_question  id={id.id} time={id.time}></Quiz_question>
  }

  let arr=[1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1]
  return (
   
    <div className="flex flex-col w-screen h-fit gap-5">
      
{/*first*/}
        <div className="flex mt-5  py-5 justify-evenly lg:gap-[30%] w-screen h-[30%] border border-gray-400  border-solid">
{/* first div */}
            <div className='flex  flex-col justify-center gap-3 items-center w-[50%] h-full'>
              <div className='w-fit h-fit'>
                <label className='text-xl ' htmlFor="">Username :-</label>
                <div className='flex w-[180px] h-[25px] border border-black rounded-md '></div>
              </div>
              <div>  
                <label className='text-xl ' htmlFor="">Total No. Of Quiz :-</label>
                <div className='flex w-[180px] h-[25px] border border-black rounded-md'></div>
              </div>
            </div>
{/* second part */}
            <div className='flex justify-center items-center w-[40%] h-full'>
                  <div className='flex w-[125px] h-[125px] lg:w-[150px] lg:h-[150px] border border-black  rounded-full'>
                    <img src="/default.png" alt="" className='w-fit h-fit scale-50' />
                  </div>
            </div>
        </div>

  {/* second       */}
  <div className='flex justify-between flex-col w-screen h-1/2 gap-7'>
  {/* heading of quize */}
    <div className=' flex text-2xl font-bold'>Total No. Of Quiz :-</div>
  {/* detail of quiz */}
  <div className=' flex justify-center flex-wrap w-fit overflow-y-scroll h-[500px] gap-8'>
    
    {
      arr.map((data)=>{
        return <div className='flex items-center flex-col gap-2 rounded-md w-[150px] h-[185px]  lg:w-[200px] lg:h-[250px] border border-gray-600'>
        <div className='flex rounded-lg h-fit w-full '>
        <img src="/default.png" alt="" className='w-fit h-fit' /></div>
        <div className='flex pl-2 mb-4 rounded-md flex-col h-1/5 w-[90%] border border-black'>
            <div>Result</div>
            {/* <div>Condition</div> */}
        </div>
    </div>
      })
    }

   
    
</div>

  </div>

      {
       mnav?<List_navbar></List_navbar>:<div></div>
      }
    </div>
  )
}
