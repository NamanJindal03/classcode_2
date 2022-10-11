// var x = 10;
// function test(){
//     if(x>20){//false
//         x = 500;
//     }
//     console.log(x)//10
// }
// test()

// var y = 10;
// function test(){
//     //x => 500
//     if(y>5){//true
//         var x = 500;
//     }
//     console.log(x)//500
// }
// test()

// var x = 10;//500
// function test(){
//     if(x>5){//true
//         x = 500; //executed
//     }
//     console.log(x)//500
// }
// test()

// var y = 10;
// var x = 200;
// function test(){
//     if(x>20){
//         var x = 500;//did not execute
//     }
//     console.log(x) //200
// }
// test()

//
// function parent(){
//     // //hoisted: "i am variable"
//     //     return 'I am a function';
//     // }
//     var sample ='sample';
//     function hoisted(){
//         return 'I am a function';
//     }
//     return hoisted;  //calling the function
//     //passsing the function defination
//     hoisted = "I am a variable";//
    
    
    
// }

// console.log(parent()) //"i am a function"


// function parent(){
//     // //hoisted:{
//     //     return 'I am a function';
//     // }
//     var sample ='sample';
//     return hoisted()
//     function hoisted(){
//         return 'I am a function';
//     }
//     var hoisted = "I am a variable";//
// }

// console.log(parent()) //"i am a function"

//foo => function defination
// alert(foo())//3
// function foo(){
//     //execcution contexgt of foo
//     //memory allocation =>
//     //bar => undefined

//     //code execution
//     var bar = function(){ //treated as 
//         //a variabl
//         return 3;
//     } 
//     return bar();

//     var bar = function(){
//         return 8;
//     }
// }

//gec 
// var myVar = "foo";//"bar"
// (function (){
//     //new context
//     //memory allocation -> undeifned
//     console.log("original value:", myVar)//foo
//     var myVar2 = "bar";//
//     console.log("New Value", myVar2)//bar
// })()

// function example(){
//     return 0;
// }
// console.log((example()))
// var example = function(){
//     return 1;
// }

//scope chain and hjoisting with var 

