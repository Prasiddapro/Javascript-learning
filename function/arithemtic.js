let a = 10;
let b = 20;

function addition(a, b) {
    let add = a + b;
    console.log("the addition of two numbers is " + add);
}

addition(a, b);


let c = 100;
let d = 50;

function substract(c, d) {
    let substract = c - d;
    console.log("the substraction of two numbers is " + substract);
    return substract(c, d)
}

substract(c, d);


let e = 100;
let f = 50;

function multiply(e, f) {
    let multiplication = e * f;
    console.log("the multiplication of two numbers is " + multiplication);
}

multiply(e, f);


let g = 500;
let h= 50;

function divide(g, h) {
    let division = g / h;
    console.log("the division of two numbers is " + division);
}

divide(g, h);