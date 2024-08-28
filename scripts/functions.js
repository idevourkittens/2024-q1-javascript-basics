//@ts-check
let gooch = function(f,a) {
    let firstName = f;
    let age = a;
    let greeting = 
   ` Hola, mi amo ${firstName} I'm not 53 im ${age}`
    // "Hola, mi amo " + firstName + " I'm not 53 im " + age;
    console.log(greeting);
};

gooch("Attacus", 13);

function add(a,b) {
    let answer = a + b;
    return answer;
};

let additionAnswer = add(100, 5000);
console.log(additionAnswer);

let runMyStuff = (x, y, f) => {
    let answer = f(x, y);
    return answer;
};

runMyStuff("Attabussy", 13, gooch);