import React, { useContext, useEffect } from 'react'
import { Datacontext } from '../context/Datacontext'

export const Edit = (prop) => {
  const{mainarr,setmainarr}=useContext(Datacontext)
  
  fechdata()

  const fechdata=async()=>{
    const res = await fetch(`${window.location.origin}/fetchquestion_byid`, {
        method: "POST",
        body: JSON.stringify({idofquize:prop.id}), // Add the correct data in the body
        headers: {
          "Content-Type": "application/json"
        }
      });

      const ans= await res.json()

    setmainarr(ans.message)
    console.log(ans)

    
    if(score.length==0)
  {
    const array = new Array(mainarr.length).fill(-1);
      setScores(array)
    }

}
  
  return (
    <div>
         <div className="flex flex-row flex-wrap gap-5 ml-5 items-center justify-center">
          {
            mainarr.map((ind,data)=>{
              <div className="flex flex-row flex-wrap gap-5 ml-5 items-center justify-center">
              {mainarr[ind].options.map((data,index)=>{
               return <div
               key={index}
                className={`flex  flex-row w-[100px] h-[40px]  overflow-hidden text-wrap lg:w-[300px] lg:h-[70px]  hover:bg-white justify-center items-center border border-black ${selectedoption[ind]==index?`bg-blue-300`:`bg-transparent`} `}
                 onClick={optionshandler}
                //  selected={selectedoption}
                id={index}
                >{data}</div>
              })}
              </div>
            })
          }
      </div>
    </div>
  )
}
