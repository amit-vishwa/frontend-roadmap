'use strict';

/*
// Constructor functions and new operator
const Person = function (firstName, birthYear) {
  //   console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   console.log(this);
  // Never do this, as it will create new function copies for each object creation
  // this.calcAge = function () {
  //   console.log(2024 - birthYear);
  // };
};
// Person('Amit', 1997); => this will give undefined
// 1.New object ({}) is created
// 2.Function is called, now 'this' becomes empty object '{}'
// 3.Object {} is linked to prototype
// 4.Function automatically returns object
const amit = new Person('Amit', 1997);
const raja = new Person('Raja', 1998);
console.log(amit, raja);
const raj = 'Raj';
console.log(amit instanceof Person, raj instanceof Person);

// Prototypes
console.log(Person.prototype, Person.prototype.calcAge);
// creating calcAge() in prototype of Person constructor
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
// objects amit & raja are able to call calcAge() because of prototypal inheritance/delegation
amit.calcAge();
raja.calcAge();
console.log(
  amit.__proto__,
  raja.__proto__,
  Person.prototype,
  raja.__proto__ === Person.prototype,
  Person.prototype.isPrototypeOf(raja),
  Person.prototype.isPrototypeOf(Person) // prototype is of objects linked and not actual constructor
);
Person.prototype.species = 'Homo sapiens';
console.log(amit, amit.species);
console.log(
  amit.hasOwnProperty('birthYear'),
  Person.hasOwnProperty('birthYear'), // it is constructor hence it is not its property
  amit.hasOwnProperty('species') // this is inherited property
);
console.log(new Person());
// Prototypal inheritance
// When a property or method cannot be found inside an object then it checks prototype of constructor, then if there also it failed to find then checks prototype of Object which is parent of constructor
// linkedObject->Constructor.prototype->Object.prototype i.e. amit->Person.prototype->Object.prototype

// Prototypal inheritance on built-in objects
console.log(amit);
console.log(amit.__proto__); // Person.prototype: linked constructor's prototype
console.log(amit.__proto__.__proto__); // Object.prototype: top order of prototype chain
console.log(amit.__proto__.__proto__.__proto__); // this will be null
console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);
const arr = [1, 2, 3, 4, 5, 5, 3]; // [] === new Array()
console.log(arr, arr.__proto__, Array.prototype === arr.__proto__);
console.log(
  arr.__proto__,
  arr.__proto__.__proto__,
  arr.__proto__.__proto__.__proto__
);
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(Array.prototype.unique);
console.log(arr.unique(), arr.sort());
const h1 = document.querySelector('h1');
console.dir(h1);
// Prototypal inheritance on h1 tag
// h1->HTMLHeadingElement->HTMLElement->Element->Node->EventTarget->Object->null
console.dir(x => x + 1);
// function->Prototype->Object->null
*/

/* 
///////////////////////////////////////
// Coding Challenge #1
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

// Solution:

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  // this.speed = Number(speed);
};
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.make + ' going at ' + this.speed + ' km/h');
};
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.make + ' going at ' + this.speed + ' km/h');
};
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw, mercedes);
bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake();
bmw.accelerate();
mercedes.accelerate();
bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake();
console.log(bmw, mercedes);
*/

/*
// ES6 classes
const PersonCl = class {}; // this is class expression
// this is class declaration
class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // methods will be added prototype property
  calcAge() {
    return 2024 - this.birthYear;
  }
  // greet() {
  //   console.log('Hey ' + this.firstName);
  // }
}
const raj = new PersonClass('Raj', 1995);
console.log(raj, raj.calcAge());
console.log(raj.__proto__, raj.__proto__ === PersonClass.prototype);
PersonClass.prototype.greet = function () {
  // this is similar to greet() in class
  console.log('Hey ' + this.firstName);
};
raj.greet();
// 1. Classes are NOT hoisted, they cannot be used before declaration
// 2. Classes are first-class citizens, they can be passed in function and returned from them
// 3. Classes are executed in strict mode by default, even if that mode is not active
*/

/*
// Getters and setters
const account = {
  owner: 'Amit',
  movements: [200, 530, 120, 100],
  // get is used to fetch property after performing some logic
  get latest() {
    return this.movements.slice(-1).pop();
  },
  // set is used to set property value by performing some logic
  set latest(mov) {
    return this.movements.push(mov);
  },
};
console.log(account);
// setting property value after passing argument of fetched property value
account.latest = account.latest;
console.log(account);
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // methods will be added prototype property
  calcAge() {
    return 2024 - this.birthYear;
  }
  greet() {
    console.log('Hey ' + this.firstName);
  }
  // created new property 'age'
  get age() {
    return 2024 - this.birthYear;
  }
  // created and set new property '_fullName' since 'fullName' is already set in constructor
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(name + ' is not a full name');
  }
  get fullName() {
    return this._fullName;
  }
}
const raj = new PersonCl('Raj Kumar', 1995);
console.log(raj, raj.fullName);
*/

/*
// Static methods
// methods cannot be used as normal function as they are attached to constuctor and are constructor functions
console.log(Array.from(document.querySelectorAll('h1')));
console.log(Number.parseInt(13.45));
console.dir(Number);
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.greet = function () {
  console.log('Hey ' + this.firstName);
};
Person.hey = function (firstName) {
  console.log('Hey ' + firstName);
};
console.dir(Person);
const amit = new Person('Amit', 1997);
Person.hey(amit.firstName);
amit.greet();
// amit.hey(amit.firstName); // won't work because hey() is only for constructor function
// Person.greet(); // greet() is only for linked objects and not constructor
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods will be added prototype property
  calcAge() {
    return 2024 - this.birthYear;
  }
  greet() {
    console.log('Hey ' + this.firstName);
  }
  // created new property 'age'
  get age() {
    return 2024 - this.birthYear;
  }
  // created and set new property '_fullName' since 'fullName' is already set in constructor
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(name + ' is not a full name');
  }
  get fullName() {
    return this._fullName;
  }
  // static method can be accessed by class and not any object
  static hey(name) {
    console.log('Hey ' + name);
  }
}
console.log(PersonCl);
PersonCl.hey('Raja');
*/

/*
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  // manually initializing properties, this is different from constructor
  init(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  },
};
// PersonProto is now prototype of amit
const amit = Object.create(PersonProto);
console.log(amit, PersonProto);
amit.birthYear = 1997;
amit.calcAge();
const raja = Object.create(PersonProto);
raja.init('Raja', 1998);
raja.calcAge();
console.log(raja);
*/

/* 
///////////////////////////////////////
// Coding Challenge #2
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀

// Solution:

// 1. Re-create challenge 1, but this time using an ES6 class;
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.make + ' going at ' + this.speed + ' km/h');
  }
  brake() {
    this.speed -= 5;
    console.log(this.make + ' going at ' + this.speed + ' km/h');
  }
  // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
  get speedUS() {
    return this.speed / 1.6;
  }
  // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
const ford = new Car('Ford', 120);
console.log(ford);
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = ford.speedUS; // setting speed from value fetched
// ford.speedUS = 50;
console.log(ford);
*/

/*
// Inheritance between classes: Constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  // new Person(firstName, birthYear);// this won't give error but won't set values
  Person.call(this, firstName, birthYear); // calling Person class
  this.course = course;
};
// Linking prototypes
// Student.prototype = Person.prototype; // this will make both prototypes same, bad practice
Student.prototype = Object.create(Person.prototype);
// above Student object will have now Person's prototype as well along with its prototype
Student.prototype.introduce = function () {
  console.log(`I am ${this.firstName} and I study ${this.course}`);
};
const amit = new Student('Amit', 1997, 'MCA');
console.log(Person, Student);
console.log(
  amit.__proto__ === Student.prototype,
  Person.prototype === Student.prototype,
  Person.prototype,
  Student.prototype
);
console.log(amit);
amit.introduce();
// amit.calcAge();
// Prototype chain would look like below
// amit.prototype=Student & Student.prototype=Person & Person.prototype=Object & Object.prototype=null
console.log(
  amit.__proto__,
  amit.__proto__.__proto__,
  amit.__proto__.__proto__.__proto__,
  amit.__proto__.__proto__.__proto__.__proto__
);
console.dir(Student.prototype.constructor);
// it should point back to Student and not Person when we want child constructor for some purpose
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
console.log(
  amit instanceof Student,
  amit instanceof Person, // this will be false if we remove Object.create(Person.prototype)
  amit instanceof Object
);
console.log(
  amit.__proto__,
  amit.__proto__.__proto__,
  amit.__proto__.__proto__.__proto__,
  amit.__proto__.__proto__.__proto__.__proto__
);
*/

/* 
///////////////////////////////////////
// Coding Challenge #3
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉1

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

// Solution:

// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.make + ' going at ' + this.speed + ' km/h');
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.make + ' going at ' + this.speed + ' km/h');
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    this.make +
      ' going at ' +
      this.speed +
      ' km/h, with a charge of ' +
      this.charge +
      '%'
  );
};

// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉1
const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(25);
console.log(tesla);
*/

/*
// Inheritance between classes: ES6 class
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods will be added prototype property
  calcAge() {
    return 2024 - this.birthYear;
  }
  greet() {
    console.log('Hey ' + this.firstName);
  }
  // created new property 'age'
  get age() {
    return 2024 - this.birthYear;
  }
  // created and set new property '_fullName' since 'fullName' is already set in constructor
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(name + ' is not a full name');
  }
  get fullName() {
    return this._fullName;
  }
  // static method can be accessed by class and not any object
  static hey(name) {
    console.log('Hey ' + name);
  }
}
Person.hey('Raja');
class Student extends Person {
  constructor(fullName, birthYear, course) {
    // super() call must happen first to access 'this'
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`I am ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log('New function from Student class');
  }
}
const amit = new Student('Amit V', 1997, 'MCA');
console.log(amit);
amit.introduce();
amit.calcAge();
*/

/*
// Inheritance between classes: Object.create()
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`I am ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
console.log(steven, StudentProto, jay);
jay.init('Jay', 1998, 'CS');
console.log(jay);
jay.introduce();
jay.calcAge();
*/

/*
// Another class example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property have '_' as prefix
    this._movements = [];
    this._pin = pin;
    this.locale = navigator.language;
    console.log('Thanks for opening an account!');
  }
  // public interface
  getMovements() {
    console.log(this._movements);
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Your loan is approved!');
    }
  }
}
const acc1 = new Account('Amit', 'INR', 1234);
// acc1.movements.push(100);
// acc1.movements.push(-100);
// acc1._movements.push(100);
// acc1._movements.push(-100);
acc1.deposit(100);
acc1.withdraw(100);
acc1.requestLoan(1000);
acc1.getMovements();
// below should not be accessed as they are protected
// acc1._approveLoan(1000);
// acc1._pin;

// Encapsulation: Protected properties and methods
// Protected properties and methods have '_' as prefix
*/

/*
// Encapsulation: Private class fields and methods
// There are total 8 fields and methods, lets focus on below 4, other 4 are static version of below
// Public fields, Private fields, Public methods and Private methods
class Account {
  // 1.Public fields (available directly on instances and not on prototypes)
  locale = navigator.language;
  // 2.Private fields (available directly on instances and not on prototypes)
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property have '_' as prefix
    // this._movements = [];
    this.#pin = pin;
    // this.locale = navigator.language;
    console.log('Thanks for opening an account!');
  }
  // 3.Public methods
  getMovements() {
    console.log(this.#movements);
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }
  // 4.Private methods
  // #approveLoan(val) {
  //   return true;
  // }
  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Your loan is approved!');
    }
  }
  static helper() {
    console.log('Static public method called!');
  }
}
const acc1 = new Account('Amit', 'INR', 1234);
// below private fields and methods won't be accessible now
// acc1.#movements;
// acc1.#pin
// acc1.#approveLoan() // this will be shown in separate section as private fields
acc1.getMovements();
acc1.requestLoan(1000);
acc1._approveLoan(100); // this protected method is accessible
// acc1.helper(); // object cannot access static fields and methods
Account.helper();
*/

/*
// Chaining methods
class Account {
  locale = navigator.language;
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }
  getMovements() {
    console.log(this.#movements);
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Your loan is approved!');
    }
    return this;
  }
}
const acc1 = new Account('Amit', 'INR', 1234);
// below chaining method call works when we get object or 'this' in return
acc1.deposit(123).withdraw(123).requestLoan(1000).withdraw(500);
acc1.getMovements();
*/

/* 
///////////////////////////////////////
// Coding Challenge #4
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// Solution:

// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.make + ' going at ' + this.speed + ' km/h');
  }
  brake() {
    this.speed -= 5;
    console.log(this.make + ' going at ' + this.speed + ' km/h');
    return this; // 3. Chaining implemented
  }
}
class EVCl extends CarCl {
  // 2. Make the 'charge' property private;
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      this.make +
        ' going at ' +
        this.speed +
        ' km/h, with a charge of ' +
        this.#charge +
        '%'
    );
    return this; // 3. Chaining implemented
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this; // 3. Chaining implemented
  }
}

// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().chargeBattery(50).brake();
console.log(rivian);
