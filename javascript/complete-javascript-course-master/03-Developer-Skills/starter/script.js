// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*Learning how to code
const x = 23;
const arre = hello => console.log('Hello there', hello);
arre(x);
*/

/*
//Become a problem solver by thinking like a developer
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let index = 0; index < temperatures.length; index++) {
    const currentElement = temperatures[index];
    if (typeof currentElement === 'number') {
      if (currentElement > max) max = currentElement;
      if (currentElement < min) min = currentElement;
    }
  }
  console.log(max, min);
  return max && min ? max - min : 0;
};
console.log('Temperature amplitude is ' + calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays
const temperatures2 = [
  10,
  2,
  6,
  0,
  'error',
  9,
  13,
  'error',
  25,
  'error',
  9,
  'error',
];
const fetchMergedArrays = (temperatures, temperatures2) =>
  temperatures.concat(temperatures2);
const newTemperatures = fetchMergedArrays(temperatures, temperatures2);
console.log('Temperature2 amplitude is ' + calcTempAmplitude(newTemperatures));
*/

/*
// Debugging error
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // 3.FIX: Fixed bug by updating value type to number
    value: Number(prompt('Enter temperature in degree celsius : ')),
  };

  // 2.FIND: Found bug at position or step
  console.table(measurement);

  const kelvin = measurement.value + 273;
//   debugger;
  return kelvin;
};
// 1.IDENTIFY: Identified bug via logging on console
console.log(measureKelvin());

// 4.PREVENT: Since we have not implemented this at other places, so cannot be done
*/

/*
////////////////////////////////
// Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]


*/
// Solution:
//1.Understanding the problem
// What we have to do? Ans: Create 'printForecast' function to take input as arr and log string
// What function will take in input? Ans: An array
// What function will do? Ans: Log a string
//2.Breaking down into sub-problems
// How many arrays will be passing in parameter? Ans: One
// Will there be any other types than number? Ans: No
// How will be iterating through array? Ans: For Loop
// What are dynamic values in logging string? Ans: Degree celsius and number of days.
// From where will be getting dynamic values?
// Ans: Degree celsius will come from array[index] and days can be index or index+1 if index starts from 0

// Pseudo-code:
// function printForecast(arr)
// for loop of arr
// log '... arr[index]ºC in index days'

function printForecast(temperatures) {
  let logString = '';
  for (let index = 1; index <= temperatures.length; index++) {
    logString += `... ${temperatures[index - 1]}ºC in ${index} days `;
    // logString += index === temperatures.length ? '...' : '';
  }
  console.log(logString + '...');
}
let temperatures = [17, 21, 23];
temperatures = [12, 5, -5, 0, 4];
printForecast(temperatures);
