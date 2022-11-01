//appendChild
//append

// const body = document.body;
// // console.log(body)
// body.append('I have appended my html') //can accept string based values <body> I have appended my html </body>
// // body.appendChild('I have appended my html') //this can only accept dom based nodes eg div
// //p, 

// const div1 = document.createElement("div");
// //innerText, innerHtml, innerContent
// div1.innerHTML ='<strong> I am supposed to be the inner text <strong/>'
// body.append(div1)

// div1.remove()
// body.append(div1)

/* CRUD -> create read update delete */

// const span1 = document.querySelector('span') //only 1 => querySelectorAll
// //way 1 - of dealign with attributes
// //getAttribute
// // console.log(span1.setAttribute('title', 'changed title'))
// // console.log(span1.setAttribute('id', 'play190'))
// console.log(span1.title)
// console.log(span1.id)
// span1.title = 'changed title'; //if attribute is present it will edit it's value else it will create a new one
// span1.id = "play190";
// span1.removeAttribute('id')




//removing elements from the dom 




// const colorArr = ['red', 'green', 'yellow', 'pink'];
// /* rgb -> (x,y,z) */
// /* x =Math.random -> 0, 255 */
// /* y = Math.random -> 0, 255 */
// /* z = Math.random -> 0, 255 */
// // 256*256*256 -> 

// const btnTag = document.querySelector('button');
// const divTag = document.querySelector('div')
// const spanTag = document.querySelector('span')
// // btnTag.addEventListener('click', ()=>{
// //     // if(divTag.id){
// //     //     divTag.removeAttribute('id');
// //     // }
// //     // else{
// //     //     divTag.id = 'colorSetting'
// //     // }
// //     let currColor = colorArr[Math.floor(Math.random(colorArr.length -1 )*colorArr.length)];
// //     divTag.style.backgroundColor = currColor;
// // })
// /* - */
// console.log(divTag.dataset.count)
// console.log(divTag.dataset.longerText);

// divTag.dataset.newAttribute = 'new val' //dataset ->

// spanTag.classList.add('new-classs')
// spanTag.classList.remove('cl')

// btnTag.addEventListener('click', ()=>{
//     spanTag.classList.toggle('cl2') 
// })


//Event Propogation
const gpDiv = document.querySelector('#grandParent')
const pDiv = document.querySelector('#parent')
const cDiv = document.querySelector('#child')
const span = document.querySelector('span');
console.log(span)

gpDiv.addEventListener('click', (event)=>{
    console.log('grand parent called')
    event.stopPropagation();
}, false)

pDiv.addEventListener('click', (event)=>{
    console.log('parent called')
    event.stopPropagation();
}, false) //skip

cDiv.addEventListener('click', (event )=>{
    console.log('child called')
    event.stopPropagation();
}, false)

//1) child
//2) grandparent
//3) parent

//1) capturing sequence -> bubbling sequence -> 

/* Event Delegation ->  */

