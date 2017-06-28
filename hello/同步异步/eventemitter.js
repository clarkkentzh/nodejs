var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function(){
    console.log('aaaaaaaaaaaa');
    event.emit("some_ev");
});



var func = function(){
    console.log("bbbbbbbbbbbbbbb");
};
event.once("some_ev",func);   //once是给事件绑定一个单次监听器，触发一次后不再触发

event.removeListener("some_ev",func);  //移除some_ev事件的监听器




console.log(__filename);  //该文件路径和文件名,都属于全局变量
console.log(__dirname);　　//该文件路径



// setInterval(function(){
//     event.emit("some_event");
// }, 1000);

setTimeout(function(){
    event.emit("some_event");
}, 1000);
