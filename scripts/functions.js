//@ts-check

add(1,2);

//function is has defualt
let gooch = function(f = "undefined",a = 0) {
    let firstName = f;
    let age = a;
    let greeting = 
   ` Hola, mi amo ${firstName} I'm not 53 im ${age}`
    // "Hola, mi amo " + firstName + " I'm not 53 im " + age;
    console.log(greeting);
};

gooch();
gooch("Attacus", 13);

//function hoisted up to global scope
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

let person = {
    isWearingBarneyShirt: false,
    isTotallyAwesome: false,
};

function wearinBarneyShirt(person) {
    person.isWearingBarneyShirt = true;
    person.isTotallyAwesome = true;
}

console.log(person);
wearinBarneyShirt(person);
console.log(person);