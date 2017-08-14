var fs = require("fs");

fs.open("texts.md","r",(err,fd) => {
  if(err){
    console.log(err);
  }
  else{
    var buf = new Buffer(8);
    fs.read(fd,buf,0,8,0,(err,br,buffer) => {
      if(err){
        console.log(err);
        fs.close(fd,(err) => {
          if(err){
            console.log(err);
          }
        });
      }
  //buffer没有读取到文件时也有一连串字
      console.log(buffer);  //buffer属于回调函数返回值
      console.log("*****",buf);  //buf是事件里的
      console.log(buffer.length);
      console.log(br);   //读到的字节数
      fs.close(fd,(err) => {
        if(err){
          console.log(err);
        }
      });
    });
  }
});
