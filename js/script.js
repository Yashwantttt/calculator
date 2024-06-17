// dont forget to remove the working code examples
let numberOne = 0;
let numberTwo = 0;
let stringOne=''
let operator=''

let edit = document.getElementById("backspace")
let allClear = document.getElementById("allClear")
const screen = document.getElementById("displayScreen")

const btns = document.getElementsByClassName("noButton")
for(let i=0; i < btns.length ; i++){
    btns[i].addEventListener("mouseover",()=>{
        btns[i].classList.toggle("moving")
    })
    btns[i].addEventListener("mouseleave",()=>{
        btns[i].classList.toggle("moving")
    })
    btns[i].addEventListener("click",()=>{
        let x = Number(btns[i].innerHTML)
        let y = String(x)
        stringOne=stringOne+y
        numberOne=Number(stringOne)
        screen.innerText=numberOne
    })
}


function fixation(number){
    let Number1=number
    return(Number1)
}

edit.addEventListener("click",()=>{
    let content = String(screen.innerText)
    let arrayOne = content.split('')
    arrayOne.pop()
    stringOne = arrayOne.join('')
    console.log(stringOne)           //here is the console log
    numberOne = Number(stringOne)
    screen.innerHTML=stringOne   
})

allClear.addEventListener("click",()=>{
    numberOne=0
    numberTwo=0
    stringOne=''
    operator=''
    screen.innerHTML=''
})




// working code 
// const clear = document.getElementById("allClear")
// clear.addEventListener("click",greener)

// function greener(){
//     clear.style.backgroundColor = "green"
// }


// working code 
// const btn = document.getElementById("buton");
// btn.addEventListener("mouseover",hover)
// function hover(){
//     btn.style.backgroundColor= "green"
// }