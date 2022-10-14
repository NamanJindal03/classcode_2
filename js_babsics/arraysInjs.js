// var arr1 = ['naman', 23, 'jindal', true];

// var arr2 = new Array('naman', 23, 'jindal', true);

// // console.log(arr1);
// // console.log(arr2); 

// var arr3 = new Array(2); //more
// console.log(arr3[0]);
// console.log(arr3[1]);
// var arr4 = new Array('', '', '') 
// console.log(arr3)

// /* 
//     predefined functions for arrays
// */
// // arr3[0]= 10;
// // arr3[1]= 200000;
// // console.log(arr3);
// arr3.push('a');//
// arr3.push('b')
// arr3.push('c')
// arr3.push('d')
// arr3.push('e')

// // arr3[ 1000] = '20';
// // // for(var i=0; i<arr3.length; i++){
// // //     console.log(arr3[i])
// // // }
// // console.log(arr3)
// arr3.fill('h', 3, 5) //undefined, undefined,a, h,h,d,e => 3,4 index will be h
// arr3.fill('z', 1,4) //1,2,3 index will be z

// // arr3.fill((index)=>{
// //     console.log(index)
// //     if(index === 2){
// //         return 'I am two'
// //     }
// //    return 'no two';
// // })

// // arr3.fill('h');
// // arr4.fill('h');
// console.log(arr3)

// for(var i=0; i<arr3.length; i++){
//     console.log(arr3[i]())
// }
// console.log(arr4);



// var arr1 = ['naman', 23, 'jindal', true];
// //push, length, fill

// arr1.pop(); //last item removed
// arr1.shift() //remove first element
// arr1.unshift('I am added') //adds value in front
// arr1.push('I am pushed at end')
// arr1.push('jindal')

// console.log(arr1) //

// var index = arr1.indexOf('jindal');
// console.log(index) //
//typeof

//every ->

// function every(cb){
//     // for(let i=0; i<)
// }

// var result = [2,4,6,11].every((value)=>{
//     return value%2 === 0;//true, false, treu, true
// })

// function isEqualTo4(value){
//     console.log(value)
//     return value === 4 //2,4,6,11 -> truthy value
// }
// // var result = [2,4,6,11].every((value)=>{
// //     return value%2 === 0;//true, false, treu, true
// // })
// var result2 = [4,4,4,4,5,4,4,4,4,4].every(isEqualTo4)

// console.log(result)
// console.log(result2)

/* polyfills */
// var arr = [2,4,6,11];

// var result = [2,4,6,11,12,14,15].filter((value)=>{
//     return value%2 === 0;//true, false, treu, true
// })
// var result2 = arr.filter((value)=>{
//     return value != 6;//
// })
// console.log(result2)

/* shallow copy and deep copy */

// console.log(arr)
// console.log(arr2)
// console.log(arr3)
// var arr = [2,4,6,11]; //undefined
// var arr2 = arr; //undefined
// var arr3 = arr2; //unedfined
// arr2.push(22);
// console.log(arr2); 
// console.log(arr);
// console.log(arr3)

//gec 

// function filter(){
//     arr = [2,4,6,11,12,14,15]; //imagine somehow we got this
//     for();
//     var arr = [2,4,6,12,14]
//     return arr;
// }

var arr = [2,4,6,11,12,14,15]

var arr2 = arr.filter((value)=>{
    return value;//true, false, treu, true
})
console.log(arr);//[2,4,6,11,12,14,15]
console.log(arr2);//[2,4,6,11,12,14,15]
arr2.push(100);
console.log(arr);//[2,4,6,11,12,14,15]
console.log(arr2);//[2,4,6,11,12,14,15, 100]


//result and arr -> 

//shallow 

// var abc = 1; //[1,2,3,4]
// var def = 1;//[1,2,3,4]

// var abc = 1;

// var abc = [1,2,3,4];//differnet addres -1
// var def = []; //different address -2
// for(let i=0; i< abc.length; i++){
//     def.push(abc[i]);
// }
// def.push(10000)
// console.log(abc);//
// console.log(abc);//
// console.log(def);//

//deep copy happeneded above

//looping of an array -> 

//for of 
// let profiles = ['akash', 'aksay','ashutosh'];

// for(const anything of profiles){
//     console.log(anything);
// }

//123456
//123457
//123458

const profiles = ['akash', 'aksay','ashutosh'];
const obj ={}
// console.log(profiles)
// const profiles = 20;
// profiles.push('naman') //
// console.log(profiles)

const abc = 10;
abc = 100;

/* 
    arr(10000000) ->
    arr(11) ->

    arr(10)-> fills more than half -> we doubke the initial size
    

    arr(20) -> copy all previous values

    linklist + array combination -> to make a hashmap ->
    critical hits 

    implemtn hashmap on your own -> important interview question

    3-4 algorithms 

    standard array -> arrayList -> 
    1) just based on array 
    2) 2d array 
    3) array on to which we ahve linklist attached 

    hashmap ->  O(1)
    key value ->

    array -> 10
    0 , 1, 2, 3, 4 ,5 ,6 ,7 ,8, 9, 10

    hmac() -> encoding/hashing algorithm -> 
    a -> black box -> d 
    hasmap through a random generator -> random index ->
    regenrate ->
*/