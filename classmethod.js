

// simple class

 
class Classname{
   
    name = 'prasasd';
     
    // method
    gotname(age){
        this.age = age
        console.log('hello this is fnctioin');
        return ' My Name is '+this.name+" and my age is"+age;
    }
    
}

let classname = new Classname;
// console.log(classname);
classname.name = "prabhu"
console.log(classname.gotname(18));
console.log(classname.age);


// diffrent way to assing class

let Rectange = class{

    getrectval(height,widht){
        this.height = height;
        this.widht = widht;
        return this.widht+this.height;
    }
}

// creating object for class

let rectange = new Rectange();
let getvalues = rectange.getrectval(20,30)

console.log(getvalues);


//  getting first name and last name 

class Empname{

    // setting a emp name

    set fullname(Fullname){
       let splits = Fullname.split(" ")
        this.firstname = splits[0]
        this.lastname = splits[1]
       
    }

    // getting values through set function

    get fullname(){
        return "First name:"+this.firstname+"  lastname :"+this.lastname
    }
}

// creating object

let empname = new Empname();

empname.fullname = "ARUN KUMAR"

console.log(empname.fullname);