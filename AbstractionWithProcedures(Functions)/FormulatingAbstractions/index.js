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
  const calculateFirstTerm = (a) => 1 / (a * (a + 2));
  const calculateNextValue = (a) => a + 4;
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
