//gloabl scope 

var a = 100
function parent(){
    // local scope // parent scope // functioned scope
    // var a =100;
    var b =400;
    console.log(a) //100
    function child(){
        var b = 200;
        // a=200;
        console.log(a)//100
        console.log(b)//200
        //grnadchild

    }
    child()
    console.log(a)//100
    // console.log(b)
}
parent();
console.log(a) //100




// var a =200;
// console.log(200) //200




/* 
    global
        parent
*/

//global scope
// var a = 100
// var alwaysTrue = true;



function parent(){
    //parent scope
    var b=200;

    function child(){
        //child scope
        var c = 300;
        console.log(m)
    }
    //var are functioned scope
    if(true){//boolean true
        console.log(a)//100
        var e = 500;//
    }
    console.log('e',e)//500
    // console.log(b)
    child()
}
console.log(e)
//boolean data type -> false and true
parent();

/* 

    stack -> parent gec
*/
//global function - parent
//global scope
// var a;
var a =2;
// console.log(a)//2 ->>>>>>>>>>>>>>>>>>
var a =1; //changed to 10
    function child(){//child
        // var a;
        /* 
            var a = 10
        */
        a=10;
        return;
        function a(){

        }
    }
child();
console.log(a) //1->>>>>>>>>>>>>>>>1
/* 
    child
    gec
    stack
*/




/* 
    b  -> deleted
    gec
    stack
*/
/* 
    a: 10
*/
