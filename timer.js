//timer function in js
//setTimeout
//setInterval
// clearTimeout
// clearInterval
//syntax

// setTimeout(function(milliseconds) {
// setTimeout(function(milliseconds) {

//to display the hello world after 10 seconds
setTimeout(function() {
    console.log("first");
}, 0);


setTimeout(function() {
    console.log("middle");
}, 20000);


setTimeout(function() {
    console.log("last");
}, 3000);