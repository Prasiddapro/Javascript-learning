function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

let celsius = 48;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit + "°F");