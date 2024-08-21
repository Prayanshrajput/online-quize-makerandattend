import { Children, createContext, useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";

export const Datacontext=createContext()

export default function DatacontextProvider({children}){

    const [cookies, setCookie,removeCookie] = useCookies(['authToken']);
const[idofquize,setidofquize]=useState("")
const[obj,setobj]=useState({question:"",options:[],answer:-1})
const[quiz,setquiz]=useState([])
const[id,setid]=useState({})
const[score,setScores]=useState([])
const[time,settime]=useState(false)
const[log,setlog]=useState(false)
const [mainarr,setmainarr]=useState([])
const[ind,setind]=useState(0)
const[selectedoption,setsetectedoption]=useState(score)
const[mnav,setmnav]=useState(false)
const num=true;

useEffect(()=>{
    const data=Cookies.get("token")
    fetchquize()
    if(data){
        setlog(true)
    }
},[])

const fetchquize=async()=>{
    try{
const response= await fetch(`${window.location.origin}/fetchquiz`)
const data= await response.json();
 setquiz(data.message)
    }
    catch(error){
        console.log(error)
    }
}


const value={
    idofquize,setidofquize,
    time,settime,
    score,setScores,
    obj,setobj,
    quiz,setquiz,
    id,setid,
    num,log,setlog,mainarr,setmainarr,ind,setind,
    mnav,setmnav,
    selectedoption,setsetectedoption,
    cookies, setCookie,removeCookie,
}

return <Datacontext.Provider value={value}>
    {children}
</Datacontext.Provider>
}

