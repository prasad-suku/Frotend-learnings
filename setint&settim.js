
// getting values

let h1 =document.getElementById("h1")
let h2 =document.getElementById("h2")
let stopbtn =document.getElementById("stop")


let settim = setTimeout(()=>{
    h1.style= "color:blue"
    h2.style= "color:green"
},3000)

stopbtn.addEventListener("click",()=>{
    clearTimeout(settim)
})

// setinterval

let timer= document.getElementById("timer")
let count =0

let setint = setInterval(() => {
    timer.innerHTML = count

   
    count++
}, 1000);

stopbtn.addEventListener("click",()=>{
    clearinterval(setint)
})