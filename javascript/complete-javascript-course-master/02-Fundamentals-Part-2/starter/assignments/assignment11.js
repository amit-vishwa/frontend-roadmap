"use strict";

const populations = [140, 144, 33, 21];

const percentageOfWorld = (population) => (population / 7900) * 100;

const percentages = new Array();

for (let index = 0; index < populations.length; index++) {
  percentages.push(percentageOfWorld(populations[index]));
}

console.log(percentages);
