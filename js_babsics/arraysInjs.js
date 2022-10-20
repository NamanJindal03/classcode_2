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

// var arr = [2,4,6,11,12,14,15]

// var arr2 = arr.filter((value)=>{
//     return value;//true, false, treu, true
// })
// console.log(arr);//[2,4,6,11,12,14,15]
// console.log(arr2);//[2,4,6,11,12,14,15]
// arr2.push(100);
// console.log(arr);//[2,4,6,11,12,14,15]
// console.log(arr2);//[2,4,6,11,12,14,15, 100]


// //result and arr -> 

// //shallow 

// // var abc = 1; //[1,2,3,4]
// // var def = 1;//[1,2,3,4]

// // var abc = 1;

// // var abc = [1,2,3,4];//differnet addres -1
// // var def = []; //different address -2
// // for(let i=0; i< abc.length; i++){
// //     def.push(abc[i]);
// // }
// // def.push(10000)
// // console.log(abc);//
// // console.log(abc);//
// // console.log(def);//

// //deep copy happeneded above

// //looping of an array -> 

// //for of 
// // let profiles = ['akash', 'aksay','ashutosh'];

// // for(const anything of profiles){
// //     console.log(anything);
// // }

// //123456
// //123457
// //123458

// const profiles = ['akash', 'aksay','ashutosh'];
// const obj ={}
// console.log(profiles)
// const profiles = 20;
// profiles.push('naman') //
// console.log(profiles)

// const abc = 10;
// abc = 100;

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
// (function check(){

//     console.log('cehcck');
// })();



// var something2 = (()=>{
//     console.log('not check')
// })()


// // // check();

// var something = (()=>{
//     console.log('something')
// })()

// something();
// (()=>{
//     var sampleVar = 10;
//     console.log('anythign')

//     function abcd(){
//         console.log('abcd')
//     }
//     abcd();
// })()
// var sampleVar;
// console.log(sampleVar) //

// console.log(['delhi', 'tamil nadu', 'karnatka', 'punjab'].reverse()); //
// console.log(['delhi', 'tamil nadu', 'karnatka', 'punjab'].toString()) //

// let sample = ['delhi', 'tamil nadu', 'karnatka', 'punjab'];
// let sample2 = ['a', 'b', 'c', 'd']
// let sample3 = ['e', 'f', 'g']
// console.log(sample.concat(sample2).concat(sample3)); //deep copy
// console.log(sample) 
//  //
// // let sample
// console.log(sample.sort().reverse()); //string
// /* ascii conversion */
// let sample4 = [100, 20, 500 ,200, 400, 5];

// /* comparator function? */
// console.log(sample4.sort(function(a,b){return a-b})) //
// console.log(sample4.sort(function(a,b){return b-a})) //
  

// console.log(sample.join(" ' ")) //delhi ' tamil nadu ' 
// // console.log(['delhi', 'tamil nadu', 'karnatka', 'punjab']).from()


// let states = ['delhi', 'tamil nadu', 'karnatka', 'punjab'];
// console.log(states.slice(1)) //range -> 
// console.log(states)


// console.log(states.splice(2, 2)); //
//var spliceCheck = ; //states.splice(startIndex, quantity(number), things_to_appends)
//  [
//     "delhi",
//     "tamil nadu",
//     "hello",
//     "bye",
//     "punjab"
// ]

// console.log(spliceCheck)
// console.log(states)//

//...
// let states = ['delhi', 'tamil nadu', 'karnatka', 'punjab'];
// let names = ['a', 'b', 'c', 'd']
// let blankArr = [];
// let combined = [...states, ...names];
// console.log(combined)

// let statesDeepCopy = [...states];
// statesDeepCopy.push('haryana')

// console.log(statesDeepCopy);
// console.log(states)

/* default values in functions */
// function checkRestOpt(name, name2, name3, name4, name5= 'naman'){ //rest operator
//     console.log('name', name)
//     console.log('name2', name2)
//     console.log(aplo[0])
//     console.log(aplo[1])
//     console.log(name5)
// }

// // checkRestOpt('a', 'b', 'c', 'd', 'e')
// // checkRestOpt('a', 'b', 'c', 'd')

// let temp = ['one', 'two']
// let states = ['delhi', 'tamil nadu', 'karnatka', 'punjab', ['aabcd', 'defg']];
// let states2 = states; //shallow copy
// let statesDeep = [...states]; //deep copy

// console.log(states === states2); //true
// console.log(states === statesDeep); //false

// // let arr2 = 
// console.log(states)
// let cp = [...states] 
// cp.push('appended')
// console.log(cp)//

// console.log(states)

// console.log(first)


//States(1) -> a [1,2,3,4,56]
//states2(2) -> a 
//stateDeepCopy(3) -> c [1,2,3,4,56]
//states4(4) -> d [1,2,3,4,56]

// let states = [1,2,3,4,56];
// let states2 = [1,2,3,4,56];
// let states3 = [1,2,3,4,56];
// states2 = states;
// let states4 = [...states];

//looping mechanism -> 

// for(const val of arr){
//     console.log(val)
// }
// for(let i=0; i<arr.length; i++)


//TODO: this part you cannot edit -> this is prewritten by js
// function map(cb){
//     /* jsut imagine we have our array with us over here */
//     let newArr = []; //4 * undefined 
//     var arr = ['abcd','defg','cde','dewfwe'];
//     for(let i=0; i<arr.length; i++){
//         // newArr[i] = cb(arr[i], i, arr);
//         newArr.push(cb(arr[i], i, arr));
//     }
//     return newA;
// }
//map 

// function sum(){
//     a+b;
// }
// let initialArr =['abcd','def'] //do not repeat yourself 

// let newArr = initialArr.map((val, index, variableCompleteArr)=>{
    
//     // return 10;
//     // console.log(val) //one  -> two
//     // console.log(index)//0 -> 1
//     let something = []; //10, 10   //10,10
//     for(let i=0; i<variableCompleteArr.length; i++){
//         something.push(10);
//     }
//     return something;

//     // return 
// })
// //one 0 two 1 [10,10]
// console.log(newArr) //deep copy or shallow copy? //

// for(let i=)


// function checkConsole(cb){
//     cb();
// }

// checkConsole(()=>{
//     console.log('check1');
//     console.log('check2')
// })

// function demo(){
//     console.log('here');
//     console.log('here2');
//     return 10;
//     // return undefined
// }
// console.log( demo());
// console.log(newArr3);///



// const arr = [1,2,3,4,5,6,7,8,9,10]; 
// const arr_map = arr.map((index)=> index +10) //return 
// console.log(arr_map) //output ?

/* 

    ...
    map
    every
    slice(0)
*/


// makeDeeplyNested(arr1){
//     //... 
//     for(){
//         if(deepnestedArr === found){
//             makeDeeplyNested(arr1[4])
//         }
//     }
// }
// lodash ->  

let arr1 = [1,2,3,[4,5, [8,9,10, [11, 12, 13]]]]; //complete deep copy
// let arr2 = [...arr1]; 
// // console.log(arr2) //[1,2,3,[4,5]] //deep copy

// console.log(arr2[3]) //return you an array -> [4,5].push('naman) => [4,5, 'naman']
// arr2[3].push('naman');
// // console.log(arr2) //[1,2,3]
// console.log(arr2.push('new value in arr2'))
// console.log('arr2', arr2)

// console.log('arr1', arr1) //


// let arr3 = arr1.concat(arr1);
// console.log(arr3)

// console.log('first', arr3);
// console.log('first', arr3, 'plour')


// let varialeToBeInserted = 'insert';
// let anotherVariable  = 'insert2';
// console.log('this is a string', varialeToBeInserted, 'this is astrn ${anotherVariable}' )
// console.log(`this is a string ${varialeToBeInserted} wefewfwefw ${anotherVariable}rbeufbweiufuewhf 
// gernguhreiugheri`);
// // ` -> tilde

// let newVariableDisplay = `this is the new variable ${varialeToBeInserted}`
// console.log(newVariableDisplay);

// function dest(){
//     let sample = 'sample'
//     //[1,2,3]
//     return [1, sample, 'the']
//     console.log('first')
//     console.log('first')
//     console.log('first')
//     console.log('first')
//     console.log('first')
//     console.log('first')
//     console.log('first')
// }

// let [val1, val2, val3, val4] = dest();  //[fn def, sample]
// //another way destructing
// // let answer = dest();
// console.log(val1); //funcdef

// console.log(val2);//sample
// console.log(val4) //undefined

// console.log(answer)
// console.log(answer[0])//
// console.log(answer[0]()) //

//let and var are mutable, const is not mutable
// let a = 100;
// let b = 200;

// [b,a] = [a,b]; //this is the quickest way to swap things in js
// console.log(b); //100
// console.log(a); //200

// // [val1, val3, val7]=[2,3,4,5,6,7]

// let [val1] = [2,3,4,5,6,7];
// let [val2] = [2,3,4,5,6,7];
// console.log(val1);
// console.log(val2);

//arrays, objects, functions, asynchronous behaviour

