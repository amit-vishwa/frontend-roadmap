'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (
    obj,
    { starterIndex, mainIndex, time, address },
    { firstName, lastName = 'Vishwakarma' } // default property value passed
  ) {
    console.log(obj);
    console.log(
      `Your order, ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
    );
    console.log(`I am ${firstName} ${lastName}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your order is ready with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(
      `Main ingredient is ${mainIngredient}, other ingredients are ${otherIngredients}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*
// De-structuring of Arrays
let [a, , b] = restaurant.mainMenu; // we can skip element in this way
console.log(a, b);

// default values
const [pizza = 1, pasta = 2, risotto = 3, rice = 4, cake] = restaurant.mainMenu;
console.log(pizza, pasta, risotto, rice, cake);

[a, b] = [b, a]; // swapping using de-structuring
console.log(a, b);
const [starterCourse, mainCourse] = restaurant.order(3, 1);
console.log(starterCourse, mainCourse);

// Nested de-structuring
const nested = [1, 2, [3, 4]];
const [p, , q] = nested;
console.log(p, q);
const [r, , [s, t]] = nested;
console.log(r, s, t);
*/

/*
// De-structuring of objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Renaming object properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { cost, menu = [], starterMenu: starters = [] } = restaurant;
console.log(cost, menu, starters);

// Mutating variables
let a = 111,
  b = 222;
console.log(`a=${a}, b=${b}`);
const obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj);
console.log(`a=${a}, b=${b}`);

// Nested objects
const { fri } = hours;
console.log(fri);
const {
  fri: { open: o, close: c },
} = hours;
console.log(open, close, o, c);

// Objects as arguments
restaurant.orderDelivery(
  {
    starterIndex: 2,
    mainIndex: 1,
    address: 'Mumbai',
    time: '23:30',
  },
  {
    starterIndex: 2,
    mainIndex: 1,
    address: 'Mumbai',
    time: '23:30',
  },
  {
    firstName: 'Amit',
  }
);
*/

/*
// The spread operator
const arr = [7, 8, 9];
const newBadArr = [5, 6, arr[0], arr[1], arr[2]];
console.log(newBadArr);
const newArr = [4, ...newBadArr];
console.log(newArr, ...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnicco'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Spread operators works on Iterables that are built-in data structures
// like Arrays, Strings, Sets, Maps but NOT Objects
// Spread operators can only be used while building arrays or pass values in functions
const str = 'Vishwakarma';
console.log([...str], ...str);

// passing as arguments
const pastaIngredients = ['mushrooms', 'cheese', 'asparagus'];
restaurant.orderPasta(...pastaIngredients);

// objects
const newRestaurant = {
  foundedIn: 1997,
  ...restaurant,
  founder: 'Amit',
};
console.log(newRestaurant);
const restaurantCopy = { ...newRestaurant };
restaurantCopy.founder = 'Raja';
console.log(newRestaurant.founder, restaurantCopy.founder);
*/

/*
// Rest pattern & parameters
// Spread operator '...' is used on right hand side of assignment operator '='
const arr = [1, 2, ...[3, 4]];
console.log(arr);
// Rest operator '...' is used on left hand side of assignment operator '='
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);
const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Functions (for n number of parameters)
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(number => (sum += number));
  console.log(numbers, sum);
};
add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6, 7);
const x = [23, 56, 70];
add(...x); // unpacking array using spread operator and packing back in function argument using rest operator
restaurant.orderPizza('mushrooms');
restaurant.orderPizza('mushrooms', 'cheeze', 'garlic', 'capsicum', 'tomato');
*/

/*
// Short circuiting (&& and ||)
// Boolean operators can use any data type, can return any data type and can do short-circuiting

// OR operator will evaluate or return other value when first value is falsy
console.log('-----------------------OR-------------------------');
console.log(3 || 'Amit', '' || 'Hello', false || true, null || undefined);
console.log(0 || false || null || undefined || ' ' || 'true' || 'Amit'); // returns space
// restaurant.guests = 20;
console.log(restaurant.guests ? restaurant.guests : 10);
console.log(restaurant.guests || 15);

// AND operator will evaluate or return other value only when first value is true
console.log('-----------------------AND-------------------------');
console.log(3 && 'Amit', '' && 'Hello', false && true, null && undefined);
console.log(0 && false && null && undefined && ' ' && 'true' && 'Amit'); // returns space
console.log(restaurant.guests ? restaurant.guests : 10);
console.log(restaurant.guests && 15);
// Practical example
if (restaurant.orderPizza) restaurant.orderPizza('mushrooms', 'cheeeze');
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'cheeeze'); // if can be replaced
*/

/*
// Nullish coalescing operator (??)
// ?? operator will work similar to || operator but will consider only null & undefined as falsy values, rest are truthy
restaurant.guests = [false, ' ', 0, '', null];
console.log(
  restaurant.guests[0] ?? 15,
  restaurant.guests[1] ?? 15,
  restaurant.guests[2] ?? 15,
  restaurant.guests[3] ?? 15,
  restaurant.guests[4] ?? 15,
  restaurant.guests[4] ?? undefined
);
*/

/*
// Logical assignment operators
const rest1 = {
  name: 'Capri',
  guestCount: 20,
};
const rest2 = {
  name: 'La Pupil',
  owner: 'Rio De Janero',
};
console.log(
  rest1.guestCount || 10,
  rest2.guestCount || 10,
  rest2.guestCount || rest1.guestCount || 40
);
// rest1.guestCount = rest1.guestCount || 10;
// rest2.guestCount = rest2.guestCount || 10;
rest1.guestCount ||= 50;
rest2.guestCount ||= 50;
console.log(rest1, rest2);
rest1.guestCount &&= 50;
rest2.guestCount &&= 50;
console.log(rest1, rest2);
rest1.guestCount = 0;
rest2.guestCount = 0;
rest1.guestCount ??= 50;
rest2.guestCount ??= 50;
console.log(rest1, rest2);
*/

/*
////////////////////////////////////////////////
// Coding Challenge #1 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

// SOLUTION:

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2024',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = [game.players[0], game.players[1]];
// const [players1, players2] = game.players; // tutorial solution
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// console.log(players1, players2);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game; // tutorial solution
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored!`);
};
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
game.odds.team1 &&= game.odds.team1 < game.odds.team2;
game.odds.team2 &&= team2 < team1;
console.log(`Team1 wins: ${game.odds.team1}, Team2 wins: ${game.odds.team2}`);
// below solution is from tutorial
// team1 < team2 && console.log('Team1 is more likely to win!');
// team1 > team2 && console.log('Team2 is more likely to win!');
*/

/**
 * Looping Arrays: The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
// when we require index, we can use below
for (const item of menu.entries()) {
  console.log(item, item[0] + 1, item[1]);
  // console.log(item);
}
// using destructuring
for (const [index, element] of menu.entries()) console.log(index + 1, element);
// console.log([...menu.entries()]); // it is iterable which can be iterated like this
 */

/*
// Enhanced Object Literals
// 1. If we want to add an object as property in another object, then just add that same object name
// 2. The 'function' keyword along with ':' can be removed while declaring function in object
// 3. We can compute or modify property name as well
const weekdays = ['mon', 'tue'];
const worstDays = { [weekdays[0]]: 'Worst', tue: 'lessWorst' };
console.log(weekdays, worstDays);
*/

/*
// Optional chaining (?.)
console.log(
  restaurant.openingHours.mon ? restaurant.openingHours.mon.open : null
);
// before ? property if checked for existence
console.log(restaurant.openingHours?.mon?.open);
// above condition is similar to below if condition
// if(restaurant.openingHours && restaurant.openingHours.mon && restaurant.openingHours.mon.open)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days)
  console.log(restaurant.openingHours[day]?.open ?? 'closed');

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method not exist');
console.log(restaurant.orders?.(0, 1) ?? 'Method not exist');

// Arrays
console.log(days?.[0] ?? 'Array size restriction');
console.log(days?.[10] ?? 'Array size restriction');
*/

/*
// Looping Objects: Object Keys, Values and Entries
// Property names
const properties = Object.keys(restaurant.openingHours);
console.log(properties);
let str = `We are open on ${properties.length} days`;
for (const day of properties) str += `, ${day}`;
console.log(str);
// Property values
console.log(Object.values(restaurant.openingHours));
// Both key and value
console.log(Object.entries(restaurant.openingHours));
for (const [day, { open, close }] of Object.entries(restaurant.openingHours)) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
*/

/*
////////////////////////////////////////////////// 
// Coding Challenge #2
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2024',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

// Solution:

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let sumOdd = 0;
let numOdd = 0;
for (const [team, odds] of Object.values(game.odds).entries()) {
  sumOdd += odds;
  numOdd++;
}
console.log(sumOdd / numOdd);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
for (const [team, odds] of Object.entries(game.odds)) {
  const message =
    team === 'x'
      ? `Odd of draw: ${odds}`
      : `Odd of victory ${game[team]}: ${odds}`;
  console.log(message);
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

/*
// Sets
const orderSets = new Set(['Pizza', 'Pasta', 'Pasta', 'Risotto', 'Pizza']);
console.log(orderSets, new Set('Amit'), orderSets.size);
console.log(orderSets.has('Pizza'), orderSets.has('Bread'));
orderSets.add('Garlic Bread');
orderSets.add('Bread');
orderSets.add('Bread');
orderSets.delete('Risotto');
console.log(orderSets);
// orderSets.clear();
// console.log(orderSets);

for (const order of orderSets) {
  console.log(order);
}
const staff = ['waiter', 'chef', 'waiter', 'manager'];
const staffUnique = new Set(staff);
console.log(staff, staffUnique);
const orderArr = [...orderSets];
console.log(orderSets[1], orderArr[1]);
console.log(new Set(staff).size, new Set('vishwakarma').size);
*/

/*
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Amit');
rest.set('age', 27);
rest.set('message', 'Hello there!');
console.log(rest);
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(1, 15)
  .set(true, 'yes') // don't stores duplicates, however takes latest value
  .set(true, 'yes we are open')
  .set(false, 'we are close');
console.log(rest, rest.get(1));
const time = 15;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('open'), rest.has('opens'));
rest.delete('message');
console.log(rest);
// rest.clear();
console.log(rest.size);
const arr = [3, 4];
rest.set(arr, 'Array here');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(arr));


// Maps: Iteration
const question = new Map([
  ['question', 'Best programming language is ...'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['answer', 3],
  [true, 'Correct answer'],
  [false, 'Retry'],
]);
console.log(question);

// convert object to map
// console.log(Object.entries(restaurant.openingHours));
const openingHoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(openingHoursMap);

// Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question)
//   typeof key === 'number' && console.log(`Option ${key}: ${value}`);
// const answer = Number(prompt('Your answer is ...'));
// console.log(question.get(answer === question.get('answer')));

// convert map to array
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
// console.log(question.keys(), ...question.values());
*/

/*
///////////////////////////////////////
// Coding Challenge #3
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Solution:

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const eventSet = new Set();
for (const [key, value] of gameEvents) eventSet.add(value);
const events = [...eventSet];
// const events = [...new Set(gameEvents.values())]; // tutorial solution
console.log(events);

// 2. After the game has finished, this was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
// const half = key<45 ?`[FIRST HALF] ${key}: ${value}`:`[SECOND HALF] ${key}: ${value}`
for (const [key, value] of gameEvents)
  key <= 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
// for (const [key, value] of gameEvents) {
//   const half =
//     key <= 45
//       ? `[FIRST HALF] ${key}: ${value}`
//       : `[SECOND HALF] ${key}: ${value}`;
//   console.log(half);
// }
*/

/*
// Working With Strings:
// Part1
const airline = 'Air India';
const plane = 'A370';
console.log(plane[0], plane[2], plane[plane.length - 1]);
console.log(...plane, ...'AMIT');
console.log(
  airline.indexOf('A'),
  airline.lastIndexOf('a'),
  airline.indexOf('india'),
  airline.indexOf('India')
);
console.log(airline.slice(4), '|', airline.slice(0, 4));
console.log(
  airline.slice(airline.lastIndexOf('i')),
  '|',
  airline.slice(0, airline.lastIndexOf(' '))
);
console.log(airline.slice(-4), '|', airline.slice(2, -4)); // -4 is for last 4 indexes

const checkPlaneMiddleSeat = planeSeat => {
  const seat = planeSeat.slice(-1);
  seat === 'B' || seat === 'E'
    ? console.log('You got middle seat')
    : console.log('You are lucky');
};
checkPlaneMiddleSeat('13B');
checkPlaneMiddleSeat('14C');
checkPlaneMiddleSeat('1E');
console.log(
  new String('Amit'),
  typeof new String('Amit'),
  typeof new String('Amit').slice(1),
  typeof 'Amit'
);

// Part2
console.log(airline.toLowerCase(), airline.toUpperCase());
const passenger = 'aMiT';
const correctName =
  passenger.toUpperCase()[0] + passenger.slice(1).toLowerCase();
console.log(passenger, correctName);
// comparing emails
const correctEmail = 'amit.v@gmail.com';
const enteredEmail = ' AmiT.V@GmaIl.coM \n';
console.log(
  correctEmail === enteredEmail.toLowerCase().trim(),
  enteredEmail.toLowerCase().trim()
);
// replace letters
const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceGB, priceUS);
const str = 'We have door to door passes!';
console.log(str.replace('door', 'gate'));
console.log(str.replace(/door/g, 'gate'), str.replaceAll('door', 'gate'));
// booleans
console.log(
  passenger.includes('a'),
  passenger.includes('A'),
  passenger.startsWith('am'),
  passenger.startsWith('A'),
  passenger.endsWith('t'),
  passenger.endsWith('iT')
);
// practice exercise
const checkLuggage = function (items) {
  items = items.toLowerCase();
  if (items.includes('gun') || items.includes('knife'))
    console.log('You are not allowed to board!');
  else console.log('Welcome aboard!');
};
checkLuggage('I have food and Gun for protection');
checkLuggage('I have Knife to cut fruits');
checkLuggage('I do not have any luggage');

// Part3
const fullName = 'Amit Vishwakarma';
// split
const [firstName, lastName] = fullName.split(' ');
console.log(firstName, lastName);
// join
const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);
// exercise
const capitalize = function (name) {
  const nameArr = name.split(' ');
  const newNameArr = [];
  nameArr.forEach(name => {
    // newNameArr.push(name[0].toUpperCase() + name.slice(1));
    newNameArr.push(name.replace(name[0], name[0].toUpperCase()));
  });
  console.log(newNameArr.join(' '));
};
capitalize('amit vishwakarma');
capitalize('jessica ann smith davis');
// padding
console.log('Amit'.padStart(10, '+'), '|', 'Amit'.padEnd(10, '+'));
console.log('Amit'.padStart(10, '+'));
const maskCreditCard = function (cardNumber) {
  // const str = cardNumber.toString();
  const str = cardNumber + '';
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
};
maskCreditCard(12324234554756);
maskCreditCard('1232423455475689u98lknlkasdg');
// Repeat
console.log('We are delayed\n'.repeat(4));
const n = 10;
console.log(`There are ${n} planes waiting in line ${'✈'.repeat(n)}`);
*/

/* 
///////////////////////////////////////
// Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

// Solution:

// create DOM elements
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// access DOM element using js
const button = document.querySelector('button');
const text = document.querySelector('textarea');
// assign values to DOM element
button.textContent = 'Convert';
text.placeholder = 'Enter text here';
// helper function to return response
const createResponse = function (index, syncIndex, value) {
  const response = value[0] + value[1][0].toUpperCase() + value[1].slice(1);
  // replace can be used as well
  // const response =
  //   value[0] + value[1].replace(value[1][0], value[1][0].toUpperCase());
  console.log(response.padEnd(30, ' ') + '✅'.repeat(index + 1 - syncIndex));
};
// main function to perform conversion logic
const convert = function () {
  if (text.value) {
    const textArray = text.value.split('\n');
    let syncIndex = 0;
    for (let [index, value] of textArray.entries()) {
      const valueArray = value.toLowerCase().trim().split('_');
      if (valueArray.length === 2) {
        createResponse(index, syncIndex, valueArray);
      } else syncIndex++;
    }
  }
};
// event listener for mouse click event
button.addEventListener('click', convert);
*/

/*
// String Methods Practice
// Convert flights data (provided at start of this file) input to below output
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const response = `${type.includes('Delayed') ? '🔴' : ''} ${type
    .replaceAll('_', ' ')
    .trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`;
  console.log(response.padStart(45, ' '));
}
*/
