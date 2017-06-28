var events = require("events").EventEmitter;

var event = new events;

event.on("first",function(){
  console.log("aaazzaa");
});
event.on("first",function(){
  console.log("aaasdfaa");
});
event.on("first",function(){
  console.log("aa32aaa");
});
event.on("first",function(){
  console.log("aaafgfaa");
});
event.on("first",function(){
  console.log("aasdfaaa");
});
event.on("first",function(){
  console.log("aaaa4da");
});
event.on("first",function(){
  console.log("aaaa23a");
});
event.on("first",function(){
  console.log("aaaaa");
});


// event.removeAllListeners(); //移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。

event.emit("first");
event.setMaxListeners(20); // 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
