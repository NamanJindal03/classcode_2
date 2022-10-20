//key value pairs 
// var firstName = 'fnhewrifjerwfj'

// let obj = {
//             firstName: 'naman',
//             lastName: 'jindal',
//             rollNum: 12
//         }; //

// let obj2 = {
//     firstName:'random',
//     lastName: "more random",
//     age: 45
// }
// var arr = [1,2,3,45]

// let storingOBJFirstName = obj.firstName;

// console.log(firstName) //fnhewrifjerwfj

// //1st
// console.log(obj.firstName) //naman  //o(1)
// console.log(obj.lastName) //jindal 
// console.log(obj.rollNum) //jindal 

// //2nd
// console.log(obj['firstName']) //naman
// console.log(obj['lastName'])  //jindal
// console.log(obj['rollNum'])

// console.log(obj.age) //

//ds problem -> longest palindromic substring -> 
//recursion, slice, destructing 

//server 2 -> db ->

// const arr1 = [1,23, 4343];
// arr1.push('new value')

// //server 1
// const obj = {
//     firstName: 'naman',
//     lastName: 'jindal',
//     rollNum: 12,
//     arr: [1,23,4],
//     func: function(play){
//         return play
//     },
//     play:[]
// }
// // obj = 'play';
// // obj = 10;
// // obj = {};

// console.log(obj.arr[2]);//4
// console.log(obj.func('playing')) //playing

// let fundDef = obj.func;
// console.log(fundDef('playing'))//playing

// obj.newKey = 'new key';
// // console.log(obj); //whole obj with newKey as its new key

// obj['newKey2'] = 'new key 2';

// obj['new key 2'] = 'something different';
// // obj.newkey3 = 'something even more different'; //this won't work

// console.log(obj) //

// //first difference between doing stuff with [], dot operator
// console.log(obj['new key 2']); //the correcct => something different 

// //looping of an array
// delete obj.play;
// delete obj.func;
// let value = delete obj.rollNum;
// console.log('deletion of key', value) //true

// let result = delete obj.naman; //
// console.log('deletion of obj', result) //false
// console.log(obj)

// delete obj['new key 2'];

// let wrong = delete arr1; 
// console.log(wrong) //false

//destructing with obj
let firstName = 'Rakesh';
let lastName = 'Kumar';

function studyDesc(){
    return {firstName:'naman', lastName:'jindal'}
}

({firstName, lastName} = studyDesc());

// console.log(newName); //namn
// console.log(lName); //jindal
// console.log(firstName); //rakesh

console.log(firstName); //naman
console.log(lastName); //jindal


//dynamic assignment of keys 

//dom session 2 ->
//advanced objects -> 