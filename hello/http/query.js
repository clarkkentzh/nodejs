var query = require("querystring");
var http = require("http");

http.createServer(function(req,rep){

  var str ="<meta charset='utf-8'>" +
        "<form method='POST' action='/index.html'>" +
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
  }
  else if(req.url == '/url' && req.method == 'POST') {
    var data = '';
    req.on("data",function(datas){
      // console.log(datas); //一个buffer格式的内容
      data += datas;
      // console.log(data);  //name=fffff&passwd=444444 字符串
    });
    req.on("end",function(){
      rep.writeHead(200,{"Content-Type":"text/html"});
      rep.end("you sent a <em>" + req.method + "</em> request" +
      "<p>data: " + data + "</p>");
      console.log(query.parse(data));
    });
  }
  else {
    rep.writeHead(404,{"Content-Type":"text/html"});
    rep.end("<h1>ERROR!</h1>");
  }
}).listen(2500);

//query.parse()方法能把一个 URL 查询字符串（str）解析成一个键值对的集合，就是json文件
