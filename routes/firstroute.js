const express=require("express")

const route=express.Router()

const{question}=require("../controllers/question")
const{fetchquestion,fetchquestion_byid}=require("../controllers/fetchquestion")
const{titlesave}=require("../controllers/createquize")
const{fetchquiz, userquiz}=require("../controllers/fetchquiz")
const {sing_up}=require("../controllers/sing_up")
const { login } = require("../controllers/login")
const { login_status } = require("../controllers/login_status")
const { profile } = require("../controllers/profile")


route.post("/addquestion",question)
route.get("/fetchquestion",fetchquestion)
route.post("/createtitle",titlesave)
route.get("/fetchquiz",fetchquiz)
route.post("/fetchquestion_byid",fetchquestion_byid)
route.post("/singup",sing_up);
route.post("/login",login)
route.post("/login_status",login_status)
route.post("/userprofile",profile)
route.post("/userquiz",userquiz)

module.exports=route