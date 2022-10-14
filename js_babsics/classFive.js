
//function //function defination
function hod(p,cb, sum){
    console.log(p); 
    console.log(cb); //func defination 
    console.log(cb(sum));//naman
    console.log(sum) //naman
    // return p;
}
//function defination
function firstClass(name){
    return name;
}

var something = firstClass();
// console.log(something)// -> 
// console.log(firstClass())
// console.log(firstClass) //

var a = 100;
var newVariable = 'naman';
var anonymous1 = hod(a,function(name){return name;}, newVariable) // hod(100, 'first')

console.log(anonymous1) 

// hod(a,firstClass, newVariable) // hod(100, 'first')
// hod(a,(name)=>{return name;}, newVariable) // hod(100, 'first')
// hod(a,(name)=> name, newVariable) // hod(100, 'first')

// some

// var play = 10;
// play();

//try to pass a function to another funciton on your own

//quiz questions javascript functions