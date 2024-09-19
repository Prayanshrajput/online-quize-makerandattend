import React, { useContext, useState } from 'react'
import { Datacontext } from '../context/Datacontext'

export const Question = () => {
  
    const{mainarr,setmainarr,score,setScores,ind,selectedoption,setsetectedoption}=useContext(Datacontext)
  // const[selectedoption,setsetectedoption]=useState(score)

    const optionshandler=(e)=>{
      let index=e.target.id
      const newarray=selectedoption
      selectedoption[ind]=index
      setsetectedoption(newarray)
      
      if(data.options[index]==data.answer){
        setScores((prevScores) => {
          const newScores = [...prevScores];
          newScores[data.index] = 100;
          return newScores;
        });
      
         console.log(score)
      }else{
      setScores((prevScores) => {
          const newScores = [...prevScores];
          newScores[data.index] = -1;
          return newScores;
          
        })
      
      }
      
      console.log(score)
          }

if(mainarr.length==0){
  return <h1>Server Down</h1>
}
  console.log(mainarr)
  return (

<div className='flex  w-screen h-fit border-b-2 border-black  bg-white '>
  
 <div className='flex lg:flex-row  flex-col w-full h-full '>
 <div className='flex lg:w-[60%] justify-center w-full h-full '>
  <div className="flex flex-wrap text-wrap w-[90%] justify-center text-[25px] mt-[20px] font-bold">{mainarr[ind].question}</div>
  </div>
  
  <div className='flex w-full lg:w-[40%]  pt-9 pl-2 pb-9 h-fit justify-center lg:border-l-2 border-black '>
  <div className='flex lg:flex-col flex-wrap gap-7'>
  {mainarr[ind].options.map((data,index)=>{
         return <div
         key={index}
          className={`flex rounded-lg w-[150px] h-[50px]  overflow-hidden text-wrap lg:w-[300px] lg:h-[70px]  hover:bg-green-200 justify-center items-center border border-black ${selectedoption[ind]==index?`bg-blue-300`:`bg-transparent`} `}
           onClick={optionshandler}
          //  selected={selectedoption}
          id={index}
          >{data}</div>
        })}
  </div>
  </div>

 </div>
  
  </div>
  )
}
