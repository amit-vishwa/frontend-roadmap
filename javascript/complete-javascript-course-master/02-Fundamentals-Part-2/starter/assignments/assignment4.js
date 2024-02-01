"use strict";

function percentageOfWorld(population) {
  return (population / 7900) * 100;
}
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld(
    population
  )}% of the world`;
}
console.log(describePopulation("China", 1441));
console.log(describePopulation("Japan", 100));
console.log(describePopulation("Korea", 500));
