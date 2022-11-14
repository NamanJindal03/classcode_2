func xyz 
for (var i = 0; i < 3; i++) { //i =3
    // var is a function scoped
    //you make a var intentially a scoped thing
    setTimeout(() => console.log(i), 1); 
}

//how do you correct it so that it gives the result as 1,2,3

for (let i = 0; i < 3; i++) {
    //let are block scoped
    //i 
    {
        i = 0;
    }
    {
        i = 1;
    }

    setTimeout(() => console.log(i), 1);
    
}

//

