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
// let firstName = 'Rakesh';
// let lastName = 'Kumar';

// function studyDesc(){
//     return {firstName:'naman', lastName:'jindal'}
// }

// ({firstName, lastName} = studyDesc());

// // console.log(newName); //namn
// // console.log(lName); //jindal
// // console.log(firstName); //rakesh

// console.log(firstName); //naman
// console.log(lastName); //jindal


//dynamic assignment of keys 

//dom session 2 ->
//advanced objects -> 

/* 
    obj => {
        firstName: 'xyz',
        lastName: 'value
    }
*/
// function objAssignment(prevObj, prop, value){
//     console.log(prevObj);/* {firstName: 'naman'} */
//     console.log(prop); //lastName
//     console.log(value) //value
//     prevObj.firstName = 'xyz';

//     prevObj[prop] = value;
//     //make changes to obj =>
// }
//keyp[0] => lastName  ::: prop => lastName
//keyp[1] => 'value'   ::: value => 'value'
//['lastName', 'value']
// function objAssignment(prevObj, ...keyp){
//     console.log(keyp[0]) //lastName
//     console.log(keyp[1]) //value

//     console.log(prevObj);
//     console.log(keyp);
//     prevObj[keyp[0]]=keyp[1] //

//     //make changes to obj =>
// }

// let obj = {
//     firstName: 'naman'
// }

// objAssignment(obj, 'lastName', 'value')
// console.log(obj)

// let obj = {
//     firstName: 'naman',
//     /* we donts have anythign like testprop present in here */
//     /* testProp: undefined */
// }
// let testProp = 'lastName';
// let testValue = 'something'

// /* 
// you cannot do => obj.lastName = 
// final Output
//     obj = {
//         firstName: 'naman',
//         lastName: 'something'
//     }
// */

// console.log(obj.testProp); //undefined
// obj.firstName = 'xyz';
// console.log(obj)
// obj.testProp = testValue //testValue
// console.log(obj.testProp) //something

// // obj.lastName = testValue;
// // console.log(obj)

// obj["ehfieifew","something"];
// console.log(obj)
// // = testValue; //
// console.log(obj)
// obj.testProp2 = 'soemthing2'
// console.log(obj);


//iterating a object -> for, map, for of, for in

// var arr = [1,2,3];
// arr.map((val, index)=>{

// })
// /* not similar to or not even remoptely similar to  */
// arr.map[val, index]


let obj2 ={
    try: 'something',
    try2: 'something2'
}
let obj ={
    lastName: 'something',
    firstName: 'abcd play play2'
}
// // obj.map((val, index)=>{
// //     console.log(val);
// //     console.log(index)
// // })

// for(const keyName in obj){
//     console.log(obj[keyName])
//     // console.log(obj.ob); //get value over here instead of keys what change will I make at line 203?
// }


// console.log(Object.keys(obj)) //all keys in obj in array form
// console.log(Object.values(obj)) 
// console.log(Object.keys(obj2)) //all keys in obj in array form
// console.log(Object.values(obj2)) 

/* prototyping */
// let keysArr = Object.keys(obj);

// Object.keys(obj).map((key, index)=>{
//     obj[key] = obj[key]+' val '; //
// })
// console.log(obj)

// console.log(Object.entries(obj))

// console.log()
//background-color
document.getElementsByTagName('p')[0].style.backgroundColor = 'red'
// document.getElementsByTagName('p')[0].style.padding  = "20px"

// console.log(document.getElementsByTagName('p')[0].style.backgroundColor)
// setTimeout(()=>{
//     console.log(document.getElementsByTagName('p')[0].style.backgroundColor)
// }, 2000)

let str = 'string';

