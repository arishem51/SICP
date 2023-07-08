const { plus, increase, minus, multiply } = require("../../helper/index.js");

/*
    Exercise 1.2
*/

function expressionsEx12() {
  const numerator = plus(5, 4, minus(2, minus(3, plus(6, 4 / 5))));
  const denominator = multiply(3, minus(6, 2), minus(2 - 7));
  return numerator / denominator;
}

console.log(expressionsEx12());

/*
    Exercise 1.9
        Each of the following two functions defines a method for adding two positive integers in
    terms of the functions inc, which increments its argument by 1, and dec, which decrements
    its argument by 1.
*/

function plusV1(a, b) {
  // Iterative process
  return a === 0 ? b : increase(plusV1(dec(a), b));
}

function plusV2(a, b) {
  // Recursive process
  return a === 0 ? b : plusV2(dec(a), increase(b));
}
