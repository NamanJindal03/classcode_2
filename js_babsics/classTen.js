//gec
const red = document.querySelector('.red'); //
const green = document.querySelector('.green');
var purple = document.querySelector('.purple');
var blue = document.querySelector('.blue');
var copied = document.querySelector('.copied');

// let colorPickerElements = [red, green, purple, blue] //id -> 
// console.log(window.getComputedStyle(red))
// console.log(window.getComputedStyle(red).backgroundColor)

// let bgColor1 = window.getComputedStyle(red).backgroundColor;
// let bgColor2 = window.getComputedStyle(red).backgroundColor;
// let bgColor3 = window.getComputedStyle(red).backgroundColor;
// let bgColor4 = window.getComputedStyle(red).backgroundColor;
red.addEventListener('click', ( ) => {
    console.log('I will also be called')
})
// red.addEventListener('mouseenter', ()=>{
//     console.log('I have entered in the red div tag')
// })

let giveBackgroundColor = (elem) =>{
    return window.getComputedStyle(elem).backgroundColor
}
// var redBg = giveBackgroundColor(red);
// var greenBg = giveBackgroundColor(green);
// var purpleBg = giveBackgroundColor(purple);
// var blueBg = giveBackgroundColor(blue);

//step 2
colorPickerElements.map((elem)=>{
    console.log('here')
    // console.log(`${elem}Bg`);
    // console.log(elem)
    elem.addEventListener('click', ()=>{
        let tempColor = giveBackgroundColor(elem);
        copied.style.backgroundColor = tempColor;
    })
    elem.addEventListener('mouseenter', ()=>{
        console.log('I have entered in the div tag')
    })
})
// red.addEventListener('click', () => {
//     copied.style.backgroundColor = bgColor
// })

// console.log(giveBackgroundColor(red)) //

// copied.style.backgroundColor = bgColor;



// red.style.backgroundColor = 'yellow'
// window.getComputedStyle(red).backgroundColor = 'yellow'
// console.log(window.getComputedStyle(red).backgroundColor)
// console.log(window.getComputedStyle(red).backgroundColor)

// console.log(red)

// function task1(){

// }
// function task2(){

// }
// function task3(){
    
// }
// function abcd(){
//     task1();
//     task2();
//     task3();
// }