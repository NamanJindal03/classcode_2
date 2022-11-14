/* let a = document.getELementByName("body")
a.addEventListener("click",color ) */
// let h1Tag = document.querySelector("#sample")
// let color = 'red'
// function changeBackground(color) {
//    //document.body.style.background = color;ī
//    h1Tag.style.backgroundColor = color;
// }


let bodyTag =document.body
bodyTag.addEventListener("click", ()=>{
    let h1Tag = document.querySelector("#sample")
    h1Tag.style.background = "red"
})
