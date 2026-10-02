let count = 0;

const intervalId = setInterval(function() {
    count++;
    console.log("Hello world");

    if (count === 100) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 200);