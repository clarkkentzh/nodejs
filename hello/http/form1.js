var http = require("http");

http.createServer(function(req,rep){

  var str ="<meta charset='utf-8'>" +
        "<form method='POST' action='/url'>" +
        "<p>name</p>" +
        "<input type='text' name='name'>" +
        "<p>passwd</p>" +
        "<input type='password' name='passwd'>" +
        "<br><br>" +
        "<button type='submit'>提交</button>" +
        "</form>";

  if(req.url == '/'){
    console.log(req.method);
    rep.writeHead(200,{"Content-Type":"text/html"});
    rep.end(str);
  }else if(req.url == '/url' && req.method == 'POST') {
    var data = '';
    req.on("data",function(datas){
      data += datas;
    });
    req.on("end",function(){
      rep.writeHead(200,{"Content-Type":"text/html"});
      rep.end("you sent a <em>" + req.method + "</em> request" +
      "<p>data: " + data + "</p>");
    });
  }else {
    rep.writeHead(404,{"Content-Type":"text/html"});
    rep.end("<h1>ERROR!</h1>");
  }
}).listen(2500);

//当submit点击提交以后，然后触发request的post请求，然后系统用request的data事件将数据传到回调函数，然后就可以用数据执行一系列操作

//四种事件
// data	当请求体数据到来时，该事件被触发。该事件提供一个参数
// chunk表示接收到的数据。如果该事件没有被监听，那么请求体将会被抛弃。该事件可能会被调用多次。
// end 当请求体数据传输完成时，该事件被触发，此后将不会再有数据到来。
// close用户当前请求结束时，该事件被触发。不同于end，如果用户强制终止了传输，也还是调用close。
