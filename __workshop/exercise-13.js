// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string
  return str.split("").filter((words) => words === "B").length;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
console.log(countBs("BananaBabyBubbles"));
// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = countBs;
