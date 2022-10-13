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
// var variable_2;//undefined
// var variable = 10;
// (()=>{
//     //memory allocation -> variable_3 -> 45, variable_2 -> 15
//     //
//     // variable_3 = 35;
//     console.log(variable_3)//undefined
//     var variable_3 = 45;
//     variable_2 = 15;//
//     console.log(variable)//->10
// })()
// console.log(variable_2)//15
// console.log(variable_3)//->error
// var variable = 30;

//c -> undefned -> 10
// var x = 10;
// console.log(x)//10

// if(true){
//     (function(){
//         var x = 20;
//         console.log(x)//20
//     })()
//     console.log(x)//10
// }
// console.log(x)//10

// var x = 10;//defined
// var x = 20;//defined -> no error
// console.log(x)//20

// let y = 10;//error
// function sample(){
//     let y = 20;
// }
// let y;
// const perm = 110;

// perm = 20;//not allowed -> error


//global scope -> x
//let and const -> 

// console.log(x) //undefined
// const z = 300;
// var x = 20;
// // y=100;
// // let y = 200;
// console.log(y) //temporal dead zone
// let y; //undfined 
// console.log(z)
// console.log(y)//undefined
// y= 200; //

//var -> functioned scope
//let and const -> block scoped 
/* 
    if{},
    for(){},
    function(){},
    {}
*/
// let blockScopeChecck = 0;//parent scope
// {
//     let blockScopeChecck = 20;
//     console.log(blockScopeChecck) 
// }
// if(true) 
// {
//     let blockScopeChecck = 200;
//     var notaBlockScopeButAFunctionScope = 'something'//global 
//     console.log(blockScopeChecck)
// }
// (
//     function(){
//         var notBlockScope = 1000000;
//         let blockScopeChecck = 2000;
//         console.log(blockScopeChecck)
//     }
// )()
// console.log(blockScopeChecck) //error

// (function functionedScope(){
//     var functionS= 'some';
// })
// console.log(functionS) //error


// let sampleLet = 10;
// // if(true){
// //      let sampleLet = 20;
// // }
// function sample(){
//     var sampleLet = 200;
//     {
//         let sampleLet = 300;
//     }
//     const sampleLet = 400;/* let and const work exactly same for scoping */
// }
// sample()

// var test = 20;
// let test = 10;


var sampleTest = 200;//let to var
function test(){
    console.log(sampleTest)//600 //previous concept //undefiened
    var sampleTest = 600;// 
    {
        console.log(sampleTest)//error //temporal dead zone -> undefined //error
        var sampleTest = 400;//let to var
    }
}
{
    sampleTest = 500;
}
test()
console.log(sampleTest)//500

//some more 




































































