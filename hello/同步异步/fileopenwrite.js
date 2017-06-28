var fs = require("fs");

fs.open("write.md","w",(err,fd) => {
  if(err) {
    console.log(err);
  }else {
    fs.write(fd,"赵宏是帅哥！",(err,writen,string) => {
      if(err) {
        console.log(err);
        fs.close(fd,(err) => {
          if(err) {
            console.log(err);
          }
        });
      }else {
        console.log(writen);
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
