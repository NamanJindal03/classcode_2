let btn1 = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
// let form = doc

window.onload = () =>{
    let answer  = document.getElementById('inp');
    // answer.value = localStorage.getItem('input');
    answer.value = sessionStorage.getItem('input');
    localStorage.removeItem()
}

btn1.addEventListener('click', ()=>{
    let answer  = document.getElementById('inp').value;
    localStorage.setItem('input', answer)
    sessionStorage.setItem('input', answer)
})
btn2.addEventListener('click', (e)=>{
    // let answer  = document.getElementById('inp').value;
    // localStorage.setItem('input', answer)
    // sessionStorage.setItem('input', answer)
    e.preventDefault();
    const form = document.querySelector('form')
    let answer = Object.values(form).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {})
    /* tracing blanks  */
    if(parseInt(answer.age) < 18){
        console.log('form won;t get submitted')
        return;
    }
    //axios.post()

    // if()
    // /*  */
    // //api call 
    // else{}
    // fetch.post() //

    // console.log("i won't get submitted")
})


// setTimeout(){

// }
// localStorage.getItem()