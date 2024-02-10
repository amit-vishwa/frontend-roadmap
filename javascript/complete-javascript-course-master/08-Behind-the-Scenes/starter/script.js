'use strict';

/*
// Scoping in practice

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (age === 27) {
      var millenial = true;
      // Creating new variable with same name as outer scope's variable
      const firstName = 'Raja';
      // Re-assigning the new value to outer variable
      output = 'New output';
      const str = `${firstName} you are millenial`;
      console.log(str);
      //   const add = (a, b) => a + b;
      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
    // function statement can be logged outside block in non-strict mode
    // console.log(add(2, 3));
    // console.log(str);
    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Amit';
calcAge(1997);

// printAge();
// console.log(age);
*/

/*
Hoisting and Temporal Dead Zone (TDZ) in practice

// Hoisting with variables
console.log(a);
// console.log(b);
// console.log(c);
var a = 'a';
let b = true;
const c = 0;

// variables declared using var are stored in window object
console.log(a === window.a, b === window.b, c === window.c);

// Hoisting with functions
console.log(funcDec(2, 3));
// console.log(funcExpr, funcExpr(2, 3));
// console.log(funcExpr(2, 3));
// console.log(funcArrow(2, 3));

function funcDec(x, y) {
  return x + y;
}

var funcExpr = function (x, y) {
  return x + y;
};

const funcArrow = (x, y) => {
  return x + y;
};

// Example
var num = 10;
if (!num) callDel();
function callDel() {
  console.log('Deleting products...');
} 
*/

/*
// The this Keyword in practice
console.log(this);

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  // 'this' is undefined, in non-strict mode it will be global window object
  console.log(age, this);
}
calcAge(1997);

const calcAgeArrow = birthYear => {
  const age = 2024 - birthYear;
  // 'this' is of parent scope, which is global window object here
  console.log(age, this);
};
calcAgeArrow(1997);

const amit = {
  year: 1997,
  calcAge: function () {
    // here 'this' is the object which is calling the method
    console.log(this);
    // console.log(this.year);
  },
};
amit.calcAge();

const raja = { year: 2000 };
raja.calcAge = amit.calcAge;
raja.calcAge();

const f = amit.calcAge;
// since this is regulard function so 'this' will be undefined as it don't know who is calling it unlike arrow function where it will fetch parent or lexical (i.e.functions in same scope) scope object
f();
*/

/*
// Regular vs Arrow functions
// always avoid using var as a good practice
var firstName = 'Raja';
const amit = {
  firstName: 'Amit',
  year: 1997,
  calcAge: function () {
    // here 'this' is the object which is calling the method
    // console.log(this);

    // Solution 1:
    const self = this;
    function isMillenial() {
      // in regular function 'this' is always undefined
      //   console.log(this.firstName + ' you are millenial');
      console.log(self);
      console.log(self.firstName + ' you are millenial');
    }
    

    // Solution 2:
    const isMillenial = () => {
      // in arrow function 'this' is always parent scope object
      console.log(this.firstName + ' you are millenial');
    };

    isMillenial();
  },
  // 'this' keyword here will be using window object because it parent scope is global scope
  // always avoid using arrow function as a good practice
  greet: () => console.log(this, `Hi ${this.firstName}, how are you?`),
};
amit.calcAge();
// amit.greet();

// The 'arguments' keyword
function fun1(a, b) {
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  console.log(arguments, sum);
}
const fun2 = function (a, b) {
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  console.log(arguments, sum);
};
const fun3 = (a, b) => {
  // arguments don't work in arrow functions
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  console.log(arguments, sum);
};
fun1(1, 23, 4, 5);
fun2();
// fun3(1, 2);
// Arguments keyword is often not used in modern javascript
*/

/*
 Primitive data types vs object data types
// primitive types
let age = 30;
const newAge = age;
age = 40;
console.log(age, newAge);

// reference types
const amit = { name: 'Amit', age: 27 };
const raja = amit;
raja.age = 25;
console.log(amit, raja);

// Object.assign() will only make shallow copy i.e. copies properties at first level
const rajan = { name: 'Rajan', age: 27, family: ['One', 'Two'] };
const raj = Object.assign({}, rajan);
raj.age = 30;
raj.name = 'Raj';
raj.family.push('Three');
console.log(rajan, raj);
// We can make deep clone by using Lodash library
*/
