var fs = require("fs");

//stat查询文件或目录的信息
fs.stat("./text.md",(err,stats) => {
  console.log(stats);
  if(err){
    console.log(err);
  }
});


//dev,在这里指一个节点。
//uid是和用户关联的,用户id
//gid组id。
//blksize 块的大小，固定的，内存一页的大小
//size如果是文件则是文件的大小，是目录则是4096。
