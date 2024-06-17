
function two_promise(){

    // 1st promise
    let first_promise = new Promise((resolve,reject)=>{   
        setTimeout(()=>{
            resolve("HEllo this is ");
        },2000)
        

    })

   
}


 async function view(){
    try{
        let promise = await first_promise;
        console.log(promise);
    }
    catch(err){
       console.log(err);
    }

 }


