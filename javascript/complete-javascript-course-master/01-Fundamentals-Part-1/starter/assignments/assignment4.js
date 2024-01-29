const country = "Portugal";
const continent = "Europe";
let language = "portuguese";
const population = 11;
let halfPopulation = population / 2;
console.log("Assignment No.4");
console.log(
  "Country with population " +
    population +
    " millions is split in half and each half is consist of population " +
    halfPopulation +
    " millions"
);
const incrementedPopulationByOne = ++halfPopulation;
console.log("Incremented current population is " + incrementedPopulationByOne);
const finlandPopulation = 6;
console.log(
  "Does my country have more people than Finland? " +
    (incrementedPopulationByOne > finlandPopulation)
);
const averagePopulation = 33;
console.log(
  "Does my country have less people than the average country? " +
    (incrementedPopulationByOne < averagePopulation)
);
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);
