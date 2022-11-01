// // const burgerTag = document.getElementById('burger');
// // const pizzaTag = document.getElementById('pizza');
// // const friesTag = document.getElementById('fries');
// // burgerTag.addEventListener('click', ()=>{
// //     console.log('burger')
// // })
// // burgerTag.addEventListener('click', ()=>{
// //     console.log('burger')
// // })
// // burgerTag.addEventListener('click', ()=>{
// //     console.log('burger')
// // })

// const foodUlTag = document.querySelector('#food');
// foodUlTag.addEventListener('click', (e) =>{
//     // console.log(e)
//     if(e.target.nodeName === 'LI'){
//         window.location.href = "/" + e.target.innerText //functioniality
//         // console.log(e.target.innerText) 
//     }
//     // console.log(e)
//     // console.log(e.target.innerText);

//     // window.location.href = "/" + e.target.innerText
// })

// /* Event Delegation ->  */

const formTag = document.getElementById('form');
formTag.addEventListener('keyup', (e)=>{
    //IN === "1" != 1
    // console.log(e.target.dataset) //
    if(e.target.dataset.uppercase == 1){
        e.target.value = e.target.value.toUpperCase();
        setInterval(()=>{
            console.log('i got called again')
            // console.log('gets executed after 5 seconds')
            // document.querySelector('#name').style.width = "100%"
        }, 2000)
    }
    else if(e.target.dataset.uppercase == 0){
        e.target.value = e.target.value.toLowerCase()
    }
})
//document.querySelector('#name').style.width = "100%"
//Advantages of event delegation 
//We have to wrtie less code
//We are not repeating ourself  -> DRY (do not repeat yourself)
//consumes less memory

//disadvantage -> sometimes get difficult to incorparate a common functionality
//to many childs 


/* click
keydown
keypress
keyup 
*/

function greet(){ 
    console.log("print 5 second")
}

const setIntervalId = setInterval(greet, 1000);