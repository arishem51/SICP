const { average, square } = require("../../helper/index.js");

// Expressions

137 + 349;

const size = 2;

console.log(size);

console.log(size * 5);

const pi = 3.14159;
const radius = 10;

console.log(pi * radius * radius);

const circumference = 2 * pi * radius;

console.log(circumference);

/* 
    * The simples means of abstraction is Constant declaration. 

    * It allows us to use simple names to refer to the results of compound operations (such
as the circumference computed above).
 */

// Compound functions

// function name(parameters) { return expression; }

console.log("square", square(44), square(12 + 17));
console.log("square", square(square(3)));

// x^2 + y^2 => square(x) + square(y)

function sumOfSquares(x, y) {
  return square(x) + square(y);
}

console.log("sum squares", sumOfSquares(5, 12));

// use sumOfSquares as a building block in constructing further functions:

function f(a) {
  return sumOfSquares(a + 1, a * 2);
}

console.log(f(5));

// The Substitution Model for Function Application

/*
    We have two different model for function application

    Let eval this: f(5)

    * First way:

    sum_of_squares(a + 1, a * 2)
    sum_of_squares(5 + 1, 5 * 2)
    square(6) + square(10)
    (6 * 6) + (10 * 10)
    36 + 100
    136

    * Second way

    sum_of_squares(a + 1, a * 2)
    sum_of_squares(5 + 1, 5 * 2)
    square(5 + 1) + square(5 * 2)
    (5 + 1) * (5 + 1) + (5 * 2) * (5 * 2)
    6 * 6 + 10 * 10
    36 + 100
    136

*/

// Conditional Expressions and Predicates

/*
    |x| =  {x if x ≥ 0 or –x otherwise}
*/

function abs(x) {
  return x > 0 ? x : x === 0 ? 0 : -x;
}

function greaterOrEqualV1(x, y) {
  return x > y || x === y;
}

function greaterOrEqualV2(x, y) {
  return !(x < y);
}

/* 
Exercise 1.3
*/

function exercise1comma3(a, b, c) {
  // Get the two greatest of 3 nums, a, b and c
  // return the sum of the square of the two nums

  const isAGreaterThanB = greaterOrEqualV2(a, b);
  const isAGreaterThanC = greaterOrEqualV2(a, c);
  if (isAGreaterThanB && isAGreaterThanC) {
    const secondGreatestNum = greaterOrEqualV2(b, c) ? b : c;
    return sumOfSquares(a, secondGreatestNum);
  }
  if (isAGreaterThanB && !isAGreaterThanC) {
    return sumOfSquares(a, c);
  }

  if (!isAGreaterThanB && isAGreaterThanC) {
    return sumOfSquares(a, b);
  }
  if (!isAGreaterThanB && !isAGreaterThanC) {
    return sumOfSquares(b, c);
  }
}

console.log("Ex 1.3: ", exercise1comma3(1, 3, 5), exercise1comma3(2, 1, 4));

function sqrt(x) {
  function isGoodEnough(guess) {
    return Math.abs(square(guess) - x) < 0.001;
  }

  function improve(guess) {
    return average(guess, x / guess);
  }

  function sqrtIter(guess) {
    return isGoodEnough(guess) ? guess : sqrtIter(improve(guess));
  }

  return sqrtIter(1);
}

console.log(sqrt(9));
