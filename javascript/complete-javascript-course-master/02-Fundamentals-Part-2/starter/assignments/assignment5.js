"use strict";

const populations = [140, 144, 33, 21];
console.log(populations.length === 4);

const percentageOfWorld = (population) => (population / 7900) * 100;
const percentages = new Array(
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3])
);

// using for loop
// for (let index = 0; index < populations.length; index++) {
//   percentages[index] = percentageOfWorld(populations[index]);
// }

console.log(percentages);
