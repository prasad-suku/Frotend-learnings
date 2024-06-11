
// private key

class Privateaccess{

     #name = 'prasad kumar';

       set gainname(name){
        // console.log(this.#name);
        this.#name = name;

     }

     get gainname()
     {
        console.log("this is  "+this.#name);
     }

}

let privateaccess =  new Privateaccess();

console.log('------new-----------');

// setting value to set parameter
// privateaccess.gainname = 
 console.log(privateaccess.gainname);


//  private function

class Empsalary{

    


    set empsal(Salary){
        // this.name = Name;
        this.salary =  Salary;
    }  

     get empsal(){
      return " total salary is :"+this.#totalsal();
     }

    //  private function
    #totalsal(){
        this.salary = this.salary+1300+'$';
        return this.salary;
    }
}

let empsalary = new Empsalary();

empsalary.empsal = 245000
console.log(empsalary.empsal);