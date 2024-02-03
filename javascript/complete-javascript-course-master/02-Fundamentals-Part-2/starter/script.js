"use strict";

/* strict mode wont work if it is not at the starting, comments can be ignored
// strict mode can be used at a block or function level as well
// strict mode will avoid accidental errors, it will give us error when executed

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("Yay! I can drive!!");

// const interface = "abc";
// const private = 123;
*/

/* Functions
function logger() {
  console.log("I am a function");
}
// calling/running/invoking the function
logger();

function juiceMaker(fruit1, fruit2) {
  console.log(fruit1, fruit2);
  const juice = `This is a juice consisting of ${fruit1} and ${fruit2}`;
  console.log(juice);
  return juice;
}

// const juice = juiceMaker("Apples", "Oranges");
// console.log(juice);
console.log(juiceMaker("Apples", "Oranges"));
const num = Number("2");
console.log(num);
*/

/* Function Declarations Vs Expressions
//Function Declaration (Normal function) => can alse be called before declaring
const age = calcAge1(1997);
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
console.log(`You are ${age} years old!`);
//Function Expression (Annonymous function) => can be called only after declaring
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
// const age2 = calcAge2(1997);
console.log(`You are ${calcAge2(1998)} years old!`);
*/

/* Arrow functions => can be called only after declaring and has no 'this' keyword
// single parameter with single return statement
const calcAge3 = (birthYear) => 2024 - birthYear;
console.log(`You are ${calcAge3(1999)} years old!`);

// single parameter with multiple statements
const retirementYearsLeft = (birthYear) => {
  const age = 2024 - birthYear;
  const retirementAge = 65 - age;
  return retirementAge;
};
console.log(`You have ${retirementYearsLeft(2000)} years left for retirement!`);

// single parameter with multiple statements
const retirementYearsLeftFor = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirementAge = 65 - age;
  return `${firstName} retires in ${retirementAge} years`;
};
console.log(`Note: ${retirementYearsLeftFor(1999, "Amit")}`);
*/

/* Functions calling other functions
function makeFourPieces(fruit) {
  return fruit * 4;
}
function countAppleOrangePieces(apple, orange) {
  const applePieces = makeFourPieces(apple);
  const orangePieces = makeFourPieces(orange);
  return `There are ${applePieces} pieces of ${apple} apples and ${orangePieces} pieces of ${orange} oranges`;
}
console.log(countAppleOrangePieces(3, 3));
*/

/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
i.Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
ii.Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
iii.Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
iv.Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// Solution:
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2)
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  else if (avgKoalas >= avgDolphins * 2)
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  else console.log(`No team wins...`);
}
checkWinner(scoreDolphins, scoreKoalas);

const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);
checkWinner(scoreDolphins1, scoreKoalas1);
*/

/* Introduction to Arrays
const friend1 = "Amit";
const friend2 = "Raja";
const friend3 = "Raj";

const friends = ["Amit", "Raja", "Raj"];
console.log(friends.length, friends[2], friends);

const years = new Array(1997, 1998, 1999, 2000);
console.log(years.length, years[3], years);

friends[2] = "Rajan";
years[3] = 2024;
console.log(friends, years);

// friends = ["abc", "xyz"];
// console.log(friends);

const firstName = "Amit";
const amit = [
  firstName,
  "Vishwakarma",
  2024 - 1997,
  "Software developer",
  friends,
];
console.log(amit);

const calcAge = (birthYear) => 2024 - birthYear;
const ages = [];
let i = 0;
years.forEach((year) => {
  ages[i] = calcAge(year);
  i++;
});
console.log(ages);
*/

/* Basic Array Operations (Methods)
const years = new Array(1997, 1998, 1999, 2000);
console.log(years);

let newLength = years.push(2001); // push returns new array length
console.log(
  "pushing new data " + years[newLength - 1],
  "|| new array length after push is " + newLength,
  years
);

newLength = years.unshift(1996); // unshift returns new array length and inserts data at first index
console.log(
  "unshifting new data " + years[0],
  "|| new array length after unshift is " + newLength,
  years
);

let poppedItem = years.pop(); // pop returns popped array data
console.log(
  "popped data " + poppedItem,
  "|| new array length after pop is " + years.length,
  years
);

let shiftedItem = years.shift();
console.log(
  "shifted data " + shiftedItem,
  "|| new array length after shift is " + years.length,
  years
);

console.log("Index of 2000 is " + years.indexOf(2000));
console.log("Index of 1990 is " + years.indexOf(1990)); // returns -1 if index not found

console.log(years.includes(2000), years.includes(2001)); // includes is ES6 method returns boolean
console.log(years.includes("2000")); // includes do strict equality checking
*/

/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
i.Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
ii.And now let's use arrays! So, create an array called bills containing the test data below.
iii.Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.
TEST DATA: 125, 555, and 44.

// Solution:
const calcTip = (bill) => (bill>=50 && bill<=300)? bill*0.15: bill*0.2;
console.log(calcTip(100));
const bills = new Array(125, 555, 44);
const tips = new Array(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]));
console.log(tips);
const totals = new Array(bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]);
console.log(totals);
*/
