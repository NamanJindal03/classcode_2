console.log('start');

setTimeout(()=>{
    console.log('inside set timeout')
}, 2000)

let start = Date.now();
let endTime = start;

while(endTime < start + 10000){
    // console.log(endTime);
    endTime = Date.now()
}

console.log('end')