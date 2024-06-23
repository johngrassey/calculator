let num1;
let num2;
let operator;


// NUMBERS TO DISPLAY

let displayValue = "";
const display = document.querySelector(".display");
display.textContent = displayValue;
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        displayValue += number.textContent;
        display.textContent = displayValue;
    });
});

// OPERATORS

const operators = document.querySelectorAll(".operator");
operators.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        num1 = +displayValue;
        operator = symbol.textContent;
        displayValue = "";
    });
})


// EQUALS

const equals = document.querySelector(".equals");
    equals.addEventListener("click", () => {
        num2 = +displayValue;
        operate(operator,num1,num2);
        display.textContent = displayValue;
        displayValue = "";
    });

// ARITHMETIC

function add(a,b) {
    displayValue = a + b ;
};

function subtract(a,b) {
    displayValue = a - b ;
};

function multiply(a,b) {
    displayValue = a * b ;
};

function divide(a,b) {
    displayValue = a / b ;
};

function operate(operator, a, b) {
    if (operator === "+") {
        add(a,b);
    } else if (operator === "-") {
        subtract(a,b);
    } else if (operator === "x") {
        multiply(a,b); 
    } else {
        divide(a,b);
    }
};