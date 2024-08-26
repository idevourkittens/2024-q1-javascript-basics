//@ts-check
// this var = int
let intelligenceQuotient = 100;

// this var = int
let age = 13;

// this var = str
let firstName = "Attacus";

// this var = str
let lastName = "Brown";

// this var = bool
let silly = true;

// this var = still Attacus
firstName = "Attacus";

//this vars = const
const MIN_IQ = 50;
const MAX_IQ = 300;

//this var = object
let myPet = {
    type: "Cat",
    name: "Depeche",
    age: 3,
    color: "White",
    good: "no"
};

//this var = array
let favCandies = [
    "KitKat",
    "Reeses",
    "Reeses Pieces",
    "Chocolate"
];

favCandies.length;

console.log("Name?", firstName, lastName, "Age?", age, "IQ ",intelligenceQuotient, 
    "Max IQ is ", MAX_IQ, "Min IQ is ", MIN_IQ, "Am I silly? The answer is ", silly,
    "My cat is ", myPet, "My favorite candies are ", favCandies);
