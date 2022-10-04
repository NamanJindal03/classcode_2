// // alert('this is connected')
// // console.log('Here we are')
// // console.log('Here we are 2')

// // var, let, const 

// /* 
//     int 
//     char

// */

// // var integer_based_variable = 10;
// // integer_based_variable = ['anv','rjigrje', 10, 'play', true, null, undefined]

// // let newVaribale = 'new';

// // console.log(newVaribale)
// // console.log(integer_based_variable)

// // var str = 'String'
// // str = 12
// // console.log(typeof(str))

// /* 
//     JAVA 
//     int variable = 10;
//     int varibale = 20;
// */

// // var str = 12;
// // str = 90;
// // console.log(str)

// // let str = 'string'; /* updated in 2015 ES6 */
// // let str = 10;


// /* 

//     java

//     system.out.print(varible)
//     int variable = 10;
// */
// /* Ccombinattion of compilation and interpretation */

// /* Hoisting */
// // console.log(variable); //undefined
// // var variable = 10; 

// // var varibale = false;
// // console.log(varibale);

// // var a = 10 
// //? :
// // if(a> 10){
// //     console.log('greater')
// // }
// // else{
// //     console.log('smaller or equal')
// // }

// // var output = a > 10 ? 'greater' : 'smaller'; //React -> 
// // console.log(output)

// // var output2 = undefined || 'greater'; //
// // console.log(output2)
// // if(output2){

// // }

// // //truthy , falsy values //important interview questuion 

// // falsy => 0, undefined, false, null, '', NaN 

// // if(0){
// //     console.log('in if')
// // }
// // else{
// //     console.log('it is surely a falsy value')
// // }


// // Javacript  -> bascis 

// // Browser Based Javascript

// // Advanced js 

// console.log(a) //undefined 
// var a = 20;
// typeof(a); //Number
// console.log('this is to be printed') //browsers console 

// console.log(a) //20

// typeof('abcd') //String

// var sampleCheck = true;
// typeof(sampleCheck) //boolean

// /* Numebr */
// var numb1 = 20 + 30; //50
// typeof(numb1) //Number

// var numb1 = -50;
// typeof(numb1) //Number

// var numb1 = 50/0; //
// console.log(numb1)
// typeof(numb1) //Number

// var numb1 = -50/0; //
// console.log(numb1) //-Infinity
// typeof(numb1) //Number

// // var numb1 = 23 + ''

// //-2^53, 2^53-1 //bigInt 232323123231313132132133n

// var numb1 = 2.2;
// typeof(numb1) //Number


// // var numb1 = 

// /* Strings */
// var str = 'str1' + 'str2'; //str => concatetation => str1str2
// console.log(str)

// var str = 'str1' * 'str2'; //str => NaN => not a number
// console.log(str) //NaN
 
// console.log(typeof(str)) //Number

// var str = 'play';
// console.log(str)

// var str2 = "play";
// console.log(str2)

// var str3 = 'this is a Quoated string  wefewfefew kerkmfkwemfe wefkeiw'
// console.log(str3)
 
// var str4 = 'this is a "Quoated string" ' //stack -> 
// console.log(str4)

// var str6 = '5';
// console.log(str6)

// console.log(parseInt(str6)) //implicit typecasting 

// //coercision -> explicit typecasting -> autoboxing

// // string + numebr  
// //'20str3040' 
// var tempString = 'str' //5 

// var str7 = 20 + parseInt(tempString) + (30 + 40); //NaN // 20str3040 
// var str8 = 20 + tempString + (30 + 40); //'20str3040' 

// // plaoyeire;
// var something = 'plaoyeire'; //variable
// console.log(something) //undefined
// // 10;

// // var plaoyeire = '89';

// //falsy and truthy 

// // if(str7){//falsy value 
// //     //logic
// //     console.log('valid')
// // }
// // else{
// //     //we got a wrong value
// //     console.log(str7)
// // }


// console.log(str7) //
// console.log(str8) //


// // var str5 = 'thrite f ewifeifn "

// // var str4 = 'this is a 'Quoated string' ' 
// //compiler and interpreter

// var alwaysTrue = true;

// if(alwaysTrue){
//     console.log('this statement is always truw')
// }

// var alwaysFalse = false;

// /* 
//     ! 
// */
// if(!alwaysFalse){
//     console.log('always false')
// }

// /* truthy and falsy values */
// console.log(NaN);
// console.log(!!NaN); //falsy value -> true -> false
// //force a falsy value to convert to a false value

// /* 
//     APi -> 
// */

// var newStr = false + 'str' + 30;
// console.log(newStr); // 



// var func = function (){
//     console.log('this is referred as a function expression ')
// }
//console.log(func) //func() , func

// func();
// func();

// function func1 (cb) {
//     // console.log(cb)
//     // cb();
//     // cb()
//     // console.log('I execcuted a function')
//     // var abcd = 10
//     // return abcd;
//     return cb;
// }
// var cb2 = func1(func);
// console.log(cb2) //

// function func1 (numb){
//     console.log(numb)
// }
// func1(10)

/*  */
// var valueCheck = 100;
// var valueCheck = 200;
// console.log(valueCheck) //

// function sameAsOthers (a,b) { //parameters
//     var a = 900;
//     var b =100;
//     //console.log(a+b) //130
//     //return a+b;
//     // console.log(a)
//     // console.log(b)
//     function thisisanotherFunction(){
//         console.log('naman')
//     }
//     return thisisanotherFunction;
//     // return a;
// }
// //
// // function anotherFunction(){

// // }
// var sampleCheck;
// //console.log(sampleCheck); //
// var capturingResponse = sameAsOthers(110); //arguments
// console.log(capturingResponse); //110

// var capturingResponse2 = sameAsOthers(10, 20); //arguments
// console.log(capturingResponse2); //10

// var capturingResponse3 = sameAsOthers(50, 220); //arguments
// console.log(capturingResponse3); //50

// console.log(sameAsOthers(40,200)); //40

// anotherFunction(capturingResponse)

//function expression
// var soemthing = function(a,b){
//     console.log('this is called a function expression')
// }
// soemthing();



//memory allocation phase
// var n =2; //undefined , n got a certain memory block and holds the value undnefiend
// function sum(a,b){ //allocated something -> talk more => 0x222
//     // return a+b;
//     console.log(a+b)
// }
// var sum1 = sum(n,n);  //undefined
// var sum2 = sum(n,n);    //udnefined

// //code execcution phase
// var n =2; //2
// function sum(a,b){ //
//     var c = a +b;
//     return c;
// }

// var sum1 = sum(n,n);  //4
// var sum2 = sum(n,n);  //4


// //1) memory allocation phase
// //2) code execution phase 

// //Each and every thing that happends in js happens in a execution context

// function sum(a,b){ //
//     return a+b;
// }
// //memory allocation phase for sum's exxecution context -> deleted
// a //undefinedd
//b //undefined
// c //undefined

// a //2
// b//2
// c//4

var n =2; //undefined , n got a certain memory block and holds the value undnefiend
function sum(a,b){ //allocated something -> talk more => 0x222
    // return a+b;
    // console.log(a+b)
    return a+b;
}
var sum1 = sum(n,n);  //undefined
var sum2 = sum(n,n);    //udnefined


//debugger -> breaker -> break point