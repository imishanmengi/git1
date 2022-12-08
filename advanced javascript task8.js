var obj={num:2};

var add =function(a,b,c){
   return this.num+a+b+c;
}
console.log(add.call(obj,2));
var arr=[1,2,3]
console.log(add.apply(obj,arr));

var obj={student:20};

var age=function(){
    return this.student;
}
var arr=[];
var bound=age.bind(obj)
console.log(bound());
let multiply = function(x,y){
    
    console.log(x + y);
}
let multiplyByTwo = multiply.bind(5,6);
