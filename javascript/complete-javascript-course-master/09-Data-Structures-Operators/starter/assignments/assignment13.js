'use strict';

// 13.1 => initialize a map
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
console.log(bookMap);

// 13.2 => add an element
bookMap.set('pages', 464);
console.log(bookMap);

// 13.3 => fetch value using key
const title = bookMap.get('title');
const author = bookMap.get('author');
console.log(`${title} by ${author}`);
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// 13.4 => map size
console.log(bookMap.size);

// 13.5 => has key
bookMap.has('author') && console.log('The author of the book is known');
