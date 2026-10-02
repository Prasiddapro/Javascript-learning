//Return statement it is used to return the value from the function and which is generally inisde the parenthsise 
//The return statement is used to send a value out of a function.


//  write the program to display the arithmetic operations im it


//  a = [30, 50, 60, 133, 3333, 55555];

// function sum(a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         sum += a[i];
//     }
//     return sum;
// }

// let result = sum(a);
// console.log(result); // Output: 59161

array = [ 30, 50, 60, 133, 3333, 55555]
//write a program to calculte the sum of the number using the function arguments passing in the array and print the sum of last two
//number

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
    
}
let result = sum(array);
console.log(result);
let lastTwo = array.slice(-2);
let result2 = sum(lastTwo);
 console.log(result2);