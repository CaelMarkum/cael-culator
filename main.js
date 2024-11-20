//numbers
const oneButton = document.getElementById("one")
const twoButton = document.getElementById("two")
const threeButton = document.getElementById("three")
const fourButton = document.getElementById("four")
const fiveButton = document.getElementById("five")
const sixButton = document.getElementById("six")
const sevenButton = document.getElementById("seven")
const eightButton = document.getElementById("eight")
const nineButton = document.getElementById("nine")
const zeroButton = document.getElementById("zero")

//operations
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const divideButton = document.getElementById("divide")
const multiplyButton = document.getElementById("multiply")

//special operations
const negateButton = document.getElementById("negate")
const squareButton = document.getElementById("square")
const squareRootButton = document.getElementById("squareRoot")
const decimalButton = document.getElementById("decimal")

//resolve
const equalButton = document.getElementById("equal")
const clearButton = document.getElementById("clear")

const display = document.getElementById("display")


let currentNumberString = ""
let savedNumber = 0
let currentOperation = ""
let expectingNewNumber = false

function digitPressed(digit) {
    if(expectingNewNumber)
        {
            currentNumberString = ""
            expectingNewNumber = false
    }

    currentNumberString += digit

    updateDisplay()
}

function updateDisplay() {
    display.value = currentNumberString
}


equalButton.addEventListener("click", ()=> {

    const number = Number.parseFloat(currentNumberString)

    let result

    if(currentOperation === "+"){
        result = savedNumber + number
    }
    if(currentOperation === "-"){
        result = savedNumber - number
    }
    if(currentOperation === "*"){
        result = savedNumber * number
    }
    if(currentOperation === "/"){
        result = savedNumber / number
    }

    currentNumberString = result.toString()
    updateDisplay()
})


clearButton.addEventListener("click", ()=> {
    currentNumberString = ""
    expectingNewNumber = false
    savedNumber = 0
    currentOperation = ""
    updateDisplay()
})

negateButton.addEventListener("click", ()=> {
    const number = Number.parseFloat(currentNumberString)


    const result = number * -1

    currentNumberString = result.toString()

    updateDisplay()
})

squareButton.addEventListener("click", ()=> {
    const number = Number.parseFloat(currentNumberString)


    const result = number * number

    currentNumberString = result.toString()

    updateDisplay()
})

squareRootButton.addEventListener("click", ()=> {
    currentOperation="+"
    
    const number = Number.parseFloat(currentNumberString)


    const result = Math.sqrt(number)

    currentNumberString = result.toString()

    updateDisplay()
})

plusButton.addEventListener("click", ()=> {
    currentOperation = "+"
    expectingNewNumber = true
    savedNumber = Number.parseFloat(currentNumberString)
})

minusButton.addEventListener("click", () => {
    currentOperation = "-"
    expectingNewNumber = true
    savedNumber = Number.parseFloat(currentNumberString)
})

multiplyButton.addEventListener("click", () => {
    currentOperation = "*"
    expectingNewNumber = true
    savedNumber = Number.parseFloat(currentNumberString)
})

divideButton.addEventListener("click", () => {
    currentOperation = "/"
    expectingNewNumber = true
    savedNumber = Number.parseFloat(currentNumberString)
})

oneButton.addEventListener("click", () => {
    digitPressed("1")
    console.log("test")
})

twoButton.addEventListener("click", () => {
    digitPressed("2")
    console.log("test")
})

threeButton.addEventListener("click", () => {
    digitPressed("3")
    console.log("test")
})

fourButton.addEventListener("click", () => {
    digitPressed("4")
    console.log("test")
})

fiveButton.addEventListener("click", () => {
    digitPressed("5")
    console.log("test")
})

sixButton.addEventListener("click", () => {
    digitPressed("6")
    console.log("test")
})

sevenButton.addEventListener("click", () => {
    digitPressed("7")
    console.log("test")
})

eightButton.addEventListener("click", () => {
    digitPressed ("8")
    console.log("test")
})

nineButton.addEventListener("click", () => {
    digitPressed("9")
    console.log("test")
})

zeroButton.addEventListener("click", () => {
    digitPressed("0")
    console.log("test")
})

    decimalButton.addEventListener("click", () => {
    
})