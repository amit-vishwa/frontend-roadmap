'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2024-02-17T12:01:20.894Z',
    '2024-02-20T18:49:59.371Z',
    '2024-02-23T13:15:33.035Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

// created new function to format movement dates
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
  //   .toString()
  //   .padStart(2, '0')}/${date.getFullYear()}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

// created function to format currency
const formatCurrency = (locale, currency, mov) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(mov);

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCurrency(acc.locale, acc.currency, mov);
    //  new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(mov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <!--<div class="movements__value">${mov.toFixed(2)}€</div>-->
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // const formattedMov = formatCurrency(acc.locale, acc.currency, acc.balance);
  // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  labelBalance.textContent = formatCurrency(
    acc.locale,
    acc.currency,
    acc.balance
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  labelSumIn.textContent = formatCurrency(acc.locale, acc.currency, incomes);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;
  labelSumOut.textContent = formatCurrency(
    acc.locale,
    acc.currency,
    Math.abs(out)
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  // labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  labelSumInterest.textContent = formatCurrency(
    acc.locale,
    acc.currency,
    interest
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// created logout timer
const startLogoutTimer = () => {
  const tick = () => {
    // in each call, display remaining time on UI
    const min = String(Math.floor(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    labelTimer.textContent = `${min}:${sec}`;
    // at 0 seconds, stop timer and logout user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    // decrement counter
    time--;
  };
  // set time to 2 mins
  let time = 120;
  // call first time immediately to avoid a delay by a second
  tick();
  // call timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// display date
// const now = new Date();
// labelDate.textContent = `${now.getDate().toString().padStart(2, '0')}/${(
//   now.getMonth() + 1
// )
//   .toString()
//   .padStart(
//     2,
//     '0'
//   )}/${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // display current date and time
    // const now = new Date(2024, 1, 3, 1, 5);
    // const now = new Date();
    // labelDate.textContent = `${now.getDate().toString().padStart(2, '0')}/${(
    //   now.getMonth() + 1
    // )
    //   .toString()
    //   .padStart(2, '0')}/${now.getFullYear()}, ${now
    //   .getHours()
    //   .toString()
    //   .padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'short',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);

    // Setting logout timer
    timer && clearInterval(timer); // if previous timer exist then clear it
    timer = startLogoutTimer();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add new current date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Resetting logout timer
    timer && clearInterval(timer); // if previous timer exist then clear it
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(+inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add new current date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Resetting logout timer
      timer && clearInterval(timer); // if previous timer exist then clear it
      timer = startLogoutTimer();

      // Update UI
      updateUI(currentAccount);
    }, 2000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  // Resetting logout timer
  timer && clearInterval(timer); // if previous timer exist then clear it
  timer = startLogoutTimer();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
// Converting and checking numbers
console.log(23 === 23.0);
console.log(0.1, 0.2, 0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
// adding signs to convert string to number
console.log(Number(23), +'23');
// parsing => string should start with number and it will fetch start numbers
console.log(
  Number.parseInt('23e'),
  Number.parseInt('e23'),
  Number.parseInt('  23px3')
);
console.log(Number.parseInt('2.5rem', 10)); // decimal
console.log(Number.parseInt('2.5rem'), Number.parseFloat('2.5rem'));
console.log(parseFloat('  2.5rem')); // old way not using namespace 'Number'
// check is not a number
console.log(
  Number.isNaN(23),
  Number.isNaN('23'),
  Number.isNaN('23x'),
  Number.isNaN(+'23x'),
  Number.isFinite(23 / 0)
);
// check if number is real finite number
console.log(
  Number.isFinite(23),
  Number.isFinite('23'),
  Number.isFinite(+'23'),
  Number.isFinite(+'23e'),
  Number.isFinite(23 / 0)
);
// check if number is integer
console.log(
  Number.isInteger(23),
  Number.isInteger('23'),
  Number.isInteger(+'23e'),
  Number.isInteger(23 / 0),
  Number.isInteger(Number.parseInt(0.1))
);
*/

/*
// Math and rounding
// exponential values
console.log(Math.sqrt(64), 81 ** (1 / 2), 2 ** 3, 8 ** (1 / 3));
// max min
console.log(Math.max(1, 5, 23, '56', 78, 50, 34, '100'));
console.log(Math.max(1, 5, 23, '56', +'78x', 50, 34, +'100rem'));
console.log(Math.min(1, 5, 23, '56', 78, 50, 34, '100'));
console.log(Math.min(1, 5, 23, '56', +'78x', 50, 34, +'100rem'));
// cirlce radius
console.log(Math.PI * Number.parseFloat('10px') ** 2);
// random number 1 to 6
console.log(Math.trunc(Math.random() * 6) + 1);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(2, 8)); // generates random nums from 2 till 8
// rounding integers
console.log(Math.trunc(23.6));
console.log(Math.round(23.4), Math.round(23.6));
console.log(Math.ceil(23.4), Math.ceil(23.6));
console.log(Math.floor(23.4), Math.floor(23.6));
// floor & trunc are similar but not when it comes to negative numbers
console.log(Math.trunc(-23.4), Math.floor(-23.6));
// rounding decimals
console.log((2.4).toFixed(0), (2.4).toFixed(3), +(2.4321).toFixed(3));
*/

/*
// The remainder operator
console.log(6 / 2, 6 % 2);
console.log(7 / 2, 7 % 2);
const isEven = n => n % 2 === 0;
console.log(isEven(10), isEven(21), isEven(0), isEven(-120));
*/

/*
// Numeric separators
console.log(12_500, 1_45_500);
// cannot do below
// console.log(_12_500);
// console.log(12__500);
// console.log(12_500_);
console.log(12.534_50);
// console.log(12._500);
console.log(Number('123214_234')); // number separators only works on numbers
console.log(parseInt('123_214_234')); // number separators only works on numbers
*/

/*
// Working with BigInt (added in ES 2020)
console.log(
  'JavaScript base 2 and 53 bit numbers representation limit to => ',
  2 ** 53 - 1,
  Number.MAX_SAFE_INTEGER
);
// below numbers won't be represented properly as it crosses 53bit safe limit
console.log(2 ** 53 - 1, 2 ** 53 + 1, 2 ** 53 + 2, 2 ** 53 + 3, 2 ** 53 + 4);
// bit int, add 'n' at end or use constructor for small numbers
console.log(
  21353146256234652346523546234,
  21353146256234652346523546234n,
  BigInt(21353146256234652346523546234) // this is diff as it does some processing
);
console.log(BigInt(1234567890));
// operations
console.log(100000n + 100000n);
console.log(123456789123456789n * 1000000000000000000n);
// cannot mix big int with reg nums
// console.log(123 * 100n);
// console.log(Math.sqrt(16n));
console.log(BigInt(123) * 100n);
// exceptions
console.log(20n > 15);
console.log(20n === 20, 20n == 20, typeof 20n, typeof 20);
console.log(20n === '20', 20n == '20', typeof 20n, typeof '20');
console.log(12341454354354352345n + ' is a huge number');
// divisions -> bigint removes decimal part
console.log(11n / 3n, 11 / 3);
*/

/*
// Creating dates
const now = new Date();
console.log(now);
console.log(
  new Date('Sat Feb 24 2024 12:32:44 GMT+0530 (India Standard Time)')
);
console.log(new Date('Sat Feb 24 2024 12:32:44 GMT+0530'));
console.log(new Date('Sat Feb 24 2024 12:32:44'));
console.log(new Date('Sat Feb 24 2024'));
console.log(new Date('Sat Feb 24'));
// below are invalid dates
console.log(new Date('Sat Feb'));
console.log(new Date('Sat'));
console.log(new Date(''));
// other ways of knowing dates
console.log(new Date('24 Februray 2024'));
console.log(new Date(2024, 1, 29, 12, 39, 50)); // month is zero based
console.log(new Date(2024, 1, 30, 12, 39, 50)); // moves to new month
console.log(new Date(0)); // start date
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3rd day from start date (day*hrs*min*sec*ms)
console.log(new Date(account1.movementsDates.at(0)));
// working with dates
const future = new Date(2025, 1, 28, 12, 39, 50);
console.log(future);
console.log(
  future.getDate(),
  future.getMonth(),
  future.getFullYear(),
  future.getYear(), // wrong and not to be used
  future.getDay(), // day of week
  future.getHours(),
  future.getMinutes(),
  future.getSeconds(),
  future.getMilliseconds(),
  future.toISOString() // convert date to string
);
console.log(Date.now());
console.log(new Date(1708759299156));
console.log(future.setFullYear(2024)); // can be used to set date values
console.log(future);
*/

/*
// Operations with dates
const future = new Date(2025, 1, 28, 12, 39, 50);
console.log(future, Number(future), +future);
// const calcDaysPassed = (date1, date2) => date2 - date1;
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = calcDaysPassed(new Date(2024, 1, 3), new Date(2024, 1, 1));
// console.log(new Date(days1).getDate());
console.log(days1);
*/

/*
// Internationalizing dates (Intl)
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  // month: '2-digit',
  // month: 'long',
  month: 'numeric',
  year: 'numeric',
  weekday: 'short',
  // weekday: '2-digit',
  // weekday: 'long',
  // weekday: 'numeric'
};
const locale = navigator.language;
console.log(locale);
console.log(new Intl.DateTimeFormat('en-US').format(now));
console.log(new Intl.DateTimeFormat('en-GB').format(now));
console.log(new Intl.DateTimeFormat('en-IN').format(now));
console.log(new Intl.DateTimeFormat('ar-SY').format(now));
console.log(new Intl.DateTimeFormat(locale, options).format(now));
*/

/*
// Internationalizing numbers (Intl)
const num = 1231234123.3445;

console.log('USA: ', new Intl.NumberFormat('en-US').format(num));
console.log('INDIA: ', new Intl.NumberFormat('en-IN').format(num));
console.log('Great Britain: ', new Intl.NumberFormat('en-GB').format(num));
console.log('GERMANY: ', new Intl.NumberFormat('de-DE').format(num));
console.log('SYRIA: ', new Intl.NumberFormat('ar-SY').format(num));
console.log(
  'Browser (' + navigator.language + ') :',
  new Intl.NumberFormat(navigator.language).format(num)
);

const options = {
  // style: 'unit',
  // style: 'percent',
  unit: 'mile-per-hour', // style checks for property which we are entering as value
  style: 'currency',
  currency: 'INR',
  useGrouping: false,
};
console.log('USA: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('INDIA: ', new Intl.NumberFormat('en-IN', options).format(num));
console.log(
  'Great Britain: ',
  new Intl.NumberFormat('en-GB', options).format(num)
);
console.log('GERMANY: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('SYRIA: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  'Browser (' + navigator.language + ') :',
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

/*
// Timers: setTimeout and setInterval
// async javascript
setTimeout(() => console.log('Here is your order'), 2000);
console.log('Waiting...');
setTimeout(
  (order1, order2) =>
    console.log(`Here is your order of ${order1} and ${order2}`),
  3000,
  'Pizza',
  'Burger'
);

// setTimeout => executes a function after timeout
const orders = ['Fries', 'Burger'];
const orderTimer = setTimeout(
  (order1, order2) =>
    console.log(`Here is your order of ${order1} and ${order2}`),
  5000,
  ...orders
);
orders.includes('Samosa') && clearTimeout(orderTimer);

// setInterval => executes a function after interval again and again
// below will show real time in h:m:s
setInterval(
  () =>
    console.log(
      new Date().getHours() +
        ':' +
        new Date().getMinutes() +
        ':' +
        new Date().getSeconds()
    ),
  1000
);
*/
