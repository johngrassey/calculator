let num1 = "";
let num2 = "";
let operator = "";
let runningTotal = "";
let historyValue = "";

// NUMBERS TO DISPLAY

let displayValue = "";
const display = document.querySelector(".current");
display.textContent = displayValue;
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (historyValue === "") {
            setHistory(historyValue);
        }
        addDisplayDigit(number);
    });
});

// DECIMAL
const decimal = document.querySelector(".decimal");
    decimal.addEventListener("click", () => {
        if (displayValue.includes(".") === false) {
            addDisplayDigit(decimal);
        }
    });

// OPERATORS

const operators = document.querySelectorAll(".operator");
operators.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        if (runningTotal !== "") {
            num1 = +runningTotal;
            operator = symbol.textContent;
            historyValue = runningTotal + " " + operator;
            setHistory(historyValue);
        } else if (displayValue === "") {
            displayValue = "";
            setDisplay(displayValue);
        } else if (num1 !== "") {
            num2 = +displayValue;
            operator = symbol.textContent;
            operate(operator,num1,num2);
            historyValue += " " + num2 + " " + operator;
            setDisplay(displayValue);
            setHistory(historyValue);
            num1 = displayValue;
        } else {
            num1 = +displayValue;
            operator = symbol.textContent;
            historyValue = displayValue + " " + operator;
            setHistory(historyValue);
        };
        displayValue = "";
        setDisplay(displayValue);
    });
});

// EQUALS

function doEquation() {
    num2 = +displayValue;
    historyValue += " " + displayValue + " =";
    operate(operator,num1,num2);
    setDisplay(displayValue);
    setHistory(historyValue);
    runningTotal = displayValue;
    displayValue = "";
    historyValue = "";
}

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    if (num1 === "" || operator === "" || displayValue === "") {
        displayValue = "ERR";
        setDisplay(displayValue);
        clearCalc();
    } else {
        doEquation();
        clearCalc();
    };
});

// CLEAR

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    clearCalc();
    setDisplay(displayValue);
    setHistory(historyValue);
});

function clearCalc() {
    displayValue = "";
    num1 = "";
    num2 = "";
    operator = "";
    historyValue = "";
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

// UPDATE CURRENT DISPLAY

function setDisplay(number) {
    if (typeof number === "string") {
        display.textContent = number;
    } else {
        display.textContent = Math.round(number * 1000) / 1000;
    };
};

// UPDATE HISTORY DISPLAY

const history = document.querySelector(".history");

function setHistory(str) {
    history.textContent = historyValue;
}

// BACKSPACE

const back = document.querySelector(".back");

back.addEventListener("click", () => {
    backspace();
});

function backspace() {
    displayValue = displayValue.slice(0, -1);
    setDisplay(displayValue);
}

function addDisplayDigit(digit) {
    runningTotal = "";
    displayValue += digit.textContent;
    setDisplay(displayValue);
}