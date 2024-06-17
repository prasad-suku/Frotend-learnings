

// try catch
// let person= false
// // let person =false
// try {

//     if(person){
//         console.log("person s true");
//     }
//     else{
//         throw new Error("there is not value");
//     }
 

// } catch (error) {
//     console.log(error.stack);
// }
// finally{
//     console.log('final ');
// }



// 2nd example program



try{
    let total = add(30,0)
    if(total===Infinity)
        {
            throw new Error("this value is infinity try another")
        }
        console.log("total ",total);
}catch(err){
    console.log(err.message);
}


function add(a,b){
    if(isNaN(a)|| isNaN(b)){
        let error = new Error("this is not a valid number");
        error.name = "not valid";
        throw error;
    }
    return a/b;
}