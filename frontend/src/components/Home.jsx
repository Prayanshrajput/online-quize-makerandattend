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

// old code

{/* <div className='flex justify-center lg:h-[50%] w-screen h-fit'>
      <div className='flex px-1 py-2 items-center flex-row w-[95%] h-fit rounded-3xl bg-[#0049B04D]'>
       first div 
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
     second div
        <div className='flex w-[30%] lg:h-full h-full   justify-center items-center'>
            <div className='flex lg:h-[250px] lg:w-[250px] w-full h-full   rounded-full'>
            <img src="./home_que.png" alt="" className='w-fit h-fit rounded-full'/>
            </div>
        </div>
      </div>
      </div> */}


  return (
    
    
  
    <div className='mt-[3%] flex flex-col gap-2 overflow-hidden max-w-screen h-fit'>
     
     <div className='flex justify-center lg:h-[50%] w-screen h-fit'>
      <div className='flex px-1 py-2 items-center flex-row w-[95%] h-fit rounded-3xl bg-[#0049B04D] '>
       {/* first div  */}
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

{/* main box */}
      <div className='hidden  w-full h-fit justify-center items-center '>
      <div className=' flex  justify-center items-center w-[70px] h-[30px] bg-blue-700 text-white font-bold rounded-full' onClick={()=>{}}>
                 { log?"Logout":"Login"}
                </div>
      </div>


{/* first peregraph */}
      <div className='flex w-full h-fit justify-center '>
        <div className='flex flex-col w-[90vw] h-fit gap-4 items-center justify-center  '>
            <div className='flex w-fit h-fit lg:text-[40px] text-center text-[7vw] font-bold text-[#7070f2]'>Make your own quiz with our online quiz maker</div>
            <div className='flex w-full h-fit justify-center text-center text-[4vw] lg:text-[25px]'>Quickly and easily create interactive online quizzes for free! With Quizizz, you can create a quiz that boosts engagement and participation with just a few clicks. Whether you’re looking to create a homework assignment for Math class, or an ice breaker to welcome new faces, there’s something here for everyone.</div>
        </div>
      </div>

{/* about school section */}
      <div className='flex w-full h-fit justify-center '>
        <div className='flex w-[90vw] justify-around items-center h-[40vw] lg:h-[40vh] '>
          <div className='flex flex-col justify-center gap-3 w-[50%] h-full'>
            <div className='flex lg:text-[30px] text-[5vw] font-semibold text-[#7070f2]'>Quizizz for Schools </div>
            <div className='lg:text-[22px] text-justify text-[3vw]'>Craft questions that enable students to identify multiple relevant areas, challenging them to think deeply about the image's elements and their relationships.</div>
          </div>
          <div className='flex w-[30%] rounded-lg h-[70%] bg-[#6a185f]'>
            <img src="/school.jpg" className='w-full h-full rounded-lg ' alt="" />
          </div>
        </div>
      </div>

{/* about work section */}

      <div className='flex flex-col w-full h-fit items-center '>
        <div className='flex w-[90vw] justify-around items-center h-[50vw] lg:h-[40vh] '>
          <div className='flex flex-col justify-center gap-3 w-[50%] h-full'>
            <div className='flex lg:text-[30px] text-[5vw] font-semibold text-[#7070f2]'>Quizizz for Work </div>
            <div className='lg:text-[22px] text-justify text-[3vw]'>Make employee training and education fun with Quizizz for Work. Our online quiz maker enables you to facilitate live engagement through presentations, quizzes, and polls. Use Quizizz at work for employee onboarding, e-learning, community engagement, and more!</div>
          </div>
          <div className='flex w-[30%] rounded-lg h-[70%] bg-[#6a185f]'>
          <img src="/work.jpg" className='w-full h-full rounded-lg ' alt="" />
          </div>
        </div>
        </div>

{/* last peregraph */}
       <div className='flex w-[100%] h-fit mt-5 p-5 justify-center'>
       <div className='flex w-[90vw] h-fit text-center text-[4vw] lg:text-[25px]'>Create immersive quizzes complete with images, gifs, audio clips, videos, graphs, illustrations, and so much more! Tap into 12+ question types including Multiple Choice, Drag and Drop, Fill in the Blanks, and Hotspot. With Quizizz, you can also double the fun with power-ups, music, themes, and memes. </div>
       </div>


       {
        mnav?<List_navbar></List_navbar>:<div></div>
       }
    </div>
    
  )
}
