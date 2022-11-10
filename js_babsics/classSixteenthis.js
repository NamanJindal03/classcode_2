

// function ask(){
//     let age = 20;
//     console.log(this.name)//xyz
// }
// // ask() //window.ask()
// window.ask() //window

// //this -> 4 rules
// //Default Binding Rule -> 


// //second rule -> implicit binding 
// var person ={
//     name: 'naman',
//     ask: function(){
//         console.log(this, this.name);//
//         function x(){
//             console.log(this,this.name)//
//         }
//         return x;
//     }
// }
// /* return with a funciton, this and obj */
// person.name

// let askInstance = person.ask() //fn x
// // askInstance() //this window'
// // person.ask()() //window, '' => person.ask() => window.x()
// person.x()

// const object ={
//     message: 'Hello Newton',
//     getMessage: function(){
//         console.log(this)//object
//         const message = 'Hello me';
//         return this.message //object.message 
//     }
// }
// console.log(object.getMessage())//Hello me, undefined

//explicit binding 
// var person ={
//     name: 'naman'
// }
// var car = {
//     brand: 'suzuki',
//     // ask: function(){
//     //     console.log(this)
//     // }
// }
// car.ask() //car
// var person ={
//     name: 'namaan',
//     age:10,
//     gender: 'Male'
// }
// function greetings(){
//     // console.log(random)
//     console.log(`Hey ${this.name} good to meet you`) //person, car
//     // console.log(numb)
//     // console.log(nnum)
// }
// // greetings(person)
// // greetings.call(person)
// // console.log(person.greetings)

// //call, bind, apply

// greetings.call(person, '20', 'somethingelse')
// greetings.apply(person, ['20', 'something'])
// let greet = 
// greetings.bind(person)
// greet() //window.
// // greetings.greet()
// greetings() //window
// greet() //greeints linked with person object

// ask.call(car)

// function User(_name){
//     //{}, {}
//     // this.name = _name;

//     // console.log(this)
// }
// let user1 = new User();
//dsa or js?
// user1.play = 10;

// let user2 = new User()
/*  
    behind the scenes it does 3 thigns 
    1) brand new omtpy object "{}"
    2) It links this brand new object to another object 
   3) if this function does not return an object, the new keyword assumes that you 
   meant to return this

*/
//normal ->
//new does => 
    //

//this in js when we talk about functions (excluding arrow funcitons), 
//the value of this is dependent on how we are callng it. 


// xyz()
//1) default binding -> window object -> window.xyz()

// let obj ={
//     name: 'naman',
//     getName: function(){
//         console.log(this) 
//         function abcd(){
//             console.log(this) //
//         }   
//         abcd()//window
//     }
// }
// obj.getName()

//2) implicit binding rule -> 
//3) explicit binding rule -> call, bind and apply
//4) new keyword rule -> 


// function Car(name){
//     //we are not creating a new {} object in here
//     //window
//     this.name = name;
//     this.funcCall = function(){
//         console.log(this)
//     }
//     //not returning anythign -> undefined to be returned 
// }
// let ferrari = Car('ferrari'); //default binding rule
// console.log(ferrari); //undefined
// console.log(this.name); //ferrari

// let user2 = new User()
/*  
    behind the scenes it does 3 thigns 
    1) brand new omtpy object "{}"
    2) It links this brand new object to another object 
   3) if this function does not return an object, the new keyword assumes that you 
   meant to return this

*/
// let count=40;

// let counter2 = {
//     count: 0,
//     increment: function(){
//         console.log(this.count)
//     }
// }
// counter2.increment()

//Factory Pattern -> design pattern

// let counter1 = createCounter(); //counter1? 
// /* 
//     counter1 = {
//         count: 0, //1
//         increment: function(){
//             console.log(this.count++)
//         }
//     }
// */
// function createCounter(){
//     // let count = 20;
//     // this.count
//     return{
//         count: 0,
//         increment: function(){
//             console.log(counter1.count++)
//         }
//     }
// }
// counter1.increment()
// console.log(counter1)
// let counter2 = createCounter();
// /* 
//     counter2 = {
//         count: 0,
//         increment: function(){
//             console.log(counter1.count++)
//         }
//     }
// */
// counter2.increment()

//4>3>2>1 -> new > call,bind,apply > xyz.funcCall() > window.funcCall()

// function User(_name){
//     //{name, score, sayUser: fn}
//     this.xyz = _name,
//     this.score = 20,
//     this.sayUser = function(){
//         console.log(this) //user
//         console.log(this.xyz) //naman, abhishek
//         let self = this;
//         //arrow functions
//         function inheritance(){
//             console.log(self.xyz)  //naman, abhishek
//         }
//         inheritance();//default 
//     }
    
// }
// let name = new User('naman');
// let name2 = new User('abhishek');

// name.sayUser();//implicit
// name2.sayUser();//implicit

// const obj = {
//     name: 'naman',
//     sayHello: function(){
//         console.log(this)// //obj
//         const arrowFunc = ()=>{
//             console.log(this) //obj
//         }
//         arrowFunc();//no binding of this happens 
//     }
// }
// obj.sayHello(); //this 

/* 
    nromal func (non arrow funcitons ) -> have their own this 
*/
/* 
    1) arrow funcitons dont have a self binding of this 
    2) the value of this in arrow func is dependent on where they are located
    3) the value of this is equivalent to the nearest this they find in their heirarchy
*/
//window
// const obj = {
//     name: 'naman',
//     sayHello: () => {
//         console.log(this)// window
//         const arrowFunc = ()=>{
//             console.log(this) //window
//         }
//         arrowFunc();//no binding of this happens 
//     }
// }
// obj.sayHello(); //this 


// function User(_name){
//     //{name, score, sayUser: fn}
//     this.xyz = _name,
//     this.score = 20,
//     this.sayUser = function(){
//         console.log(this) //user
//         console.log(this.xyz) //naman, abhishek
//         //let self = this;
//         //arrow functions
//         const inheritance= ()=>{
//             console.log(this.xyz)  //naman, abhishek
//         }
//         inheritance();//default 
//     }
    
// }

// let name = new User('naman');
// let name2 = new User('abhishek');

// name.sayUser();//implicit
// name2.sayUser();//implicit

// var length = 4;
// function callback(){
//     console.log(this.length)//window.length = 4
// }

// const object ={
//     length: 5,
//     method(callback){
//         callback()//default 
//     }
// }
// object.method(callback,1,2)

// let user ={
//     firstName: 'naman',
//     lastName: 'jidnal',
//     age:10,
//     courseList: [],
//     buyCourse: (courseName) =>{
//         //this.courseList //undefined -> undefined.push() -> error
//         this.courseList.push(courseName)
//     },
//     getCourse: function(){
//         console.log(this.courseList)
//     }
// }
// // user.buyCourse('react');
// user.getCourse();

// let obj ={
//     name: 'naman',
//     age:10
// }

// let getUser = () =>{
//     console.log(this) //
// }
// getUser.call(obj)
/* Call, apply, bind do not work with arrow functions */

/* we can never user arrow functions as methods */ ///

// let user = {
//     name: 'naman',
//     getName: ()=>{
//         return this.name
//     }
// }
// console.log(user.getName())

/* arrow function can never be treated as constructors? */

// const User = () =>{
//     this.name = 'naamn',
//     this.age = 20
// }
// const user1 = User();
// console.log(user1) 


//Closures -> 

//Call Stack -> GEC -> Outer 

//gec -> 

// function outerOuter(){
//     let b = 40;
//     function outer(){ //outer context is destroyed 
//         let a = 20;
//         // let b = 20;
//         // let c = 30;
//         function inner(){
//             console.log(b)
//             console.log(a)
//         }
//         return inner;
//     }
//     return outer()
// }

// let sample = outerOuter(); //sample ? 
// console.log(sample) //inner func defination
// /* 
// (){
//         console.log(a)
// }
// */
// sample(); //what will be the output?

// //millions of line of code over here

// sample(); //

//when functions are returned they remember where they were present in the code 

function createIncreament(){
    let count= 0;//3
    function increament(){
        //
        count++;
        // message = `count is ${count}`
    }
    // let message = `count is ${count}` //count is 0 //window -> undefined

    function log(){
        let message = `count is ${count}`
        console.log(message) //count is 3
    }
    return [increament, log] //
}
const [increament, log] = createIncreament();//
const [increament2, log2] = createIncreament();//
increament();//
increament();//
increament();//
increament2(); //
log2() //
log();//count is 0

// String.prototype.generate = function(times){
//     // let arr = [];
//     let str = ''
//     for(let i=0; i<times; i++){
//         str = str + ' ' + this
//     }
//     return str
// }
// let n = 3;
// const result = 'naman'.generate(n)
// console.log(result) //naman naman naman // undefined

//prototype -> 


// function multiply(n,m ){
//     if(m!== undefined){
//         return n*m
//     }
//     return function xyz(p){
//         console.log(n*p)
//     }
// }

// multiply(4,5); //20
// multiply(3,3); //9
// const double = multiply(2);
// console.log(double) //func def 
// double(5); //10
// double(10); //20

//i don't have a defination for multiply function

//Encapsualtion

//array.pop -> the value that we are deleting 


//addeventlistener
//preventdefault in js
//how to prevent form from submiting in js 

// function createStack(){
//     // return{
//     //     items:[],
//     //     push(item){
//     //         this.items.push(item);
//     //     },
//     //     pop(){
//     //         return this.items.pop()
//     //     },
//     //     viewStack(){
//     //         return this.items;
//     //     }
//     // }

//     //Encapsulation, and abstraction
//     const items = []; //this is acting as your private variable

//     return{
//         push(item){
//             items.push(item);
//         },
//         pop(){
//             return items.pop()
//         },
//         viewStack(){
//             return items;
//         }
//     }
    
    
// }
// const stack1 = createStack();
// console.log(stack1)
// //[10]
// stack1.push(10);
// stack1.push(5)
// stack1.pop()
// console.log(stack1.items) //
// stack1.push(15)
// stack1.push(25)
// console.log(stack1.items)//
// //stack1.items[1] = 100000; //this cannot be done in a stack, and our current function is allowing that
// console.log(stack1.items)

// console.log(stack1.viewStack())

//Maps 


const arr = [1,2,3,4];
const newArr = arr.map((val, index)=>{
    return val + 10;
})
console.log(newArr)


Array.prototype.myMap = function(cb){
    // console.log(this)
    //length of array 
    //this ->
    console.log(cb)
    let deepCopyArr = [];
    for(let i=0; i< this.length; i++){
        //i is acting as the index of the array
        //this is your arr itself
        deepCopyArr.push(cb(this[i], i, this));
    }
    return deepCopyArr
}
// let myMap = function(){

// }
const newArrMyOwn = arr.myMap((val, index, completeArr) =>{ //implicit logic 
    return val+10; //logic
})
console.log(newArrMyOwn)

// const newArrMyOwn2 = arr.myMap((val, index) =>{
//     return val +val;
// })
// console.log(newArrMyOwn)

//1) IT return a DEEP COPY ARRAY -> 
//2) It takes in a callback function
//3) We have to append myMap onto the prototype of Array -> done this point
//4) Map is a function -> done this point
















// function mymap(val,index){
//     let val;
//     for(let index=0;index<val.length;i++){
//         val[index]=val[index]+10; 
//         val.push(val[index]
//     )} 
//     return val;
// }
