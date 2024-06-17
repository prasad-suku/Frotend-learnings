

function async_methodfunction(){
// 1st promise

let promise_1 = new Promise ((resolve,rej)=>{
   
    let name = {name:'prasad',age:20};
    resolve(name)
})

let promise_2 = new Promise ((resolve,rej)=>{
   
    let name2 = {name:'arun',age:23};
    resolve(name2)
})

// combining two promise in one varible
let combine_promize = Promise.all([promise_1,promise_2])
return combine_promize;

}

// writing async and await function
 async function showresult(){
    let result = await async_methodfunction();
    console.log(result)
    // return result;
 }

 
 showresult()
// async_methodfunction().then((res)=>console.log(res[0])).catch((err)=>console.log(err))

// console.log('hello 2mwthod');