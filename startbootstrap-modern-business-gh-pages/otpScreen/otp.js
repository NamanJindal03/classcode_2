let bodyTag = document.body;
document.addEventListener("keydown",(e)=>{
    console.log(e)
})

// let otpInputBoxesTag = document.getElementsByClassName('otp-numb');
let otpInputBoxesTag = document.querySelectorAll('.otp-numb')
console.log(otpInputBoxesTag)

otpInputBoxesTag.forEach((element, index) => {
    element.addEventListener("keydown",(e)=>{
        if(e.key>= 0 && e.key<10){
            otpInputBoxesTag[index].value = "";
            /* lazy loading or delaye dlaoding */
            setTimeout(()=>{
                otpInputBoxesTag[index+1].focus()
            },0)
            // 
        }
        else if(e.key === 'Backspace'){
            otpInputBoxesTag[index-1].focus();
        }
        console.log(index); //will it give the correct value of index or not?
    })
});
/* closure */