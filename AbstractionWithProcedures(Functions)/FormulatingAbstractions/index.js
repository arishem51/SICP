const { average } = require("../../helper/index.js");

// 1.3 Formulating Abstractions with Higher-Order Functions

function cube(x) {
  return x * x * x;
}

/**
 *  We can express this with these statements:
 *  3 * 3 * 3, 5 * 5 * 5,... y * y * y instead of write the cube function. This lead us to a disadvantage
 *  ====> lack the ability to express the concept of cubing
 */

function creaseSumPattern(a, b, calculateFirstTerm, calculateNextValue) {
  if (a > b) {
    return 0;
  }
  return (
    calculateFirstTerm(a) +
    creaseSumPattern(
      calculateNextValue(a),
      b,
      calculateFirstTerm,
      calculateNextValue
    )
  );
}

function increaseOne(n) {
  return n + 1;
}

// function sumIntegers(a, b) {
//   if (a > b) {
//     return 0;
//   }
//   return a + sumIntegers(a + 1, b);
// }

function sumIntegers(a, b) {
  const calculateFirstTerm = (a) => a;
  return creaseSumPattern(a, b, calculateFirstTerm, increaseOne);
}

console.log(sumIntegers(1, 10));

// function sumCubes(a, b) {
//   if (a > b) {
//     return 0;
//   }
//   return cube(a) + sumCubes(a + 1, b);
// }

function sumCubes(a, b) {
  return creaseSumPattern(a, b, cube, increaseOne);
}

console.log(sumCubes(1, 10));

// function sumPi(a, b) {
//   if (a > b) {
//     return 0;
//   }
//   return 1 / (a * (a + 2)) + sumPi(a + 4, b);
// }

function sumPi(a, b) {
  const calculateFirstTerm = (x) => 1 / (x * (x + 2));
  const calculateNextValue = (x) => x + 4;
  return creaseSumPattern(a, b, calculateFirstTerm, calculateNextValue);
}

console.log(8 * sumPi(1, 1000));

function integral(a, b, func, dx) {
  const addDx = (x) => x + dx;
  const firstTerm = a + dx / 2;
  const secondTerm = b;
  return creaseSumPattern(firstTerm, secondTerm, func, addDx) * dx;
}

console.log(integral(0, 1, cube, 0.01));
console.log(integral(0, 1, cube, 0.001));

// function fxy(x, y) {
//   function helper(a, b) {
//     return x * square(a) + y * b + a * b;
//   }
//   return helper(1 + x * y, 1 - y);
// }

// function fxy(x, y) {
//   return ((a, b) => x * square(a) + y * b + a * b)(1 + x * y, 1 - y);
// }

function fxy(x, y) {
  const a = 1 + x * y;
  const b = 1 - y;
  return x * square(a) + y * b + a * b;
}

// Finding roots of equations by the half-interval method
// t, if we are given points a and b such that f(a) < 0 < f(b)
// Example: -12 < 0 < 18
// Let x be the average of a and b to compute f(x)
// If f(x) > 0 => Have a zero between a and x
// Else have a zero between x and b

const sumNums = (a, b) => a + b;

const isNegative = (a) => a < 0;
const isPositive = (a) => a > 0;

const CLOSE_POINT = 0.001;
const closeEnough = (a, b) => Math.abs(a - b) < CLOSE_POINT;

function search(func, negativePoint, positivePoint) {
  const midPoint = average(negativePoint, positivePoint);
  if (closeEnough(negativePoint, positivePoint)) {
    return midPoint;
  }
  const testPoint = func(midPoint);
  if (isPositive(testPoint)) {
    return search(func, negativePoint, midPoint);
  }
  if (isNegative(testPoint)) {
    return search(func, midPoint, positivePoint);
  }
  return midPoint;
}

function halfIntervalMethod(func, a, b) {
  const firstTerm = func(a);
  const secondTerm = func(b);
  if (isNegative(firstTerm) && isPositive(secondTerm)) {
    return search(func, a, b);
  }
  if (isNegative(secondTerm) && isPositive(firstTerm)) {
    return search(func, b, a);
  }
  return new Error("Value aren't of opposite sign");
}

console.log(halfIntervalMethod(Math.sin, 2, 4));

console.log(halfIntervalMethod((x) => x * x * x - 2 * x - 3, 1, 2));

const tolerance = 0.00001;

function fixedPoint(func, firstGuess) {
  const closeEnough = (x, y) => Math.abs(x - y) < tolerance;
  const tryWith = (guess) => {
    const next = func(guess);
    if (closeEnough(guess, next)) {
      return next;
    }
    return tryWith(next);
  };
  return tryWith(firstGuess);
}

console.log(fixedPoint(Math.cos, 1));
