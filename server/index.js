const http = require("http");
const port = 3000;
const { hostname } = require("os");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("this is home page");
  } else if (req.url == "/download") {
    res.end("this is download page");
  } else {
    res.end("404 error page");
  }
});

server.listen(port, hostname, () => {
  console.log(`server listen in port ${port}`);
});
