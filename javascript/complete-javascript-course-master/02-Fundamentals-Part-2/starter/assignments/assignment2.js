"use strict";

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
const india = percentageOfWorld1(1400);
const china = percentageOfWorld1(1500);
const usa = percentageOfWorld1(400);
console.log(india, china, usa);
const percentageOfWolrd2 = function (population) {
  return (population / worldPopulation) * 100;
};
console.log(
  percentageOfWolrd2(10),
  percentageOfWolrd2(1441),
  percentageOfWolrd2(332)
);
