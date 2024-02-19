'use strict';

/*
// Default parameters
const bookings = [];
const createBooking = function (
  flightName,
  passengersCount = 1,
  ticketPrice = 500 * passengersCount
) {
  //   passengersCount = passengersCount || 10;
  //   ticketPrice = ticketPrice || 1000;
  const journey = {
    flightName,
    passengersCount,
    ticketPrice,
  };
  bookings.push(journey);
};
createBooking('A317');
createBooking('A317', 200);
createBooking('A317', 300, 2000);
// undefined is used for skipping defining a parameter
createBooking('A317', undefined, 200);
console.log(bookings);
*/

/*
// How Passing Arguments Works: Value vs Reference
const flight = 'A370';
const amit = { name: 'Amit Vishwakarma', passportNum: 1234325 };
const checkIn = function (flight, passenger) {
  flight = 'A270';
  passenger.name = 'Mr.' + passenger.name;
  passenger.passportNum === 1234325
    ? console.log('Checked In!')
    : console.log('Wrong passport');
};
checkIn(flight, amit);
console.log(flight, amit);
// Same as above
const flightNum = flight; // makes a copy and don't affect original value
const passenger = amit; // fetches the actual object value and affects that
passenger.name = 'Raja';
console.log(passenger, amit);
// pass by value -> js supports this as we can pass values only as function arguments
// pass by reference -> js don't supports this as we cannot pass reference as function arguments
// (eg: Passing a reference of flight so that actual value is affected by functional logic)
*/

/*
// First-Class And Higher-Order Functions
// A.First-Class Functions:
// i.Store functions in variable or properties
// ii.Pass functions as arguments to other functions
// iii.Return functions from a function
// iv.Call methods on function 
// B.Higher-Order Functions:
// i.Functions that recieves another functions in arguments
// ii.Functions that returns new functions. 
*/

/*
// Functions Accepting Callback Functions
// function stored as value
const oneWord = str => str.replaceAll(' ', '').toLowerCase();
// str.replace(/ /g, '').toLowerCase(); //this was used before replaceAll() came
const upperFirstWord = str => {
  let [first, ...rest] = str.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
};
// Higher-order function
const transformer = function (str, fn) {
  console.log('Original string: ' + str);
  console.log('Transformed string: ' + fn(str));
  console.log('Transformed by function: ' + fn.name);
};
transformer('JavaScript is fun!', upperFirstWord);
transformer('JavaScript is fun!', oneWord);

const high5 = () => console.log('👋');
document.body.addEventListener('click', high5); // does same as above
*/

/*
// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetTo = greet('Hello'); // greet() will return a function
greetTo('Amit'); // we can pass argument to returned function and call that
greet('Hey')('Raja');

const greetMessage = greeting => name => console.log(`${greeting} ${name}`);
greetMessage('Hi')('Rajan');
*/

/*
// The call, apply and bind Methods
const airIndia = {
  airline: 'Air India',
  iataCode: 'AI',
  bookings: [],
  //   book:function(){}
  book(name, flightNum) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
// airIndia.book('Amit', '370');
// console.log(...airIndia.bookings);

const kingfisher = {
  airline: 'Kingfisher',
  iataCode: 'KF',
  bookings: [],
};
const bookTicket = airIndia.book;
// below call fails, the function is copy of original function and now 'this' is unknown here
// bookTicket('Amit', 420);
// to avoid the failure or point 'this' to an object, use call(), apply() and bind() methods
// 1. call method takes first argument as object and rest as function parameters
bookTicket.call(kingfisher, 'Raja', 420);
console.log(...kingfisher.bookings);
bookTicket.call(airIndia, 'Raja', 420);
console.log(...airIndia.bookings);

// 2. apply method takes first argument as object and rest as function parameters in array form
bookTicket.apply(kingfisher, ['Raja', 420]);
console.log(...kingfisher.bookings);
bookTicket.apply(airIndia, ['Raja', 420]);
console.log(...airIndia.bookings);
// we can use call() using spread operator for array parameter as apply() is not used much now
bookTicket.call(airIndia, ...['Raja', 420]);

// 3. bind method
const vistara = {
  airline: 'Vistara',
  iataCode: 'VI',
  bookings: [],
};
const bookVistara = bookTicket.bind(vistara);
bookVistara('Raj', 789);
const bookVistaraRaju = bookTicket.bind(vistara, 'Raju');
bookVistaraRaju(234);
const bookVistaraAbyss124 = bookTicket.bind(vistara, 'Abyss', 124);
bookVistaraAbyss124();
// with event listeners
airIndia.planes = 500;
airIndia.buyPlane = function () {
  this.planes++;
  console.log(this, this.planes);
};
airIndia.buyPlane();
document
  .querySelector('.buy')
  //   .addEventListener('click', airIndia.buyPlane.call(airIndia)); // call directly calls function
  .addEventListener('click', airIndia.buyPlane.bind(airIndia)); // bind will return function

// partial application
const addTax = (tax, value) => value + value * tax;
console.log(addTax(0.1, 100));
// pass first parameter for obj reference, even though it's a simple function
const addTax20 = addTax.bind(null, 0.2);
console.log(addTax20(300));
// above solution can be implemented using function returning function
const addTaxes = function (tax) {
  return function (value) {
    console.log(value + value * tax);
  };
};
addTaxes(0.1)(400);
*/

/* 
///////////////////////////////////////
// Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀

// Solution :

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // this generates [0,0,0,0], more in next section
  answers: new Array(4).fill(0),
};

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
poll.registerNewAnswer = function () {
  const option = Number(
    // below prompt is from tutorial solution
    prompt(
      ` ${this.question}\n ${this.options.join('\n')}\n(Write option number)`
    )
    // prompt(` What is your favourite programming language?
    // 0: JavaScript
    // 1: Python
    // 2: Rust
    // 3: C++
    // (Write option number)`)
  );
  option >= 0 && option < 4 && this.answers[option]++;
  this.displayResults('string');
  this.displayResults();
};

// 2. Call this method whenever the user clicks the "Answer poll" button.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
poll.displayResults = function (type = 'array') {
  // added default arg from solution
  type === 'string'
    ? console.log(`Poll results are ${[...this.answers]}`)
    : console.log(this.answers);
};

// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// Calling in line 237, 238

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
// refered tutorial answer for below calls
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/

/*
// Immediately Invoked Function Expressions
const runOnce = () => console.log('runOnce is called');
runOnce();
// IIFE
(() => console.log('function without declaration is called'))();
(function () {
  console.log('this will also never run again');
})();
*/

/*
// Closures
const secureBooking = function () {
  let passengersCount = 0;
  const airline = 'Air India';
  return function () {
    passengersCount++;
    console.log(`${airline} has ${passengersCount} passengers`);
  };
};
const booker = secureBooking();
// this will persist the passengersCount variable in global context and call return function
booker();
booker();
booker();
// closures are internal property and cannot be accessed from code
// console.dir(booker);

// Example 1
let f;
const g = () => {
  const a = 23;
  f = () => console.log(a * 3);
};
g();
f();
const h = () => {
  const b = 43;
  f = () => console.log(b * 2);
};
h();
// closure re-assigned
f();

// Example 2
const boardPassengers = (passengers, wait) => {
  // closure will use this 'group' first, even though it is there in global scope
  //   const group = passengers / 3;
  // setTimeout will act as closure as after some time also it will have access to vars
  setTimeout(() => {
    console.log(`We are boarding all ${passengers} passengers now`);
    console.log(`There are 3 groups with ${group} passengers each`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
// closure will have function priority first, when var not found in func then it will search globally
const group = 10;
boardPassengers(60, 2);
*/

/* 
///////////////////////////////////////
// Coding Challenge #2
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀

// Solution:
// const headers = document.querySelector('h1');
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  // function in listener is created here and thus click will act as closure here
  document.body.addEventListener('click', () => (header.style.color = 'blue'));
})();
*/
