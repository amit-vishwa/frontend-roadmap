/*
let js = "amazings";
console.log(10 + 20 - 5);

console.log("Jonas", 23);

let firstName = "Amit";
console.log(firstName);
console.log("First name is " + firstName);

// Variable name conventions
let first_name = "snake case variable name";
let lastName = "camel case variable name";
let LastName = "pascal case variable name, this is not used in js";
let $function = "reserved keyword can be used using $ or _";
let name =
  "name is reserved keyword then also we can use this as variable, we should avoid using it";
let Person = "we should not use variable name with 1st letter as uppercase";
let PI = "constants are in upper case";
let person = "single word in all lower case";

// below variables are more descriptive
let myFirstJob = "Analyst";
let myCurrentJob = "Backend developer";

// below variables are less descriptive
let job1 = "Analyst";
let job2 = "Backend developer";
*/

/*Data types in java script
console.log("Primitive data types:");
let numberVariable = 12;
console.log("Data type of " + numberVariable + " is " + typeof numberVariable);
let stringVariable = "Amit";
console.log("Data type of " + stringVariable + " is " + typeof stringVariable);
let booleanVariable = true;
console.log(
  "Data type of " + booleanVariable + " is " + typeof booleanVariable
);
let undefinedVariable;
console.log(
  "Data type of " + undefinedVariable + " is " + typeof undefinedVariable
);
let nullVariable = null;
console.log("Data type of " + nullVariable + " is " + typeof nullVariable);
// let symbolVariable = new Symbol("Symbol");
// console.log("Data type of " + symbolVariable + " is " + typeof symbolVariable);
let bigintVariable = BigInt(1234567890);
console.log("Data type of " + bigintVariable + " is " + typeof bigintVariable);
*/

/* Ways of variable declaration
let a = 23; // let is block scoped
a = 25;
const b = 23; // const is function scoped
// b = 25;
var c = 23;
c = 25;
d = 36; // never declare variable in this manner, this will be stored in global
console.log(d);
*/

/* Basic operators
let num1 = 10;
let num2 = 2;
console.log("Mathematical operators:");
console.log("Addition : " + num1 + " + " + num2 + " = ", num1 + num2);
console.log("Subtraction : " + num1 + " - " + num2 + " = ", num1 - num2);
console.log("Multiplication : " + num1 + " * " + num2 + " = ", num1 * num2);
console.log("Division : " + num1 + " / " + num2 + " = ", num1 / num2);
console.log("Exponential : " + num1 + " ** " + num2 + " = ", num1 ** num2);
console.log("Assignment operators:");
console.log("Increment : " + num1 + "++ = ", num1++);
console.log("Decrement : " + num1 + "-- = ", num1--);
console.log("Increment : " + "++" + num1 + " = ", ++num1);
console.log("Decrement : " + "--" + num1 + " = ", --num1);
console.log(
  "Assignment addition : " + num1 + " += " + num2 + " = ",
  (num1 += num2)
);
console.log(
  "Assignment subtraction : " + num1 + " -= " + num2 + " = ",
  (num1 -= num2)
);
console.log("Conditional operators:");
console.log("Greater than : " + num1 + " > " + num2 + " = ", num1 > num2);
console.log("Less than : " + num1 + " < " + num2 + " = ", num1 < num2);
console.log("Equals to : " + num1 + " == " + num2 + " = ", num1 == num2);
console.log(
  "Greater than or equals to : " + num1 + " >= " + num2 + " = ",
  num1 >= num2
);
console.log(
  "Less than or equals to : " + num1 + " <= " + num2 + " = ",
  num1 <= num2
);
*/

/* Operator precedence
// ref precedence table=>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const now = 2024;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(now - 1991 > now - 2018);
let x, y;
x = y = 25 - 10 + 3;
console.log(x, y);
console.log(ageJonas + ageSarah / 2);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);
*/

/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
Your task is to write some code to help them:
i.Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
ii.Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
iii.Log the value of BMIMark and BMIJohn to the console.
iv.BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

//Solution
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/

/* String and template literals
const firstName = "Amit";
const job = "software developer";
const birthYear = 1997;
const currentYear = 2024;
const amitBio =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  "!";
console.log(amitBio);

const newBio = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(newBio);
console.log(`Just a regular string using template literals...`);
console.log(
  "Just a regular \n multi line string \n using traditional approach..."
);
console.log(`Just a regular 
multi line string 
using template literals...`);
*/

/* if-else statements (one of control structure)
const age = 15;
// const isEligible = age >= 18;
if (age >= 18) {
  console.log(`Amit can apply for driving license 🚗`);
} else {
  console.log(
    `Too young to apply for driving license, wait for another ${
      18 - age
    } years 🙂`
  );
}
const birthYear = 2002;
let century;
if (birthYear <= 2000) century = 20;
else century = 21;
console.log(
  `Your birth year is ${birthYear}, so you are born in ${century} century!`
);
*/

/*
CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
2. Modify the outputs above to use template literals to include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
Note: Don't round the BMI values. Leave them as they are.

// Solution:
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck! 🙂 
if(BMIMark > BMIJohn){
  console.log("Mark's BMI is higher than John's!");
}else{
  console.log("John's BMI is higher than Mark's!");
}
if(BMIMark > BMIJohn){
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}else{
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/
