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


const previousExpressionDisplay = document.getElementById(previousExpression)

//resolve
const equalButton = document.getElementById("equal")
const clearButton = document.getElementById("clear")

const display = document.getElementById("display")

let currentExpressionDisplay = ""
let currentExpressionCode = ""


// audio

const noChance = new Audio("sounds/nochance1.mp3")
const uhuh = new Audio("sounds/uhuh1.mp3")
const sorryBud = new Audio("sounds/sorrybud1.mp3")
const noCanDo = new Audio("sounds/nocando1.mp3")
const nahBro = new Audio("sounds/nahbro1.mp3")
const niceTry = new Audio("sounds/nicetry1.mp3")
const cantLetYouDoThat = new Audio("sounds/cantletyoudothat1.mp3")

const digitSoundProbability = .35
// const operatorSoundProbability = .45
// const specialSoundProbability = 0.55



const soundFiles = [noChance, uhuh, sorryBud, noCanDo, nahBro, niceTry, cantLetYouDoThat]

function playRandomSound() {
    const randomIndex = Math.floor(Math.random() * soundFiles.length);
    soundFiles[randomIndex].play()
}

function playAtRandomTime() {
    if (Math.random() <= digitSoundProbability) {
        playRandomSound();
    }
}


function updateDisplay() {
    display.value = currentExpressionDisplay
}

function digitPressed(digit) {
    if (Math.random() <= digitSoundProbability) {
        playRandomSound();
    } else{
    currentExpressionCode += digit
    currentExpressionDisplay += digit
    updateDisplay()}
}




equalButton.addEventListener("click", ()=> {
   
    if (Math.random() <= digitSoundProbability) {
        playRandomSound();
    } else {
        const result = eval(currentExpressionCode)

        display.value = result
        previousExpressionDisplay.value = currentExpressionDisplay
    
        currentExpressionDisplay = result
        currentExpressionCode = result
        
    }

})


clearButton.addEventListener("click", ()=> {
    
    

    if (Math.random() <= digitSoundProbability) {
        playRandomSound();
    } else {
        currentExpressionCode = ""
    currentExpressionDisplay = ""

    display.value = ""
    previousExpressionDisplay.value = ""
    }

    updateDisplay()
})

negateButton.addEventListener("click", ()=> {
    

    if (Math.random() <= digitSoundProbability) {
        playRandomSound();
    } else {
        currentExpressionDisplay += "-"
        currentExpressionCode += "-"
    }

    updateDisplay()
})

squareButton.addEventListener("click", ()=> {
    
    // 3+9*5/4-8

    

    if (Math.random() <= digitSoundProbability) {
        playRandomSound();
    } else {
        const numbers = currentExpressionCode.split(/[+\-\*\/]/)
    console.log(numbers)

    let lastNumber = numbers[numbers.length-1]

    console.log(lastNumber.length)

    const result = lastNumber*lastNumber

    currentExpressionCode = currentExpressionCode.slice(0, currentExpressionCode.length - lastNumber.length)

    currentExpressionCode+= result

    currentExpressionDisplay+= "^2"
    }

    updateDisplay()
})

squareRootButton.addEventListener("click", ()=> {
    
    

    if (Math.random() <= digitSoundProbability) {
        playRandomSound();
    } else {
        const numbers = currentExpressionCode.split(/[+\-\*\/]/)
    console.log(numbers)

    let lastNumber = numbers[numbers.length-1]

    console.log(lastNumber.length)

    const result = Math.sqrt(lastNumber)

    currentExpressionCode = currentExpressionCode.slice(0, currentExpressionCode.length - lastNumber.length)

    currentExpressionCode+= `${result}`

    currentExpressionDisplay+= "√"
    }

    updateDisplay()
})

plusButton.addEventListener("click", ()=> {
    

    if (Math.random() <= digitSoundProbability) {
        playRandomSound();
    } else {
        currentExpressionCode += "+"
    currentExpressionDisplay += " + "
    }

    updateDisplay()
})

minusButton.addEventListener("click", () => {
    

    if (Math.random() <= digitSoundProbability) {
        playRandomSound();
    } else {
        currentExpressionCode += "-"
        currentExpressionDisplay += " - "
    }

    updateDisplay()
    
})

multiplyButton.addEventListener("click", () => {
    
   
    if (Math.random() <= digitSoundProbability) {
        playRandomSound();
    } else {
        currentExpressionCode += "*"
    currentExpressionDisplay += " * "
    }

    updateDisplay()
})

divideButton.addEventListener("click", () => {
    

    if (Math.random() <= digitSoundProbability) {
        playRandomSound();
    } else {
        currentExpressionCode += "/"
    currentExpressionDisplay += " / "
    }

    updateDisplay()
})

decimalButton.addEventListener("click", () => {
    digitPressed(".")
})

oneButton.addEventListener("click", () => {
    digitPressed("1")
})

twoButton.addEventListener("click", () => {
    digitPressed("2")
})

threeButton.addEventListener("click", () => {
    digitPressed("3")
})

fourButton.addEventListener("click", () => {
    digitPressed("4")
})

fiveButton.addEventListener("click", () => {
    digitPressed("5")
})

sixButton.addEventListener("click", () => {
    digitPressed("6")
})

sevenButton.addEventListener("click", () => {
    digitPressed("7")
})

eightButton.addEventListener("click", () => {
    digitPressed ("8")
})

nineButton.addEventListener("click", () => {
    digitPressed("9")
})

zeroButton.addEventListener("click", () => {
    digitPressed("0")
})
