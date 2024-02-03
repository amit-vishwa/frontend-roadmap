"use strict";

const populations = [140, 144, 33, 21];

const percentageOfWorld = (population) => (population / 7900) * 100;

const percentages = new Array();

let index = 0;
while (index < populations.length) {
  percentages.push(percentageOfWorld(populations[index]));
  index++;
}

console.log(percentages);
