var fs = require("fs");

var data = "赵宏是帅哥！";

try {
  fs.writeFileSync("sync.md",data);
  console.log(data);
}catch(err){
  console.log("这是错误信息",err);
}
console.log("write the file end!");
