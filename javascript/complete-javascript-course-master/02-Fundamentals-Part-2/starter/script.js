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

/* Introduction to objects
const amitArray = [
  "Amit",
  "Vishwakarma",
  2024 - 1997,
  "Software developer",
  ["Raj", "Raja", "Rajan"],
];

const amitObject = {
  firstName: "Amit",
  lastName: "Vishwakarma",
  age: 2024 - 1997,
  profession: "Software developer",
  friends: ["Raj", "Raja", "Rajan"],
};

console.log(amitArray, amitObject);
*/

/* Dot vs. Bracket Notation
const amitObject = {
  firstName: "Amit",
  lastName: "Vishwakarma",
  age: 2024 - 1997,
  profession: "Software developer",
  friends: ["Raj", "Raja", "Rajan"],
};
const age = "age";
console.log(amitObject.firstName, amitObject["lastName"], amitObject[age]);
const nameKey = "Name";
const firstNameKey = "firstName";
console.log(
  amitObject.firstNameKey,
  amitObject["first" + nameKey],
  amitObject["last" + nameKey]
);

const property = prompt("What you want to know about Amit?");
console.log(
  property,
  amitObject[property] ? amitObject[property] : "Select another property!"
);
amitObject.location = "Mumbai";
amitObject["native"] = "Prayagraj";
console.log(amitObject);

// Challenge -> log a sentence without hardcoding 'Amit has 3 friends and his bestfriend is Raja'
console.log(
  `${amitObject.firstName} has ${
    amitObject.friends.length
  } friends and his bestfriend is ${
    amitObject.friends[amitObject.friends.indexOf("Raja")]
  }`
);
*/

/* Object Methods
const amit = {
  firstName: "Amit",
  lastName: "Vishwakarma",
  birthYear: 1997,
  profession: "Software developer",
  friends: ["Raj", "Raja", "Rajan"],
  hasDriverLicense: true,
  calculateAge: function () {
    // console.log(this);
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  isEligibleToDrive: (isAdult) => isAdult,
  getSummary: function () {
    return `${this.firstName} is a ${this.calculateAge()}-year old ${
      this["profession"]
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};
// console.log(
//   // amit,
//   amit.calculateAge(),
//   amit["isEligibleToDrive"](amit.age > 18)
// );
const hasA = (hasDriverLicense) => (hasDriverLicense ? "a" : "no");
// Challenge: Create string 'Amit is a 27-year old Software developer, and he has a/no driver's license'
// console.log(
//   `${amit.firstName} is a ${amit.age}-year old ${
//     amit["profession"]
//   }, and he has ${hasA(amit.hasDriverLicense)} driver's license`
// );
console.log(amit.getSummary());
*/

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:
i.For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
ii.Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.
iii.Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// Solution:
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function(){
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
  }
}
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
  }
}
mark.calcBMI();
john.calcBMI();
if(mark.bmi>john.bmi)
console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
else
console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
*/

/* Iteration: The For Loop
// console.log(`Lifting weights repetition 1!`);
// console.log(`Lifting weights repetition 2!`);
// console.log(`Lifting weights repetition 3!`);
// console.log(`Lifting weights repetition 4!`);
// console.log(`Lifting weights repetition 5!`);
for (let rep = 1; rep <= 5; rep++)
  console.log(`Lifting weights repetition ${rep}!`);
*/

/* Looping Arrays, Breaking & Continuing
const amitArray = [
  "Amit",
  "Vishwakarma",
  2024 - 1997,
  "Software developer",
  ["Raj", "Raja", "Rajan"],
  true,
];
// const typeOfAmitArrayItems = new Array();
// for (let i = 0; i < amitArray.length; i++) {
//   // typeOfAmitArrayItems[i] = typeof amitArray[i];
//   typeOfAmitArrayItems.push(typeof amitArray[i]);
//   // typeOfAmitArrayItems.unshift(typeof amitArray[i]);
//   console.log(typeof amitArray[i], amitArray[i]);
// }
// console.log(typeOfAmitArrayItems);

for (let i = 0; i < amitArray.length; i++) {
  // logging only strings
  // if (typeof amitArray[i] !== "string") continue;
  // if (typeof amitArray[i] !== typeof amitArray[0]) continue;

  // breaking if found number type
  if (typeof amitArray[i] === "boolean") break;
  console.log(typeof amitArray[i], amitArray[i]);
}
*/

/* Looping Backwards and Loops in Loops
const amitArray = [
  "Amit",
  "Vishwakarma",
  2024 - 1997,
  "Software developer",
  ["Raj", "Raja", "Rajan"],
  true,
];
// looping backwards
for (let index = amitArray.length - 1; index >= 0; index--) {
  console.log(index, amitArray[index]);
}
// nested for loop
for (let i = 1; i <= 5; i++) {
  console.log("Exercise " + i);
  for (let j = 1; j < 6; j++) {
    console.log("Exercise " + i + ": Doing repetition " + j);
  }
}
*/

/* The While Loop
// for (let rep = 1; rep <= 5; rep++)
//   console.log(`Lifting weights repetition ${rep}!`);
let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}!`);
//   rep++;
// }
let dice = Math.trunc(Math.random() * 6) + 1;

// if we don't know the length of array or list the while loop is best to use
while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  // if below line removed then loop enters in infinite mode if dice is not 6
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Got 6, ending the loop now!");
}
*/

/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
i.Create an array called bills containing all 10 test bill values.
ii.Create empty arrays for the tips and the totals (tips and totals)
iii.Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:
i.Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:
ii.First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.
iii.To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
iv.Call the function with the totals array.

// Solution:
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = new Array();

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i]+tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function(arr){
    let sum = 0;
    // arr.forEach((i)=>{
    //     sum += i; 
    // });
    // using below simple for loop since for-each loop not taught yet
    for(let i = 0; i < arr.length; i++)
    sum += arr[i];
    return sum/arr.length;
}

console.log(calcAverage(totals));
*/
