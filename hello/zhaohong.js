var http = require('http');
var serv = http.createServer(function(req, res){
    var str = "<meta charset='UTF-8'>" +
    "<style>h1 {color:green;text-align:center;}" +
    "</style>" +
    "<h1>赵宏</h1>" +
    "<p>这是第一个项目页面</p>" +
    "<input type=\"password\">";
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(str);
});
serv.listen(3000);
