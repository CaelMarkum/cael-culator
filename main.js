//numbers
const oneButton = document.getElementByID("one")
const twoButton = document.getElementByID("two")
const threeButton = document.getElementByID("three")
const fourButton = document.getElementByID("four")
const fiveButton = document.getElementByID("five")
const sixButton = document.getElementByID("six")
const sevenButton = document.getElementByID("seven")
const eightButton = document.getElementByID("eight")
const nineButton = document.getElementByID("nine")
const zeroButton = document.getElementByID("zero")

//operations
const plusButton = document.getElementByID("plus")
const minusButton = document.getElementByID("minus")
const divideButton = document.getElementByID("divide")
const multiplyButton = document.getElementByID("multiply")

//special operations
const negateButton = document.getElementByID("negate")
const squareButton = document.getElementByID("square")
const squareRootButton = document.getElementByID("squareRoot")
const decimalButton = document.getElementByID("decimal")

//resolve
const equalButton = document.getElementByID("equal")
const clearButton = document.getElementByID("clear")

const display = document.getElementById("display")

clearButton.addEventListener("click", ()=> {
    display.value = ""
})


oneButton.addEventListener("click", ()=> {
    display.value += "1"
})

