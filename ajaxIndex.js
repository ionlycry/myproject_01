const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  const str = "woshi哈哈哈哈哈哈我是陈荣艳";
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url == "/cry") {
    res.end(str);
  }
  if (req.url == "/") {
    res.end(str + "-----------：这是根站点数据");
  }
});
server.listen("3002", () => {
  console.log("http server running at http://127.0.0.1:3002");
});
