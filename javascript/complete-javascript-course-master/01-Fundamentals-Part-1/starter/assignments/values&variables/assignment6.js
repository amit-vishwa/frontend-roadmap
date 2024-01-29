const population = 130;
const averagePopulation = 33;
let populationdiff;
let condition;
if (population < averagePopulation) {
  populationdiff = averagePopulation - population;
  condition = "below";
} else {
  populationdiff = population - averagePopulation;
  condition = "above";
}
console.log(
  `Portugal's population is ${populationdiff} million ${condition} average`
);
