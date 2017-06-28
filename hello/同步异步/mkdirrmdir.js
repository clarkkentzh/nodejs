var fs = require("fs");

fs.access("node",fs.constants.F_OK,(err) => {
  if(err){
    fs.mkdir("node",(errs) => {
      if(errs){
        console.log(errs);
      }else {
        console.log("创建成功！");
      }
    })
  }else {
    fs.rmdir("node",(errss) => {
      if(errss){
        console.log(errss);
      }else {
        console.log("删除成功！");
      }
    });
  }
});
