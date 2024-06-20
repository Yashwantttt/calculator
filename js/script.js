// dont forget to remove the working code examples
let numberOne = 0;
let numberTwo = 0;
let stringOne=''
let stringTwo=''
let operator=''
let sum = 0
let OperationButtonClicked = false
let fixedNumber = 0

const edit = document.getElementById("backspace")
const allClear = document.getElementById("allClear")
const screen = document.getElementById("displayScreen")
const addButton = document.getElementById("addition")
const multiplyButton = document.getElementById("multiply")
const minusButton = document.getElementById("subtract")
const divideButton = document.getElementById("divide")
const equals = document.getElementById("equalsTo")
const percentage = document.getElementById("percent")

const btns = document.getElementsByClassName("noButton")
for(let i=0; i < btns.length ; i++){
    btns[i].addEventListener("mouseover",()=>{
        btns[i].classList.toggle("moving")
    })
    btns[i].addEventListener("mouseleave",()=>{
        btns[i].classList.toggle("moving")
    })
    
}


for(let i=0; i < btns.length ; i++){
    if (OperationButtonClicked!='+'){
        btns[i].addEventListener("click",()=>{
            // if(OperationButtonClicked === true) break ;
            let x1 = Number(btns[i].innerHTML)
            let y1 = String(x1)
            stringOne=stringOne+y1
            numberOne=Number(stringOne)
            screen.innerText=stringOne
            console.log('string one is',stringOne)
            console.log('function for number 1 is running')
    })}
    else{
        break
        
    }
}


let sumOfNumber = addButton.addEventListener("click",addition)


function addition(){
    OperationButtonClicked = '+'
    let num1 = fixation(numberOne)
    fixedNumber = num1
    screen.innerHTML=''
    stringOne=''
    stringTwo=''
    console.log('add button is clicked')
    
        for(let i=0; i < btns.length ; i++){
            btns[i].addEventListener("click",()=>{
                let x2 = Number(btns[i].innerHTML)
                let y2 = String(x2)
                stringTwo=stringTwo+y2
                console.log('string two is',stringTwo)
                numberTwo=Number(stringTwo)
                console.log('number two is',numberOne)
                sum = fixedNumber + numberTwo
                console.log(sum)
            })
        // stringOne=''
        // stringTwo=''
        // numberOne = 0
        // screen.innerHTML=''
        // fixedNumber=sum
        }
        
        equals.addEventListener("click",()=>{
            screen.innerHTML=''
            screen.innerHTML=sum
            num1=sum
        })
} 
minusButton.addEventListener("click",subtraction)
let difference = 0
function subtraction(){
    OperationButtonClicked = '+'
    let num1 = fixation(numberOne)
    fixedNumber = num1
    screen.innerHTML=''
    stringOne=''
    stringTwo=''
    console.log('add button is clicked')
    
        for(let i=0; i < btns.length ; i++){
            btns[i].addEventListener("click",()=>{
                let x2 = Number(btns[i].innerHTML)
                let y2 = String(x2)
                stringTwo=stringTwo+y2
                console.log('string two is',stringTwo)
                numberTwo=Number(stringTwo)
                console.log('number two is',numberOne)
                difference =   fixedNumber- numberTwo 
                console.log(difference)
            })
        // stringOne=''
        // stringTwo=''
        // numberOne = 0
        // screen.innerHTML=''
        // fixedNumber=sum
        }
        
        equals.addEventListener("click",()=>{
            screen.innerHTML=''
            screen.innerHTML=difference
            num1=difference
        })
} 
multiplyButton.addEventListener("click",multiplication)
let product = 1
function multiplication(){
    OperationButtonClicked = '+'
    let num1 = fixation(numberOne)
    fixedNumber = num1
    screen.innerHTML=''
    stringOne=''
    stringTwo=''
    console.log('add button is clicked')
    
        for(let i=0; i < btns.length ; i++){
            btns[i].addEventListener("click",()=>{
                let x2 = Number(btns[i].innerHTML)
                let y2 = String(x2)
                stringTwo=stringTwo+y2
                console.log('string two is',stringTwo)
                numberTwo=Number(stringTwo)
                console.log('number two is',numberOne)
                product  = fixedNumber * numberTwo
                console.log(product)
            })
        // stringOne=''
        // stringTwo=''
        // numberOne = 0
        // screen.innerHTML=''
        // fixedNumber=sum
        }
        
        equals.addEventListener("click",()=>{
            screen.innerHTML=''
            screen.innerHTML=product
            num1= product
        })
} 

divideButton.addEventListener("click",division)
let quotient = 1
function division(){
    OperationButtonClicked = '+'
    let num1 = fixation(numberOne)
    fixedNumber = num1
    screen.innerHTML=''
    stringOne=''
    stringTwo=''
    console.log('add button is clicked')
    
        for(let i=0; i < btns.length ; i++){
            btns[i].addEventListener("click",()=>{
                let x2 = Number(btns[i].innerHTML)
                let y2 = String(x2)
                stringTwo=stringTwo+y2
                console.log('string two is',stringTwo)
                numberTwo=Number(stringTwo)
                console.log('number two is',numberOne)
                quotient =  fixedNumber/numberTwo
                console.log(quotient)
            })
        // stringOne=''
        // stringTwo=''
        // numberOne = 0
        // screen.innerHTML=''
        // fixedNumber=sum
        }
        
        equals.addEventListener("click",()=>{
            screen.innerHTML=''
            screen.innerHTML=quotient
            num1=quotient
        })
} 

percentage.addEventListener("click",()=>{
    alert("This is a premium feature")
    alert("Pay $1 Million Dollars to Unlock")
})



function fixation(number){
    const Number1=number
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
    stringTwo=''
    operator=''
    screen.innerHTML=''
    sum=0
    fixedNumber=0
    num1=0
})



