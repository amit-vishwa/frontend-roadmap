const country = "Portugal";
let population = 40;
let language = "English";
const isIsland = false;
if (language === "English" && population < 50 && !isIsland)
  console.log(`You should live in ${country} :)`);
else console.log(`${country} does not meet your criteria :(`);
