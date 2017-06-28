//用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
var http = require("http");

//用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 2000 端口。 函数通过 request, response 参数来接收和响应数据。
http.createServer(function(req,res){

  // 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
  res.writeHead(200,{"Content-Type":"text/html"});


  // 发送响应数据 "Hello World"
  res.end("shishichenggonglemei");


}).listen(2000);


  // 终端打印如下信息
  console.log('Server running at http://127.0.0.1:8888/');
