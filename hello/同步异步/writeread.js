var fs = require("fs");

fs.readFile("./text.md","utf8",function(err,data){
  //readFile第二个参数是编码格式
  //回调函数第一个参数固定是错误信息，第二个参数是返回结果.


    // console.log(err);  //null
//读文件操作
    console.log(data);
});
console.log("read the file end!");




fs.writeFile("./texts.md","是帅哥!",function(err){
  //异步写入
  //writeFile第一个参数是要写入的文件，若有这个文件，则覆盖文件的内容，若没有则创建一个文件，第二个参数是要写入的内容。

  if(err){
    console.log(err);
  }
});

fs.readFile("./texts.md","utf8",function(err,data){
  console.log(data);
});

//异步IO，读文件的操作太慢，所以是先打印出最后的这句话，然后才是文件的内容
