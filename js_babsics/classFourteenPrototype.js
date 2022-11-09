// // let arr1 = new Array();
// // console.log(arr1.length)

// // Array.prototype.naman = function(){
// //     return 'Now I exist'
// // }

// // console.log(arr1.naman())
// // console.log(arr1.naman)

// // let arr2 = new Array('abcd');
// // console.log(arr2.naman)
// /* 
// a array object/class 
// length:
// max:
// min:
// toUpperCase()
// toString()

// */

// let obj1 = {
// };//empty object
// console.log(obj1)
// // console.log(obj1.hasOwnProperty('age')) //false
// // [[prototype]]

// let obj2 = {
//     age: 20,
//     name: 'naman',
//     // hasOwnProperty: function(){
//     //     console.log('I am only for obj2')
//     // }
// }
// console.log(obj2)
// console.log(obj2.hasOwnProperty('age')) //true

// //Object class -> instances -> obj1, obj2. 

// let obj3 = {
//     age: 40,
//     name: 'Abhishek'
// }

// Object.prototype.newMethod = function (){
//     console.log('new method which is common to all')
// }

let normalFunc = function(){
   return 'I am normal behaviour'
}
console.log(normalFunc()); //

let User = function (_firstName, _lastName){
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.completeNameWithin = function(){
            console.log(`My first Name is ${this.firstName} and my last name is ${this.lastName}`)
        }
}
User.prototype.completeName = function(){
    console.log(`My first Name is ${this.firstName} and my last name is ${this.lastName}`)
}
// Object.prototype
let user1 = new User('naman', 'jindal'); 
let user2 = new User('abhishek', 'bansal'); 

console.log(User.hasOwnProperty('prototype'))//

console.log(Object.hasOwnProperty('prototype'))//

let obj1 = {};
// console.log(obj1.hasOwnProperty())//
console.log(obj1.completeName()); //
console.log(user1.completeName()); //


