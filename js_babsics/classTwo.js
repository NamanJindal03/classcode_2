// var a = 22;
// //coercision or auto coercision

// //conversion algorithm or conversion table => 

// console.log(a == '22'); //js is allowed to do coercision on this
// //js does not a data type check on this it just does a value check
// // 22 == '22'
// // => '22' == '22' => true

// console.log(typeof(a));
// console.log(typeof(22));

// console.log(a === 22); //99% you will be using this 
// // 22 === '22'
// //js is not allowed to do coersion
// //js does a data type check and a value check


// if(a === 22){
//     console.log('a is greater')
// }
// //string with a integer (number)
// /* === */

//default 
/* 
function default () {

}
*/

//function expression
    //named function expression
    /* 
        var functionExpression = function named(){

        }
    */
    //anonymous function expression
    /* 
        funcitonexpression();
        var functionExpression = function (){

        }
    */

//arrow functions 

// var arrowFunc = (numb) =>{
//     // console.log('first')
//     // console.log('second')
//     // return numb;
//     return 10;
// }
// // console.log(arrowFunc);
// console.log(arrowFunc(22)); //undefined


// var arrowFunc2 = (numb) => numb; //return x //js automatically appends return if we are havign this kind of syntax
// console.log(arrowFunc2(100)) //10
// // // arrowFunc2()
// // // arrowFunc2()

// var arrowFunc3 = numb =>  200; //this is indeed a function
// console.log(arrowFunc3(100)) 



//controlling loop execution
//'red', 'green', 'yellow'

//concept of this keyword

// function isEven(number){
//     if(number %2 === 0){
//         return true;
//     }
//     return false;
// }

// console.log(isEven(1100));

// console.log(101%2);

// function isEven2(number){
//     if(number %2 === 0) 
//         return true;
//     return false;
// }

// function isEven3(number){
//     var ans = number%2===0 ?  true: false;
//     return ans;
// }
// console.log(isEven3(101));


// function isEven4(number){
//     return number%2 === 0;
// }
// /* arrow funciton */

// var isEven5 = (number) =>{
//     return number%2 === 0;
// }


// var isEven5 = (number) =>number%2 === 0;

// var isEven6 = number => number%2===0;

//IIFE -> Immediately invoked function expressions

var abc = ((numb, str)=>{
    console.log('not normal', numb)
    console.log(str)
    //return 'now undefined wont come'
    // return undefined
})(100, 'sgtring')
console.log(abc) //value
// console.log(abc()) //error
// var abc2 = ()=>{
//     console.log('normal')
// }
// abc2()
// console.log('this is the statement we are looking for', abc)
// console.log(abc)
console.log(global)
setTimeout(()=>{
    console.log('h')
},1000)