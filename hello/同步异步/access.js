var fs = require("fs");

fs.access("node",fs.constants.F_OK,(err) => {
//access判断目录是否存在或者是否有相应的权限,第二个参数是mode.


  if(err){
    console.log("no dir");
  }
  else {
    console.log("have dir");
  }
});
