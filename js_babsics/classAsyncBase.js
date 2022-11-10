// var step2 = () =>{
//     const step2 = 'I am step 2'
//     console.log(step2);
// }


var delayed = (cb) =>{
    //callback approach

    //dealing with async functions using callback

    //setTimout is a PlaceOrder -> 1st step
    setTimeout(() =>{
        var step1 = "I am step 1";
        console.log(step1)
        setTimeout(()=>{
            cb()
            setTimeout(()=>{
                console.log('track my order please')
            }, 500)
        },2000)
    }, 1000)
    //setTimeout as a api call -> 
}
// //t seconds to get back the result 
// //n seconds 

// var result = delayed(step2);

// //Promises -> api -> setTimeout 


// var obj = {
//     name: 'naman',
//     age: 20
// }

let apiResult = fetch('https://jsonplaceholder.typicode.com/todos/1');
apiResult.then((res)=>{
    return res.json()
}) //work?
.then((res)=>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})
console.log('here')



//Promise has three states -> Pending, Fulfilled, rejected -> 