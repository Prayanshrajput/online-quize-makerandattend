import React, { useContext, useState } from 'react'
import { Datacontext } from '../context/Datacontext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { List_navbar } from './List_navbar';

export const Addquestion = () => {

const[inp,setinp]=useState("")
const[quecount,setquecount]=useState(0)
const{obj,setobj,mnav}=useContext(Datacontext)

const changehandler=(e)=>{
setinp(e.target.value)
}



const postdata = async () => {
  try {
  
    const res = await fetch(`${window.location.origin}/addquestion`, {
      method: "POST",
      body: JSON.stringify(obj), // Add the correct data in the body
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await res.json();
    setobj((prev)=>{return {...prev,question:"",options:[],answer:-1}})
    setquecount((prev)=>prev+1)
    toast.success("Question Successfull Added")
  } catch (error) {
    console.log("Error fetching data from the server:", error.message);
  }
};

const submithandler= (e)=>{
//  setmainarr(prev=>[...prev,obj])
if(obj.answer==-1){
toast.error("Firstly select right answer")
}
else{
 obj.idofquize&&obj.question&&obj.options.length>1?postdata():toast.error("Please complete all the entry")
 obj({question:"",options:[],answer:-1,idofquize:obj.idofquize})
 console.log(obj)}
}


const maininputhandler=(e)=>{
setobj((prev)=>{return {...prev,[e.target.name]:e.target.value}})
console.log(obj)
}

const answerhandler=(e)=>{
  console.log(e.target.value)
  setobj((prev)=>{return {...prev,answer:e.target.value}})
}

return (
 <div className="flex w-screen h-screen">
   <div className="flex flex-col md:flex-row h-screen min-h-fit w-screen bg-yellow-500">
       <div className="flex flex-col  w-screen md:w-[50%] h-fit  gap-5 pb-5 pt-5">
 
 <div className="flex justify-around text-[20px] font-bold">
   <div>NUMBER OF QUESTION</div>
   <div>{quecount}</div>
 </div>
 
 {/* questions */}
 <div className="flex flex-col">
 <label className="text-[20px] ml-1 font-bold" htmlFor="">Question</label>
 <input className=" rounded-md ml-1 mr-1 text-[20px] font-semibold text-black  border border-black bg-slate-300 " type="text" name="question" value={obj.question} id="" onChange={maininputhandler} />
 </div>
 
 {/* option for  */}
 <label className="text-[20px] font-bold" htmlFor="options">Options( Minimum 2 )</label>
 <div>
 <input className="rounded-md ml-1 mr-1 text-[20px]  border border-black" type="text" name="options" value={inp} onChange={changehandler} />
 <button className=" rounded-md font-bold w-[50px] h-[34px] bg-gray-500 hover:bg-green-400" onClick={()=>{
   setobj((prev)=>{return {...prev,options:[...obj.options,inp]}})
   setinp("")
 }}>ADD</button>
 </div>
 
 <label className="text-[20px] font-bold" htmlFor="">Answer( Present in Options)</label>
 {/* <input className="border border-black" type="text" name="answer" id="" value={obj.answer} onChange={maininputhandler} /> */}
 <div className="flex justify-center">
 <button className="font-extrabold text-[20px] p-2 rounded-md bg-red-500 hover:bg-green-600" onClick={submithandler}>Add question</button>
 </div>
 
 </div>
 
 <div className="flex flex-col  justify-end border  h-fit w-screen md:w-[50%] md:justify-start md:h-screen border-black gap-5">
 <div className="flex flex-col  min-h-fit lg:h-[60%] gap-3">
   <h1 className="flex flex-wrap text-[20px] font-bold break-words">Current question</h1>
   <div className="text-[18px] font-semibold ml-2  w-[96%]  center break-words  " >{obj.question||"None"}</div>
   {
    obj.options.length>0&&obj.options.map((data,index)=>{return <li onClick={answerhandler} key={index} value={index} className="text-[15px] font-semibold" >{data}</li>})
   }
   <div className="flex gap-5">
   <label className="text-[20px] font-bold " htmlFor="">Answer --&gt; </label>
   <div className=" text-green-600 font-bold text-[20px] w-[60%] break-words  ">{obj.options[obj.answer]||"None"}</div>
   </div>
 </div>
 
 <div className="flex justify-center h-fit gap-5 pb-2 pt-2">
 
 <div className=" rounded-md flex justify-center items-center text-[20px] font-bold w-[100px] h-[50px] bg-blue-500 hover:bg-blue-800 hover:text-white"
 onClick={()=>{
   toast.success("Only working question is reset")
   setobj({question:"",options:[],answer:-1,idofquize:obj.idofquize})
 }}
 >
   RESET
 </div>
 
 <div className=" rounded-md flex justify-center items-center text-[20px] font-bold w-[100px] h-[50px] bg-red-400 hover:bg-red-700 hover:text-white"
 onClick={()=>{
   setobj({question:"",options:[],answer:-1,idofquize:""})
 }}
 >
   SAVE
 </div>
 
 </div>
 
 </div>
 <ToastContainer />
  </div>
  {
    mnav?<List_navbar></List_navbar>:<div></div>
   }
 </div>
   )
}
