// exporting module
console.log('Exporting module');

// Blocking code
// console.log('Started fetching posts');
// // below await will block further execution as it is synchronous call
// await fetch('https://jsonplaceholder.org/posts');
// console.log('Completed fetching posts');

const shippingCost = 50;
export const cart = [];
// export only works at global scope
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
const totalPrice = 100;
const totalQuantity = 10;
// named exports, we can rename from here or from file that imports it
export { shippingCost, totalPrice as price, totalQuantity };
// default export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
