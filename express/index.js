const express= require("express")
const path =require("path");
const { title } = require("process");
const app=express()
const port=3000

// let pathDir=path.join(__dirname,'public')
// app.use(express.static(pathDir))
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    // res.sendFile(`${pathDir}/home.html`)
    res.render("home.ejs", {title: title});

})

app.get("/about",(req,res)=>{
    // res.sendFile(`${pathDir}/about.html`)
    res.render("about.ejs", {title: title});

})

app.get("/download",(req,res)=>{
    // res.download(`${pathDir}/task.pdf`)
    res.render("download.ejs", {title: title});



})

app.listen(port,()=>{
    console.log("exmple of listining port:",port)
})