/*
    Exercise 1.2
*/

function expressionsEx12() {
  const numerator = 5 + 4 + (2 - (3 - (6 + 4 / 5)));
  const denominator = 3 * (6 - 2) * (2 - 7);
  return numerator / denominator;
}

console.log(expressionsEx12());

/*
    Exercise 1.9
        Each of the following two functions defines a method for adding two positive integers in
    terms of the functions inc, which increments its argument by 1, and dec, which decrements
    its argument by 1.
*/

const { increase } = require("../../helper/index.js");

function plus(a, b) {
  // Iterative process
  return a === 0 ? b : increase(plus(dec(a), b));
}

function plus(a, b) {
  // Recursive process
  return a === 0 ? b : plus(dec(a), increase(b));
}
