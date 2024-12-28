import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Datacontext } from '../context/Datacontext'
import { List_navbar } from './List_navbar'


export const Home = () => {

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
    
  
    <div className='mt-[3%] flex flex-col gap-5  w-screen h-fit'>
     
      <div className='flex justify-center lg:h-[50%] w-screen h-fit'>
      <div className='flex px-1 py-2 items-center flex-row w-[95%] h-fit rounded-3xl bg-[#0049B04D]'>
       {/* first div */}
        <div className='flex p-3 lg:p-0 w-[65%]  lg:h-full h-fit justify-center items-center   '>
          <div className='flex flex-col w-fit  h-fit gap-3'>
                <div className='flex  lg:w-[60%] w-fit h-fit text-[20px] lg:text-[30px] text-white font-extrabold'>
                Welcome to quiz let’s play and fun
                </div>

                <div className=' lg:flex w-[80%]  ` h-fit text-white lg:text-[20px] font-semibold'>
                to check your kanowladge,abilitity and solving speed of question 
                </div>

                <div className=' hidden lg:flex  justify-center items-center w-[70px] h-[30px] bg-blue-700 text-white font-bold rounded-full'>
                  Login
                </div>
          </div>
        </div>
      {/* second div */}
        <div className='flex w-[30%] lg:h-full h-full   justify-center items-center'>
            <div className='flex lg:h-[250px] lg:w-[250px] w-full h-full   rounded-full'>
            <img src="./home_que.png" alt="" className='w-fit h-fit rounded-full'/>
            </div>
        </div>
      </div>
      </div>

      <div className='lg:hidden  flex w-full h-fit justify-center items-center '>
      <div className=' flex  justify-center items-center w-[70px] h-[30px] bg-blue-700 text-white font-bold rounded-full' onClick={()=>{}}>
                 { log?"Logout":"Login"}
                </div>
      </div>

       {
        mnav?<List_navbar></List_navbar>:<div></div>
       }
    </div>
    
  )
}
