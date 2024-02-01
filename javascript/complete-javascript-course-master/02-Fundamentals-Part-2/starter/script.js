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

/* Arrow functions => can be called only after declaring
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
