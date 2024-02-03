"use strict";

const neighbours = new Array("Denmark", "England", "Sweden", "Switzerland");
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany"))
  console.log("Probably not a central european country :D");
neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
console.log(neighbours);
