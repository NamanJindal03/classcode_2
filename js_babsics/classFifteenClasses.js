
class People{
    //instance properties
    //instance methods 
    constructor(age, name){
        //console.log('I am the constructor I will be the one one to get called')
        this.age = age,
        this.name = name
    }
    //instance methods
    descPerson(){
        console.log(`Hey my Name is ${this.name} and my age is ${this.age}`)
    }
    //inheritance in class keyword
}
//this 

class Teacher extends People{
    constructor(_school, _name, _age){
        super(_age, _name)
        this.school = _school
    }
}


let people1 = new People(20, 'naman')
let people2 = new People(10, 'Abhisk')
console.log(people1)
console.log(people2)
people1.descPerson()

let teacher1 = new Teacher('RDPS', 'th', 45)


//Filter polyfill 
const words = ['naman', 'jindal', 'abcdefghj']
const result = words.filter(word => word.length > 5 )//true, false
console.log(result)

Array.prototype.myFilter = function(cb){
    let result = [];
    for(let i=0; i< this.length; i++){
        if(cb(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result
}
const myExecc = words.myFilter(word => word.length )
console.log(myExecc) //

//Every
//fill
//find

//push
//pop
//slice
//splice
