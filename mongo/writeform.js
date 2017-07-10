var http = require("http");
var fs =require("fs");

http.createServer(function(req,rep){

  var str ="<meta charset='utf-8'>" +
        "<form method='POST' action='/url'>" +
        "<p>name</p>" +
        "<input type='text' name='name'>" +
        "<p>passwd</p>" +
        "<input type='password' name='pass'>" +
        "<br><br>" +
        "<button type='submit'>提交</button>" +
        "</form>";
  if(req.url == '/'){
    rep.writeHead(200,{"Content-Type":"text/html"});
    rep.end(str);
  }else if("/url" == req.url){
    var ss = "";
    req.on("data",function(result){
      ss += result;
    });
    req.on("end",function(){
      fs.writeFile("text.md",ss,function(err){
        if(err){
          console.log(err);
        }
      });
      rep.writeHead(200,{"Content-Type":"text/html"});
      rep.end("sssssss");
    })
  }
}).listen(2500);
