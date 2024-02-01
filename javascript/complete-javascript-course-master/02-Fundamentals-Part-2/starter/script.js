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
