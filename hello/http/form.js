var http = require("http");

http.createServer(function(req,rep){

  var str ="<meta charset='utf-8'>" +
        "<form method='POST' action='/url'>" +
        "<p>name</p>" +
        "<input type='text'>" +
        "<p>passwd</p>" +
        "<input type='password'>" +
        "<br><br>" +
        "<button type='submit'>提交</button>" +
        "</form>";

  if(req.url == '/'){
    console.log(req.method);
     //这是get请求,get请求的是'/'

    rep.writeHead(200,{"Content-Type":"text/html"});
    rep.end(str);
  }else if(req.url == '/url' && req.method == 'POST') {
    //post请求的是'/url'，由此可以判断是get还是post请求

    console.log(req.method);
    rep.writeHead(200,{"Content-Type":"text/html"});
    rep.end("<h1>post qingqiu!</h1>");
  }else {
    rep.writeHead(404,{"Content-Type":"text/html"});
    rep.end("<h1>ERROR!</h1>");
  }
}).listen(2500);
