/*
// Exporting and importing in ES6 modules
// importing module
import {
  addToCart,
  shippingCost,
  price,
  totalQuantity as quantity, // named import, we can rename here
} from './shoppingCart.js';
// import statements executed first along with their required codes
console.log('Importing module');
addToCart('apple', 10);
console.log(shippingCost, price, quantity);

// we can import all exported properties using *
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bananas', 10);
console.log(
  ShoppingCart.price,
  ShoppingCart.shippingCost,
  ShoppingCart.totalQuantity
);

// default import
import add from './shoppingCart.js';
add('pizzas', 5);

// combining default and named imports (should not be used to avoid complexity issues)
// import addCart, {
//   shippingCost,
//   price,
//   totalQuantity as quantity,
// } from './shoppingCart.js';

// import is live connection of export and not just a copy
import { cart } from './shoppingCart.js';
// below cart contains some data as we already pushed some records above
console.log(cart);
*/

/*
// Top level await (ES2022: works only in modules script)
console.log('Started fetching');
// below await will block further execution as it is synchronous call
const response = await fetch('https://jsonplaceholder.org/posts');
const data = await response.json();
console.log(data[0]);
console.log('Completed fetching');

const getLastPost = async function () {
  const response = await fetch('https://jsonplaceholder.org/posts');
  const data = await response.json();
  // console.log(data.at(-1));
  return { title: data.at(-1).title, text: data.at(-1).content };
};
// above async function will always return promise
const lastPost = getLastPost();
console.log(lastPost);
lastPost.then(res => console.log(res));
// above is not very clean, so we can use top level await here
// here 'post' is resolved value of getLastPost() that returns promise
const post = await getLastPost();
console.log(post);

import { cart } from './shoppingCart.js';
console.log(cart);
*/

/*
// The module pattern
const ShoppingCart = (function () {
  // below properties and functions are private
  const cart = [];
  const totalPrice = 200;
  const shippingCost = 100;
  const totalQuantity = 20;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart, shipping cost is ${shippingCost}`
    );
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  // we can return in order to make them public
  return { cart, addToCart, orderStock };
})();
// ShoppingCart object is not accessible on console as it is inside module script
// we can manipulate functions because of closure over here
ShoppingCart.addToCart('apple', 10);
ShoppingCart.orderStock('pizza', 5);
console.log(ShoppingCart, ShoppingCart.shippingCost);
*/

/*
// Common JS modules
// below will work in nodeJS, but not in browser environment of normal JS
// Export 
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart, shipping cost is ${shippingCost}`
  );
};
// Import
const { addToCart } = require ('./shoppingCart.js');
*/

// Introduction to NPM
// installed lodash-es since common js modules won't work here
import { addToCart, cart } from './shoppingCart.js';
addToCart('apple', 10);
// import clone from './node_modules/lodash-es/cloneDeep.js';
import clone, { property } from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};
console.log(state);
const stateClone = Object.assign({}, state);
// below will deep clone the original object, while above jsut keep a copy
const stateDeepClone = clone(state);
state.user.loggedIn = false;
console.log(stateClone, stateDeepClone);
// below is for not reloading whole page again and again for any changes
if (module.hot) {
  module.hot.accept();
}

// Configuring babel and polyfilling
// Babel simply converts (transpiles) ES6 syntaxes to ES5, but cannot convert features like find(), Promise(), etc. this is done by polyfilling, which polyfills (creates another version) those features
class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${name}`);
  }
}
const amit = new Person('Amit');
console.log('Amit' ?? null);
console.log(cart.find(property => property.quantity > 2));
Promise.resolve('Test').then(res => console.log(res));

import 'core-js/stable';
// bundle size can be reduced by just importing actual required modules
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';
// below import is for polyfilling async functions
import 'regenerator-runtime/runtime';
