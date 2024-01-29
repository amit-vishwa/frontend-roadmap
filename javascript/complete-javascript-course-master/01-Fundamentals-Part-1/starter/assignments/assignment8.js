// const numNeighbours = prompt(
//   "How many neighbour countries does your contry have?"
// );

// LATER : This helps us prevent bugs
const numNeighbours = Number(
  prompt("How many neighbour countries does your contry have?")
);

console.log("Using loose equality operator:");
if (numNeighbours == 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");

console.log("\nUsing strict equality operator:");
if (numNeighbours === 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");

/* Below are result observations:
i.Here greater condition will work in both scenarios since type coercion will occur.
ii.The loose equality will always work even though prompt is getting input in string.
iii.The strict equality check will only work is input is a number.
*/
