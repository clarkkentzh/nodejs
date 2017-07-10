var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var name;
app.get("/",function(req,res){
  res.sendFile(__dirname + "/liaotian.html");
});

io.on("connection",function(socket){
  socket.broadcast.emit('guangbo');

  socket.on("in server",function(name,data){
    name = name;
    io.emit("in web",name,data);
    socket.emit("li");
    // io.socket("192.168.1.152").emit("in web",data);
  });
});
http.listen(3000,function(){
  console.log("listening 3000!");
});
