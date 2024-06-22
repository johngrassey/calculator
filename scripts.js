let num1;
let num2;
let operator;

function add(a,b) {
    console.log( a + b );
};

function subtract(a,b) {
    console.log( a - b );
};

function multiply(a,b) {
    console.log( a * b );
};

function divide(a,b) {
    console.log( a / b );
};

function operate(operator, a, b) {
    if (operator === "+") {
        add(a,b);
    } else if (operator === "-") {
        subtract(a,b);
    } else if (operator === "*") {
        multiply(a,b); 
    } else {
        divide(a,b);
    }
};