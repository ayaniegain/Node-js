const express= require("express")
const path =require("path")
const app=express()
const port=3000

let pathDir=path.join(__dirname,'public')
app.use(express.static(pathDir))


app.get("/",(req,res)=>{
    res.sendFile(`${pathDir}/home.html`)
})

app.get("/about",(req,res)=>{
    res.sendFile(`${pathDir}/about.html`)
})

app.get("/download",(req,res)=>{
    res.download(`${pathDir}/task.pdf`)

})

app.listen(port,()=>{
    console.log("exmple of listining port:",port)
})