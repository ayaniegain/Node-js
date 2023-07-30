let fs= require("fs")

// fs.writeFile("../fsmodule/doc.txt","new data",()=>{
//     // console.log("file saved")
// })
fs.readFile("../fsmodule/doc.txt","utf-8",(err,data)=>{
    // console.log(data)
    // console.log(err)
})

let newline=" this is new line"
fs.appendFile("../fsmodule/doc2.txt",newline,(err)=>{
    // console.log(err)
})

fs.unlink("../fsmodule/doc.txt2",(err)=>{
    console.log(err)
})