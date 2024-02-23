'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Creating DOM Elements
const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  containerMovements.innerHTML = '';
  movs.forEach((mov, i) => {
    const transactionType = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${transactionType}">${
      i + 1
    } ${transactionType}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;
    // <div class="movements__date">3 days ago</div>
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Computing Usernames
const createUserNames = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
};
createUserNames(accounts);

// Computing balance
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce(
    (accumulator, mov) => accumulator + mov,
    0
  );
  labelBalance.textContent = account.balance + '€';
};

// Computing summary
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes + '€';

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = Math.abs(out) + '€';

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = interest + '€';
};

const updateUI = currentAccount => {
  // Display movements
  displayMovements(currentAccount.movements);
  // Display balance
  calcDisplayBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
};

// Event handler
let currentAccount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    // Remove cursor from input fields for enter button
    inputLoginPin.blur();
    inputLoginUsername.blur();
    containerApp.style.opacity = 100;
    updateUI(currentAccount);
  }
  // console.log(currentAccount);
});

// Implementing transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    account => account.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount &&
    receiverAccount.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

// Implementing loan functionality
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    // add movement
    currentAccount.movements.push(loanAmount);
    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// Implementing close account
btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    Number(inputClosePin.value) === currentAccount.pin &&
    inputCloseUsername.value === currentAccount.username
  ) {
    // findIndex() & find() introduced in ES6 so they won't work on old browsers
    // using findIndex() to add more conditions
    accounts.splice(
      accounts.findIndex(acc => acc.username === currentAccount.username),
      1
    );
    // using indexOf() for whole object
    // accounts.splice(accounts.indexOf(currentAccount), 1);
    labelWelcome.textContent = 'Log in to get started';
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

// Implementing sort
let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
// Simple Array Methods
let arr = [1, 2, 3, 4, 5];

// SLICE  -> not mututates original array
console.log(
  arr,
  arr.slice(),
  arr.slice(2),
  arr.slice(1, 3),
  arr.slice(-1),
  arr.slice(1, -2),
  [...arr]
);
// slice and spread can be used to make shallow copy for array
let arr2 = arr;
arr2[0] = 0;
console.log(arr, arr2);
arr2 = arr.slice();
// arr2 = [...arr];
arr2[0] = 10;
console.log(arr, arr2);

// SPLICE -> mututates original array
console.log(arr2);
console.log(arr2.splice(-1), arr2);
console.log(arr2);
// splice updates the original array by removing the retured values from array
// here 2nd para is number of elements and not the 2nd index which we have in slice()
console.log(arr2.splice(1, 2), arr2);

// REVERSE -> mututates original array
console.log(arr2);
console.log(arr2.reverse(), arr2);

// CONCAT -> not mututates original array
console.log(arr, arr2, arr.concat(arr2));
console.log(arr, arr2, [...arr, ...arr2]); // concat using spread

// JOIN -> not mututates original array
console.log(arr, arr.join(' => '));
*/

/*
// The new 'at' Method
const arr = [1, 2, 3];
console.log(arr, arr[1], arr.at(1));
// Getting last element of array, 'at' will give value from array
console.log(arr[arr.length - 1], arr.slice(-1)[0], arr.at(-1));
console.log('amit'.at(0), 'amit'.at(-1));
*/

/*
// Looping Arrays: forEach
for (const movement of movements) {
  movement > 0
    ? console.log(`You deposited ${movement}`)
    : console.log(`You withdrew ${Math.abs(movement)}`);
}
console.log('=======Using for each arrow function=======');
movements.forEach(movement => {
  movement > 0
    ? console.log(`You deposited ${movement}`)
    : console.log(`You withdrew ${Math.abs(movement)}`);
});
console.log('=======Using for each normal function=======');
movements.forEach(function (movement) {
  movement > 0
    ? console.log(`You deposited ${movement}`)
    : console.log(`You withdrew ${Math.abs(movement)}`);
});
console.log('=======Index using for of=======');
for (const [index, value] of movements.entries()) {
  value > 0
    ? console.log(`Movement ${index + 1}, you deposited ${value}`)
    : console.log(`Movement ${index + 1}, you withdrew ${Math.abs(value)}`);
}
console.log('=======Index using for each=======');
movements.forEach((value, index, arr) => {
  // break-continue cannot be used in forEach
  value > 0
    ? console.log(`Movement ${index + 1}, you deposited ${value}`, arr)
    : console.log(
        `Movement ${index + 1}, you withdrew ${Math.abs(value)}`,
        arr
      );
});
*/

/*
// forEach With Maps and Sets
// for maps
currencies.forEach((value, key, map) => {
  // console.log(`${index}: ${value}`, map);
  console.log(`${key}: ${value}`);
});
// for sets
const uniqueCurrencies = new Set(['USD', 'INR', 'EUR', 'USD', 'GBP', 'EUR']);
console.log(uniqueCurrencies);
uniqueCurrencies.forEach((value, key, set) => {
  // here key & value both are same for set because it don't consist of any index or key and just to keep callback function signature same for parameters, key is there
  console.log(`${key}: ${value}`, set);
});
*/

/* 
///////////////////////////////////////
// Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

// Solution:
let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];
dogsJulia = [9, 16, 6, 8, 3];
dogsKate = [10, 5, 6, 1, 4];
const checkDogs = function (dogsJulia, dogsKate) {
  // 1. completed
  const dogsJuliaCopy = dogsJulia.slice(1, -2);
  // 2. completed
  const dogsJuliaKate = dogsJuliaCopy.concat(dogsKate);
  // 3. completed
  // console.log(dogsJuliaKate);
  dogsJuliaKate.forEach((dogAge, i) => {
    dogAge < 3
      ? console.log(`Dog number ${i + 1} is still a puppy 🐶`)
      : console.log(
          `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
        );
  });
};
// 4. completed
checkDogs(dogsJulia, dogsKate);
*/

// Data Transformations: map, filter, reduce
// Map -> returns new array containing results after applying logic on original array
// Filter -> returns new array containing only elements which passed test condition
// Reduce -> reduces down all array elements to a single value

/*
// The map method
const newMovements = movements.map(function (mov) {
  return mov + 10;
});
// const newMovements = movements.map(mov => mov + 10);
console.log(movements, newMovements);
// using push
const newMoves = [];
movements.forEach(mov => newMoves.push(mov - 10));
console.log(newMoves);
// const movementsDesc = movements.map(function (mov, i) {
//   return `Movement ${
//     i + 1
//   }, you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
// });
// maps are used for functional programming unlike forEach which loops and not returns data
// using arrow function for single line return statement
const movementsDesc = movements.map(
  (mov, i) =>
    `Movement ${i + 1}, you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDesc);
*/

/*
// The filter method
const deposits = movements.filter(movement => movement > 0);
console.log(movements, deposits);
const withdrawals = movements.filter(movement => movement < 0);
console.log(movements, withdrawals);
*/

/*
// The reduce method
console.log(movements);
// calculate balance
const balance = movements.reduce(function (accumulator, mov, i, arr) {
  console.log(`Iteration ${i}:${accumulator}`);
  return accumulator + mov;
}, 0); // initialized acc to 0 for first iteration
console.log(balance);
// using arrow function
const sum = movements.reduce((accumulator, mov) => accumulator + mov, 100);
console.log(sum);
// calculate maximum
const max = movements.reduce(
  (accumulator, mov) => (accumulator > mov ? accumulator : mov),
  movements.at(0)
);
console.log(max);
*/

/*
//////////////////////////////////////
// Coding Challenge #2 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

// Solution:

const calcAverageHumanAge = ages => {
  // 1. completed
  let dogHumanAges = ages.map(dogAge =>
    dogAge > 2 ? 16 + dogAge * 4 : 2 * dogAge
  );
  console.log(dogHumanAges);
  // 2. completed
  dogHumanAges = dogHumanAges.filter(age => age >= 18);
  console.log(dogHumanAges);
  // 3. completed
  const avgAge = Math.round(
    // dogHumanAges.reduce((acc, age) => acc + age, 0) / dogHumanAges.length
    dogHumanAges.reduce((acc, age, i, arr) => acc + age / arr.length, 0)
  );
  console.log(avgAge);
};
// 4. completed
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

/*
// The magic of chaining methods
const eurToUsd = 1.1;
console.log(movements);
// PIPELINE
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(Math.round(totalDepositUSD));
*/

/* 
//////////////////////////////////////
// Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
// Solution:
const calcAverageHumanAge = ages => {
  const avgAge = ages
    .map(dogAge => (dogAge > 2 ? 16 + dogAge * 4 : 2 * dogAge))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(Math.round(avgAge));
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

/*
// The find method
console.log(movements);
console.log(
  movements.find(mov => mov > 0),
  movements.find(mov => mov < 0),
  movements.find(mov => mov === 200)
);
// find returns only first element from array that satisfies condition
// console.log(...accounts);
console.log(accounts.find(account => account.owner.includes('Jessica')));
*/

/*
// some and every methods
console.log(movements);
// equality
console.log(movements.includes(200));
// some
console.log(movements.some(mov => mov === 0));
console.log(movements.some(mov => mov < 0));
// every
console.log(movements.every(mov => mov === 0));
console.log(account4.movements.every(mov => mov > 0));
// separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
// flat and flatMap methods
// they were introduced in ES 2019
const arr = [[1, 2, 3], [4, 5], 6];
console.log(arr, arr.flat());
const deepArr = [
  [
    [1, 2, 3, 4],
    [5, 6, 7],
  ],
  [8, 9],
  10,
];
// flat takes parameter in order to verify deepness of nested level of array
console.log(deepArr, deepArr.flat(1), deepArr.flat(2));
console.log([[[[11, 12, 13], [[45]], 2], 5], 6].flat(4));
const movementsArray = accounts.map(account => account.movements).flat();
console.log(movementsArray);
const movementsSum = movementsArray.flat().reduce((acc, mov) => acc + mov, 0);
console.log(movementsSum);
// flat method
const overalBalance = accounts
  .map(account => account.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
// flatMap method -> can perform mapping and goes only 1 level deep for flat
const overallBalance = accounts
  .flatMap(account => account.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
*/

/*
// Sorting Arrays
// Strings
const owners = accounts.map(account => account.owner);
const ownersArray = owners.slice();
console.log(owners, ownersArray.sort());
// Numbers
const movementsArray = movements.slice();
console.log(movements, movementsArray.sort());
// for sorting in ascending order
// if a > b then swap and for that return > 0, if a < b then return < 0 without swap else a == b
// movementsArray.sort((a, b) => (a > b ? 1 : -1));
movementsArray.sort((a, b) => a - b); // subtraction will return +ve when a>b, -ve when a<b
console.log(movementsArray);
// sort in descending order
// console.log(movementsArray.sort((a, b) => (a < b ? 1 : -1)));
console.log(movementsArray.sort((a, b) => b - a)); // will return +ve when a<b, -ve when a>b
*/

/*
// More ways of creating and filling arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr, new Array(1, 2, 3, 4));
// Empty arrays + fill method
const x = new Array(8);
console.log(x);
x.fill(1);
console.log(x);
// fill 2 from index 3 to before index 7 i.e. till index 6
x.fill(2, 3, 7);
console.log(x);
// Array.from()
const y = Array.from({ length: 4 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1); // not using value parameter
console.log(z);
// generate array of 100 random dice roll
const a = Array.from({ length: 100 }, () => Math.round(Math.random() * 5 + 1));
console.log(a);

// Array.from on DOM elements
labelBalance.addEventListener('click', e => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  );
  // console.log(movementsUI.map(el => el.textContent.replace('€', '')));
  console.log(movementsUI);
});
// we can also create array from spread operator but we have to perform rest logic separately
const movementsUI2 = Array.from([
  ...document.querySelectorAll('.movements__value'),
]);
console.log(movementsUI2);
*/

/*
// Array methods practice
// 1.
const bankDepositSum = accounts
  .flatMap(account => account.movements)
  .reduce((acc, cur) => (cur > 0 ? acc + cur : acc), 0);
console.log(bankDepositSum);

// 2.
const numDeposit1000 = accounts
  .flatMap(account => account.movements)
  // .reduce((acc, cur) => (cur >= 1000 ? acc++ : acc), 0);
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
console.log(numDeposit1000);

// 3.
const sums = accounts
  .flatMap(account => account.movements)
  .reduce(
    (sums, val) => {
      // sums[val > 0 ? 'deposits' : 'withdrawals'] += val;
      sums[val > 0 ? 'deposits' : 'withdrawals'] += val;
      // val > 0 ? (sums.deposits += val) : (sums.withdrawals += val);
      return sums;
    },
    {
      deposits: 0,
      withdrawals: 0,
    }
  );
console.log(sums);
const { deposits, withdrawals } = sums;
console.log(deposits, withdrawals);

// 4.
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'in', 'or', 'on', 'and', 'the', 'but', 'with'];
  const capitalize = word => word[0].toUpperCase() + word.slice(1);
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
  // console.log(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

/* 
//////////////////////////////////////
// Coding Challenge #4

Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀

// Solution

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
dogs.forEach(
  dog =>
    dog.owners.includes('Sarah') &&
    console.log(
      `Sarah's dog is eating ${
        dog.curFood > dog.recommendedFood
          ? 'too much'
          : dog.curFood < dog.recommendedFood
          ? 'too little'
          : 'in range'
      }`
    )
);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
  .flatMap(dog => {
    if (dog.curFood > dog.recommendedFood) return dog.owners;
  })
  .filter(owner => owner);
const ownersEatTooLittle = dogs
  .flatMap(dog => {
    if (dog.curFood < dog.recommendedFood) return dog.owners;
  })
  .filter(owner => owner);
console.log(ownersEatTooMuch, ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
console.log(dogs.filter(checkEatingOkay));

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const dogsArray = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsArray, dogs);
*/
