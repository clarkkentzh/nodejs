var fs = require("fs");

fs.open("texts.md","r",(err,fd) => {
  if(err){
    console.log(err);
  }
  else{
    var buf = new Buffer(48);
    fs.read(fd,buf,0,24,0,(err,br,buffer) => {
      if(err){
        console.log(err);
        fs.close(fd,(err) => {
          if(err){
            console.log(err);
          }
        });
      }
      console.log("*****",buf);
      console.log(buffer);
      console.log(buffer.length);
      console.log(br);
      fs.close(fd,(err) => {
        if(err){
          console.log(err);
        }
      });
    });
  }
});
