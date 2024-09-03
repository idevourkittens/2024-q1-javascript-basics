//@ts-check

let isTheSkyBlue = false;
let isTheSunShining = true;

if (isTheSkyBlue) {
    console.log("Day Time!!!");
} else if (isTheSunShining && !isTheSkyBlue) {
    let cloudColor = "grey!!!";
    console.log("It be stormy and da clouds be", cloudColor);
} else {
    console.log("Night Time!!!");
} 

console.log(isTheSkyBlue, isTheSunShining);