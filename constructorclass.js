
// constructor function

class Persondeta {

    #name;
    salary;
    age;

    constructor(name,salary)
    { 
   this.#name = name;
   this.salary = salary;
  
    }

   
   

   
}


// inherts the parent class

class Copyparentclass extends Persondeta {

    constructor(age){
       super(age)
       this.age = age;
    }
  
    get totalsal(){
        return this.salary*500+"$";
    }
    
}

// creating object 

let persondeta  = new Persondeta("prasad",12)
// inherts class

let copyparentclass = new Copyparentclass(20);

console.log(copyparentclass);


// setting data

// console.log(persondeta);
// console.log(persondeta1.empdetails);
// console.log(persondeta2.empdetails);
// console.log(persondeta3.empdetails);