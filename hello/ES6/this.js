var f = (v) => (v);　//等同于　　
// var f = function(v){
//   return v;
// };

console.log(f(20)); //20









var id = 21;

function foo(){
  setTimeout(() => {
    console.log("id:",this.id);
  },1000);
};

//{}指的是函数块

// foo.call({id});//21
foo.call({"id":"aa"});  //aa
