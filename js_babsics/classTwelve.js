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
// let setIntervalId;
// const formTag = document.getElementById('form');
// formTag.addEventListener('keyup', (e)=>{
//     //IN === "1" != 1
//     // console.log(e.target.dataset) //
//     if(e.target.dataset.uppercase == 1){
//         e.target.value = e.target.value.toUpperCase();
//         setIntervalId = setInterval(()=>{
//             console.log('i got called again')
//             // console.log('gets executed after 5 seconds')
//             // document.querySelector('#name').style.width = "100%"
//         }, 2000)
//     }
//     else if(e.target.dataset.uppercase == 0){
//         e.target.value = e.target.value.toLowerCase()
//     }
// })
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

// function greet(){ 
//     console.log("print 5 second")
// }

// const setIntervalId = setInterval(greet, 1000);

// setTimeout(()=>{
//     console.log('delayed')
// }, 4000)

// const anotherFunction = () =>{
//     console.log('antoher funct')
// }

// anotherFunction();
// /* GEC -> JS -> single threaded synchronous language */

// for(let i=0; i<10; i++){
//     let count = 0;
//     let setId = setInterval(()=>{
//         console.log('this is my set interval with value of i:', i )
//         count++;
//         if(count ===4){
//             clearInterval(setId)
//         }
//     },i*3000)

//     //0th
//     //i => 1 => tm => 3000
//     //i => 2 => tm => 6000
// }

console.log('start')

const countTag = document.querySelector('#count');
// console.log(countTag)
// console.log(countTag.innerText)

function temp(){
    let count = countTag.innerText;
    let setId  = setInterval(()=>{
        --count;
        console.log(count)
        if(count === 0){
            clearInterval(setId);
        }
        countTag.innerText = count;
    },500)
}
temp();

console.log('end')
