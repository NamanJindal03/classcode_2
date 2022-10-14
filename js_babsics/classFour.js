// console.log(true === 'true'); //
// console.log(true == 'true'); //
/* 
    type casting ->
*/

/* 

*/

// function(){
//     console.log('here')
// }
// ()=>{

// }

//I am creating a function which receives afunction

//function //function defination
function hod(p,somethingDifferent){
    console.log(somethingDifferent())
    // console.log(arguments)
    // console.log(arguments[0])
    // console.log(arguments[1]())
    console.log(p); //10
    console.log(cb()); //first
}

//function //function defination
//address -> firstClass (x0dee) ->
/* 
{
    return 'first'
}
*/
/* 
    Execution Context ->firstClass -> deleted 

*/

function firstClass(){
    return 'first';
    var newTHing = 'play';
    console.log(newTHing)
    // var first = 'somethingElse';
    // //var 10 = 'this is a varibale'//illegal
    // console.log(10)//string
    // console.log(first)
}

function firstClass2(){
    console.log('first')
    var newTHing = 'play';
    console.log(newTHing)
    // var first = 'somethingElse';
    // //var 10 = 'this is a varibale'//illegal
    // console.log(10)//string
    // console.log(first)
}
//difference between calling and refering
var something = firstClass();
console.log(something)// -> 
console.log(firstClass())
console.log(firstClass) //

// console.log(firstClass)//function defination
// firstClass()//first
var a = 100;
console.log(a) //100
var b = 20
var c = 10;
var d = 20
var e = 10;
var f = 20


hod(a,firstClass()) //calling hod
// hod(c,d) //
// hod(a,d) //


