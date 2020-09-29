// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  // grades is an array of numbers
  let avg = grades.reduce((a, b) => a + b) / grades.length;
  return Math.round(avg);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
console.log(calculateAverage([76, 60, 83, 100, 78]));
// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
