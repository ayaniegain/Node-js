const path =require("path")
const dirname=path.dirname("https://www.youtube.com/watch?v=61c-YH0KDeM&ab_channel=simplyjs")
const basename=path.basename("https://www.youtube.com/watch?v=61c-YH0KDeM&ab_channel=simplyjs")
const extention=path.extname("https://www.youtube.com/watch?v=61c-YH0KDeM&ab_channel=simplyjs.html")

console.log("dirname:",dirname)
console.log("basename:",basename)
console.log("extention:",extention)