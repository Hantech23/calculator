//OPERATIONS
const add = function(a,b) {
	return +a + +b;
};
const subtract = function(a,b) {
	return +a - +b;
};
const multiply = function(a,b) {
  return +a * +b;
};
const divide = function(a,b) {
    return +a/+b;
};
const percent = function(x) {
    return +x/100;
};
const changeSign = function(x) {
    return +x * -1;
};
//DISPLAY
const display = document.querySelector('.screen')
display.textContent = '0';

const clear = document.querySelector('.ac')
clear.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    operator = undefined;
    display.textContent = '0';
})
//NUMBERS
const zero = document.querySelector('.zero')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
//OPERATORS
const addition = document.querySelector('.add')
const subtraction = document.querySelector('.subtract')
const multiplication = document.querySelector('.multiply')
const division = document.querySelector('.divide')
const equals = document.querySelector('.equals')
const percentage = document.querySelector('.percent')
const plusOrMinus = document.querySelector('.change-sign')
//VARIABLES
let num1 = 0;
let num2 = 0;
let operator;
//EVENTLISTENERS FOR NUMBERS
zero.addEventListener("click", () => {
    numberInput('0')
})
one.addEventListener("click", () => {
    numberInput('1')
})
two.addEventListener("click", () => {
    numberInput('2')
})
three.addEventListener("click", () => {
    numberInput('3')
})
four.addEventListener("click", () => {
    numberInput('4')
})
five.addEventListener("click", () => {
    numberInput('5')
})
six.addEventListener("click", () => {
    numberInput('6')
})
seven.addEventListener("click", () => {
    numberInput('7')
})
eight.addEventListener("click", () => {
    numberInput('8')
})
nine.addEventListener("click", () => {
    numberInput('9')
})
//EVENT LISTENERS FOR OPERATORS
addition.addEventListener("click", () => {
    operatorInput('+')
    console.log(operator)
})
subtraction.addEventListener("click", () => {
    operatorInput('-')
    console.log(operator)
})
multiplication.addEventListener("click", () => {
    operatorInput('*')
    console.log(operator)
})
division.addEventListener("click", () => {
    operatorInput('/')
    console.log(operator)
})
equals.addEventListener("click", () => {
    if (!(operator == undefined)) {
        calculate (operator);
    }
})
percentage.addEventListener("click", () => {
    percentORplusminus('%')
})
plusOrMinus.addEventListener("click", () => {
    percentORplusminus('+/-')
})


function numberInput (input) {
    if (operator == undefined) {
        if (num1 == 0) {
            num1 = input;
            display.textContent = input;
            console.log('a = ' + num1)
        }
        else {
            num1 += input;
            display.textContent = num1;
            console.log('a = ' + num1)
        }
    }
    else {
        if (num2 == 0) {
            num2 = input;
            display.textContent = input;
            console.log('b = ' + num2)
        }
        else {
            num2 += input;
            display.textContent = num2;
            console.log('b = ' + num2)
        }
    }
        
}

function calculate (operator) {
    if (operator == '+') {
        num1 = add(num1,num2);
        num2 = 0;
        display.textContent = num1;
    }
    else if (operator == '-') {
        num1 = subtract(num1,num2);
        num2 = 0;
        display.textContent = num1;
    }
    else if (operator == '*') {
        num1 = multiply(num1,num2);
        num2 = 0;
        display.textContent = num1;
    }
    else if (operator == '/') {
        num1 = divide(num1,num2);
        num2 = 0;
        display.textContent = num1;
    }
}

function operatorInput (input) {
    if (operator == undefined) {
        operator = input;
    }
    else {
        calculate (operator);
        operator = input;
    }
}

/*  SIGNIFICANT BUG:
    Pressing these buttons immediately after a result is displayed will cause
    the display to display 0 because num2 is set to 0 after every operation.
*/
function percentORplusminus (eitherButton) {
    if (operator == undefined) {
        if (eitherButton == '%') {
            num1 = percent(num1);
            display.textContent = num1;
            console.log('a = ' + num1);
        }
        else if (eitherButton == '+/-') {
            num1 = changeSign(num1);
            display.textContent = num1;
            console.log('a = ' + num1);
        }
    }
    else {
        if (eitherButton == '%') {
            num2 = percent(num2);
            display.textContent = num2;
            console.log('b = ' + num2);
        }
        else if (eitherButton == '+/-') {
            num2 = changeSign(num2);
            display.textContent = num2;
            console.log('b = ' + num2);
        }
    }
}