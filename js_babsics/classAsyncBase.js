// var step2 = () =>{
//     const step2 = 'I am step 2'
//     console.log(step2);
// }


// var delayed = (cb) =>{
//     //callback approach

//     //dealing with async functions using callback

//     //setTimout is a PlaceOrder -> 1st step
//     setTimeout(() =>{
//         var step1 = "I am step 1";
//         console.log(step1)
//         setTimeout(()=>{
//             cb()
//             setTimeout(()=>{
//                 console.log('track my order please')
//             }, 500)
//         },2000)
//     }, 1000)
//     //setTimeout as a api call -> 
// }
// //t seconds to get back the result 
// //n seconds 

// var result = delayed(step2);

// //Promises -> api -> setTimeout 


// var obj = {
//     name: 'naman',
//     age: 20
// }

// let apiResult = fetch('https://jsonplaceholder.typicode.com/todos/1');
// apiResult.then((res)=>{
//     return res.json()
// }) //work?
// .then((res)=>{
//     console.log(res)
// })
// .catch((err) =>{
//     console.log(err)
// })
// console.log('here')



//Promise has three states -> Pending, Fulfilled, rejected -> 

/* New API */
/* Fetch does not handle status code errors */
/* Axios which does handle these things */
// fetch('https://jsonplaceholder.typicoe.com/posts/1/comments') //xyz
//     .then((res) =>{

//         return res.json() //pqw
//     })
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
//     .finally(()=>{
//         console.log('finally things worked out for us')
//     })
// console.log('here')

// let flag = true;

// let pTag = document.querySelector('#displayError')

// const dos = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             //internal computation
//             if(flag) reject('I have the flag') 
//         }, 3000) //async
//     })
// }


// dos()
//     .then((res)=>{console.log(res)})
//     .catch((err) =>{
//         pTag.innerText = err;
//         console.log(err)
//     })

//Averagely your api is giving result in 10-15 seconds || the api is made by our company itself 

//We would find alternatives to this api, because aa api should not be taking this much time 
//If made by our company itself, just mention to the backend team that the api is taking too much time

////Averagely your api is giving result in 2-3 seconds 

//you will put something like a loader -> 

//this loader can also be placed at specific component of the webpage -> 


//Single page applications  || multi page applications

//3 api -> will these api be called in a synchronous way or asynchrounous way?


// function abcd(arr){
//     arr.push(100);
// }

// let arr = [1,2,3];
// abcd(arr)
// console.log(arr)


// function abcd(arr){
//     arr.push(100);
// }
// function defg(val){
//     val = 100;
// }

// let arr = [1,2,3];
// let val = 10;
// abcd(arr)
// defg(val)
// console.log(arr)
// console.log(val) //

// let flag = true
// const dos = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             //internal computation
//             if(flag) reject('I have the flag err') 
//         }, 3000) //async
//     })
// }
// const notAsync = () =>{
//     return 'abcd';
// }
// /* whenever you have to use await keyword the function should habe a async keyword */

// /* 
//     try catch 
// */

// const middleware = async ()=>{
//     // console.log(await dos()) //error?
//     try{
//         console.log(await dos()) //error?
//     }
//     catch(err){
//         console.log(err)
//     }
//     try{
//         console.log(await dos()) //error?
//     }
//     catch(err){
//         return res.json({status: 404, message:err})
//     }
// }


// const middleware2 = async ()=>{

// }

// middleware();
// console.log("I am outside")

// dos()
//     .then((res)=>{console.log(res)})
//     .catch((err) =>{
//         pTag.innerText = err;
//         console.log(err)
//     })

    // let abc = //do something
    

  //async await   
    
  //1ms 2ms
  //2ms 1ms
const dictionaryApi = async () =>{
    try{
        let apiResponseJSON = await fetch("https://api.dictionarapi.dev/api/v2/entries/en/hello") //promise
        let apiResponse = await apiResponseJSON.json();
        console.log(apiResponse)//
    }
    catch(err){
        return Promise.reject(err)
        return err;
    }

}
const jsonPlaceHolder = async () =>{
    try{
        let jsonApiResJSON = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        let jsonApiRes = await jsonApiResJSON.json();
        console.log(jsonApiRes)//
    }
    catch(err){
        return Promise.reject(err)
        // return err;
    }
}

const middlewareExec = async () =>{
    try{
        await dictionaryApi()
        await jsonPlaceHolder()
    }
    catch(err){
        console.log(err)
    }
}
middlewareExec();
// jsonPlaceHolder();