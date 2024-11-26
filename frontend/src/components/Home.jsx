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
    
    // <div className=" flex flex-col w-screen h-screen  bg-gray-300">

    //    <div className="flex w-screen h-screen justify-center items-center lg:flex-row flex-col gap-8">
    //    <NavLink to="/quiz" className=" rounded-lg hover:animate-bounce flex border border-blue-600  w-[250px] bg-blue-200  hover:bg-green-300 h-[100px] justify-center items-center text-[30px]  font-bold">Attemp Quiz</NavLink>
    //    <NavLink to="/createquiz" className="rounded-lg hover:animate-bounce flex border border-blue-600 w-[250px] hover:bg-green-300 bg-blue-200 h-[100px] justify-center items-center text-[30px] font-bold">Create Quiz</NavLink>
    //    </div>

    //   {
    //    mnav?<List_navbar></List_navbar>:<div></div>
    //   }
        
    // </div>
    <div className='mt-[2%] flex flex-col w-screen h-screen'>
      <div className='flex justify-center w-screen h-[50%] '>
      <div className='flex flex-col lg:flex-row w-[95%] h-full rounded-3xl bg-[#0049B04D]'>
       {/* first div */}
        <div className='flex lg:w-[65%] lg:h-full w-full h-[65%] justify-center items-center   '>
          <div className='flex flex-col w-fit lg:w-fit h-fit gap-3'>
                <div className='flex lg:w-[60%] w-fit h-fit text-[30px] text-white font-extrabold'>
                Welcome to quiz let’s play and fun
                </div>

                <div className='flex w-[80%] h-fit text-white text-[20px] font-semibold'>
                to check your kanowladge,abilitity and solving speed of question 
                </div>

                <div className='flex justify-center items-center w-[70px] h-[30px] bg-blue-700 text-white font-bold rounded-full'>
                  Login
                </div>
          </div>
        </div>
      {/* second div */}
        <div className='lg:flex hidden lg:w-[35%] lg:h-full w-full h-fit justify-center items-center'>
            <div className='flex lg:h-[250px] lg:w-[250px] w-[150px] h-[150px]  bg-green-400 rounded-full'>
            <img src="./home_que.png" alt="" className='w-fit h-fit rounded-full'/>
            </div>
        </div>
      </div>
      </div>

      <div className='flex flex-col w-screen items-center  h-fit mt-[2%] gap-3'>
        <div className='flex w-[93%] h-fit'>
        <div className='flex font-semibold text-[20px]'>Quiz for school</div>
        </div>
        <div className='flex justify-around  w-[95%] h-fit'>
              <div className='flex w-[300px] h-[300px] bg-gray-400'>
                    <img src="" alt="" />
              </div>

              <div className='flex w-[300px] h-[300px] bg-gray-400'>

              </div>

              <div className='flex w-[300px] h-[300px] bg-gray-400'>

              </div>

              <div className='flex w-[300px] h-[300px] bg-gray-400'>

              </div>

        </div>
      </div>
    </div>
  )
}
