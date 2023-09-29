function list(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}

function multiply(x, y) {
    return x * y;
}

function isEven(num) {
    return num % 2 == 0;
}

const subtract = function difference(a, b) {
    return a - b;
};

const greeting = function(name) {
    return `Hello, ${name}! :)`;
}

function calculate(x, y) {
    const square = function (num) {
        return num**2;
    }
    return square(x) + square(y);
}

const multiply2 = (a, b) => a * b;

const greet = (name) => `Hello, ${name}!`;

const square = (x) => x*x;

const isEven2 = (num) => num % 2 == 0;

const findMax = (numbers) => Math.max(...numbers);

const addTwoNumbers = (a, b) => {
    const sum = a + b; 
    return sum;
};