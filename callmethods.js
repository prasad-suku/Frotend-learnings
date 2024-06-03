

let person1 ={name:'raju',age:20}
let person2 = {name:'arun',age:21}

let getperson =function(place,district){
    console.log(this.name,this.age,place,district);
}
console.log(getperson);

// call method
getperson.call(person1,"bhavnai","erode")
// getperson.call(person2)

// apply method

getperson.apply(person2,["ammapettai",'erode'])

// bind this method is stored in variable

let getbindvalue = getperson.bind(person2,"singanalur",'tiruchi')

console.log(getbindvalue());