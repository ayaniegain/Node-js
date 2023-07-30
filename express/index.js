const express= require("express")
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/about",(req,res)=>{
    res.send("hello world from about")
})

app.get("/download",(req,res)=>{
    res.send("hello world from download")
})

app.listen(port,()=>{
    console.log("exmple of listining port:",port)
})