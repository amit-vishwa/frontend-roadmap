"use strict";

function describeCountry(country, population, capitalCity) {
  console.log(country, population, capitalCity);
  const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return countryDescription;
}

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);
const india = describeCountry("India", 140, "New Delhi");
console.log(india);
const usa = describeCountry("USA", 30, "Washington DC");
console.log(usa);
