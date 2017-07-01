var fs = require("fs");

fs.open("write.md","w",(err,fd) => {
  if(err) {
    console.log(err);
  }else {

  //写进去的内容会覆盖原先的内容
    fs.write(fd,"赵宏是帅哥！",(err,writen,string) => {
      if(err) {
        console.log(err);
        fs.close(fd,(err) => {
          if(err) {
            console.log(err);
          }
        });
      }else {
        console.log(writen); //传入的字符串被写入多少字节
        console.log(string);
        fs.close(fd,(err) => {
          if(err){
            console.log(err);
          }
        });
      }
    });
  }
});
