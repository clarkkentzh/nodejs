var http = require("http");
var fs = require("fs");
var query = require("querystring");
var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/zhao";

var uname,pawd,uname1,pawd1;


http.createServer(function(req,res){
  var str = '',str2 = '';
  var flag,flag2;
  if(req.url == '/') {
    fs.readFile("input.html","utf8",function(err,data){
      if(err){
        console.log(err);
      }else {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
      }
    });
    req.on("data",function(datas){
      str2 += datas;
    });
    req.on("end",function(){
      flag2 = query.parse(str2);

      mongo.connect(url,function(err,db){
        var zhuce = db.collection("denglu");
        if(err){
          console.log(err);
        }else if(flag2.username1 && flag2.passwd1){
          uname1 = flag2.username1;
          pawd1 = flag2.passwd1;
          zhuce.insert({"name":uname1,"passwd":pawd1},function(err,result){
            if(err) {
              console.log(err);
              return;
            }
          })
        }else if(flag2.username2){
          var query = {"name":flag2.username2};
          var update = {$set:{"passwd":flag2.passwd2}};
          console.log(flag2.username2,flag2.passwd2);
          zhuce.update(query,update,function(err,result){
            if(err) {
              console.log(err);
              db.close();
            }
          })
        }
      })
    });

  }else if(req.url == '/success') {
    req.on("data",function(user){
      str += user;
    });
    req.on("end",function(){
      flag = query.parse(str);
      if(flag.username){
        uname = flag.username;
        mongo.connect(url,function(err,db){
          if(err){
            console.log(err);
            db.close();
          }else {
            var denglu = db.collection("denglu");
            denglu.find({"name":uname}).toArray(function(err,result){
              if(err){
                console.log(err);
                db.close();
              }else {
                pawd = result[0].passwd;
              }
              if(flag.passwd == pawd){
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end("<meta charset='utf-8'><h1>登录成功</h1>");
              }else {
                res.writeHead(404,{"Content-Type":"text/html"});
                res.end("<meta charset='utf-8'><h1>登录失败！密码或账号错误</h1>");
              }
            })
            db.close();
          }
        })
      }else {
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<meta charset='utf-8'><h1>账号和密码不能为空!</h1>")
      }
    });
  }else if(req.url == '/pass') {
    fs.readFile("input2.html","utf8",function(err,data){
      if(err){
        console.log(err);
      }else {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
      }
    });
  }else if(req.url == '/use'){
    fs.readFile("input1.html","utf8",function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
      }
    });
  }
}).listen(3000);
