var fs = require("fs");

var data = fs.readFileSync("./text.md","utf8");

console.log("read the file start!");
console.log(data);
console.log("read the file end!");

//这属于同步IO操作
