let num1 = "";
let num2 = "";
let operator = "";
let runningTotal = "";

// NUMBERS TO DISPLAY

let displayValue = "";
const display = document.querySelector(".display");
display.textContent = displayValue;
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        runningTotal = "";
        displayValue += number.textContent;
        setDisplay(displayValue);
    });
});

// OPERATORS

const operators = document.querySelectorAll(".operator");
operators.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        if (runningTotal !== "") {
            num1 = +runningTotal;
        } else {
            num1 = +displayValue;
        };
        operator = symbol.textContent;
        displayValue = "";
    });
});

// EQUALS

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    if (num1 === "" || operator === "" || displayValue === "") {
        displayValue = "ERR";
        setDisplay(displayValue);
        clearCalc();
    } else {
        num2 = +displayValue;
        operate(operator,num1,num2);
        setDisplay(displayValue);
        runningTotal = displayValue;
        displayValue = "";
    };
});

// CLEAR

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    clearCalc();
    setDisplay(displayValue);
});

function clearCalc() {
    displayValue = "";
    num1 = "";
    num2 = "";
    operator = "";
}

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
        if (num2 === 0) {
            displayValue = "Can't Do That!";
        } else {
            divide(a,b);
        };
    }
};

// UPDATE DISPLAY

function setDisplay(number) {
    if (typeof number === "string") {
        display.textContent = number;
    } else {
        display.textContent = Math.round(number * 1000) / 1000;
    };
};