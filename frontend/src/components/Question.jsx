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
<div>
<div className="flex flex-col h-[400px] w-[800px] min-h-fit gap-5  items-center bg-slate-300">
       
       <div className="flex text-[25px] mt-[20px] font-bold">{mainarr[ind].question}</div>
      <div className="flex flex-wrap gap-5 ml-5 items-center justify-center">
      {mainarr[ind].options.map((data,index)=>{
       return <div
       key={index}
        className={`flex w-[300px] h-[70px]  hover:bg-white justify-center items-center border border-black ${selectedoption[ind]==index?`bg-white`:`bg-transparent`} `}
         onClick={optionshandler}
        //  selected={selectedoption}
        id={index}
        >{data}</div>
      })}
      </div>
    
      {/* <div>{data.answer}</div> */}
    </div>  
</div>
  )
}
