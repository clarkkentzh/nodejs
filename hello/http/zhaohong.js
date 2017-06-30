var http = require('http');
var serv = http.createServer(function(req, res){
    var str = "<meta charset='UTF-8'>" +
    "<style>h1 {color:green;text-align:center;}" +
    "</style>" +
    "<h1>赵宏</h1>" +
    "<p>这是第一个项目页面</p>" +
    "<input type='password'>" +
    "<br><br>" +
    "<a href='#' style='text-decoration:none'>点击立地成佛!</a>";
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(str);
}).listen(3000);

console.log("正在监听赵宏的服务器，端口3000");
