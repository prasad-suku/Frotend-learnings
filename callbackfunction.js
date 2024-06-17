
let total= 0;
let scores = [];
let marks = [
    {name:"prasad",score:67},
    {name:"arun",score:23},
    {name:"shanthi",score:54},
    {name:"pranesh",score:97},
]




function totalscore(element,index){
    
    total = total+element.score;
    // let indexvsl = index;

}


marks.forEach(totalscore)
    console.log(total);
   console.log('everage is ',total/marks.length);
//    console.log(scores);



// 2nd example program

function one(){
    console.log('one ');
}


function two(){
    console.log('two ');
}

// //callback functoin

function three(){
    console.log("threee");
    

}

// setTimeout(two,2000)

one();