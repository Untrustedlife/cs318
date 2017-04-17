
var minNumber = 0;
var maxNumber = 9;

function randomNumberFromRange(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomize() {
    "use strict";
    document.getElementById("one").selectedIndex = randomNumberFromRange(minNumber, maxNumber);
    document.getElementById("two").selectedIndex = randomNumberFromRange(minNumber, maxNumber);
    document.getElementById("three").selectedIndex = randomNumberFromRange(minNumber, maxNumber);
    document.getElementById("fourth").selectedIndex = randomNumberFromRange(minNumber, maxNumber);
    document.getElementById("fifth").selectedIndex = randomNumberFromRange(minNumber, maxNumber);
    document.getElementById("sixth").selectedIndex = randomNumberFromRange(minNumber, maxNumber);
    document.getElementById("seventh").selectedIndex = randomNumberFromRange(minNumber, maxNumber);
    document.getElementById("eighth").selectedIndex = randomNumberFromRange(minNumber, maxNumber);
    document.getElementById("ninth").selectedIndex = randomNumberFromRange(minNumber, maxNumber);
    document.getElementById("tenth").selectedIndex = randomNumberFromRange(minNumber, maxNumber);
}

function yourFunction() {
    // do whatever you like here
    "use strict";
    randomize();
    alert("Ran out of time, please reenter your phone number plz.");
    setTimeout(yourFunction, 5000 + randomNumberFromRange(1000, 5000)); 
}