const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((a,b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce((a,b) => a * b, 1)
};

const divide = function(a,b) {
    return a/b;
}
/*
function operate(num1, operator, num2) {
    return operator(a,b);
}
*/

const display = document.querySelector('.screen')
display.textContent = '0';

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

let num1 = 0;
let operator;
console.log(operator)

zero.addEventListener("click", () => {
    firstValue('0')
})
one.addEventListener("click", () => {
    firstValue('1')
})
two.addEventListener("click", () => {
    firstValue('2')
})
three.addEventListener("click", () => {
    firstValue('3')
})
four.addEventListener("click", () => {
    firstValue('4')
})
five.addEventListener("click", () => {
    firstValue('5')
})
six.addEventListener("click", () => {
    firstValue('6')
})
seven.addEventListener("click", () => {
    firstValue('7')
})
eight.addEventListener("click", () => {
    firstValue('8')
})
nine.addEventListener("click", () => {
    firstValue('9')
})


function firstValue (input) {
    if (num1 == 0) {
        num1 = input;
        display.textContent = input;
        console.log(num1)
    }
    else {
        num1 += input;
        display.textContent = num1;
        console.log(num1)
    }
}

//num1 = 50
//firstValue('3')
/*
console.log(num1)
num1 += 1;
console.log(num1)

num1 += '20';
console.log(num1)
*/


//num1 = 10;
//display.textContent = num1; 
/*
one.addEventListener("click", () => {
    num1 += '1';
    display.textContent = num1;
})
*/


/*
function operate(key) {
   if (num1 = 0) {
       return num1 = key;
   } 
}
*/