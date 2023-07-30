const http = require("http");
const port = 3000;
const { hostname } = require("os");
const fs = require("fs");
const apiData = fs.readFileSync("api.json", "utf-8");
const objdata=JSON.parse(apiData)

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    // res.end(objdata);
  } else if (req.url == "/download") {
    res.end("this is download page");
  } else {
    res.end("404 error page");
  }
});

server.listen(port, hostname, () => {
  console.log(`server listen in port number ${port}`);
});
