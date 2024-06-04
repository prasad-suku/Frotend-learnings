
// fill methods

let a = [124,44,54,6573,4]

a.fill(20)
console.log("after filling",a);
a.fill(10,1,3)
console.log(a);


// includes methods

let animals = ['elephant','cat','dog','parrot','elephant']


console.log(animals.includes('cat',2));

// joins methods convrting from array to string

// console.log(animals.join('|'));


// reverse methods

let reversedarr = animals.reverse()
console.log(reversedarr);


// array like object

let b = {0:'prasad',1:'arun',2:'karthick',3:'manoj' ,length:4}
// console.log(b.reverse());

Array.prototype.reverse.call(b)
console.log(b);

// push methods in array

let c = [12,3,43,54,64,7]
 
console.log("before push :",c);
c.push(23,43,12)
console.log("after push :",c);


d =['afjf','jsdklfa'];
e =['fdsfa','fdsfasdf','third value']
d.push("arun",'kamesh')
console.log(d);

d.push(...e)
console.log(d);


// pop method

d.pop()
console.log(d);

// shift method to remove element at start
d.shift();
d.shift();
console.log(d);

// unshift method to add element at start

d.unshift('added')
console.log(d);
console.log(d.unshift("secend value"));
console.log(d);

d.unshift(...e)
console.log(d);


// index of value

let g= ['arun','raju','somu','ramu','arun']

console.log(g.indexOf('arun'));

console.log("last index of",g.lastIndexOf('arun'));

// every and some metthos

let even_no = [22,33,56,12,4,78,88,44]

let getresult = even_no.every((no)=>{return no%2==0})
console.log(getresult);

let getresult2 =even_no.some((no)=>{return no%2==0})
console.log(getresult2);

// another example 

let person3 =[{name:'arun',age:20},
    {name:'aruna',age:22},
    {name:'harish',age:12},
    {name:'selvaa',age:12},
]

let ispersonis18old = person3.every((person)=>{
    return person.age>=18
})
console.log("above 18:",ispersonis18old);

// some

let isperson = person3.some((person)=>{
    return person.age>=18
})
console.log("above 18:",isperson);