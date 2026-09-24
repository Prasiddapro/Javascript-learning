// to make the calculator work, you need to implement the logic for the operations (addition, subtraction, multiplication, and division) based on the user's input. Here's a simple example of how you can do that:

// Get the user's input using switch  and break statement
const readlineSync = require("readline-sync");

const number1 = parseFloat(readlineSync.question("Enter the first number: "));
const number2 = parseFloat(readlineSync.question("Enter the second number: "));
const operation = readlineSync.question("Enter the operation (+, -, *, /): ");

let result;
let isValid = true;

switch (operation) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        if (number2 === 0) {
            console.log("Error: Cannot divide by zero.");
            isValid = false;
        } else {
            result = number1 / number2;
        }
        break;
    default:
        console.log("Error: Invalid operation.");
        isValid = false;
        break;
}

if (isValid) {
    console.log("Result: " + result);
}