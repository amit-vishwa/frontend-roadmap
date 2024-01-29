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

/* Type conversion and coercion
console.log("Type conversion:");
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Amit"));
console.log(typeof NaN);
console.log(String(13), 13);
console.log("\nType coercion:");
console.log("I am " + 27 + " years old"); // type coercion (automatically done here)
console.log("I am " + String(27) + " years old"); // type conversion (done manually here)
console.log("23" - 4 - "20" + 10, "23" + 4 + "20" + 10);
console.log("23" * "10", "23" / "10");
let n = "1" + 1;
n = n - 2;
console.log(n);
console.log("23" - 4 - "20" + 123 + "10");
*/

/* Truthy & Falsy Values
// 5 falsy values when converted to boolean => 0, '', null, undefined, NaN
console.log(Boolean(0), Boolean(1)); // manually converted or type conversion
console.log(Boolean(null), Boolean({}));
console.log(Boolean(undefined), Boolean([]));
console.log(Boolean(NaN), Boolean(134));
console.log(Boolean(""), Boolean("Amit"));
const money = 9;
if (money) console.log("Do saving!");
else console.log("Get a job!");
let height;
if (height) console.log("Height is defined!");
else console.log("Height is undefined!");
*/

/* Equality operators
// Loose equality operator => ==
// Strict equality operator => ===
// Always use strict equality operator for good practice
console.log(
  "Loose equality operator ('18' == 18) : " + ("18" == 18),
  "\nStrict equality operator ('18' === 18) : " + ("18" === 18)
);
const age = Number(prompt("Enter your age!"));
console.log(age, typeof age);
if (age == 18) console.log("You just became an adult!");
if (age === 18) console.log("You just became an adult!");
if (age != 18) console.log("You just not became an adult!");
if (age !== 18) console.log("You just not became an adult!");
*/

/* Boolean Logic & Logical Operators
const hasDriversLicense = true;
const hasGoodVision = false;
console.log(
  "Has drivers license & good vision : ",
  hasDriversLicense && hasGoodVision
);
console.log(
  "Has drivers license or good vision : ",
  hasDriversLicense || hasGoodVision
);
console.log("Not has drivers license : ", !hasDriversLicense);
console.log("Not has good vision : ", !hasGoodVision);
console.log(
  "Not has drivers license & good vision : ",
  !(hasDriversLicense && hasGoodVision)
);
console.log(
  "Not has drivers license or good vision : ",
  !(hasDriversLicense || hasGoodVision)
);
*/

/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
2. Compare the team's average scores to determine the winner of the competition, and print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.
TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// Solution:
const scoreDolphins = (96+108+89)/3;
const scoreKoalas = (88+91+110)/3;
if(scoreDolphins>scoreKoalas)
console.log("Dolphins win the trophy");
else if(scoreKoalas>scoreDolphins)
console.log("Koalas win the trophy");
else
console.log("Both win the trophy");
*/

/* The switch statement
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}
if (day === "Monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code examples");
} else if (day === "Friday") {
  console.log("Record videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}
*/

/* Statements & Expressions
i.Statements are some block of codes which don't produce any value, 
they just perform some actions.
Eg: if(10>20){ console.log("10 is greater than 20");}

ii.Expressions are something that produces values and template literals
can have expressions only and not any statements.
Eg: true, 10, "Name is Ching!", etc.
*/

/* The conditional (ternary) operator:
const age = 19;
// age >= 18
//   ? console.log("You can drink wine!")
//   : console.log("You cannot drink wine!");
const drink = age >= 18 ? "Wine" : "Water";
console.log("You can drink " + drink);
let drink2;
if (age >= 18) drink2 = "Wine";
else drink2 = "Water";
console.log("You can drink " + drink2);
// ternary operator can be used with template literal and thus statement can be 
// converted to expression as this will produce some value 
console.log(`I would like to drink ${age >= 18 ? "Wine" : "Water"}`);
*/

/*
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
i.Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).
ii.Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: The bill was 275, the tip was 41.25, and the total value 316.25.
Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
TEST DATA: Test with different bill values: 275, 40, and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// Solution:
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
