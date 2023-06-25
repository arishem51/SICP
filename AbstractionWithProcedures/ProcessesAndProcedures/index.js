// Linear Recursion and Iteration

// n! = n * (n - 1) * (n - 2)...

const STOP_POINT = 1;

function factorial(n) {
  if (n === STOP_POINT) {
    return STOP_POINT;
  }
  return n * factorial(n - 1);
}

// Another approach
// Multiply until reach to n, => 1 * 2 * 3 * ... * n

function factorialV2(n) {
  return generateProductNum(1, 1, n);
}

function generateProductNum(product, counter, maxCount) {
  if (counter <= maxCount) {
    return generateProductNum(product * counter, counter + 1, maxCount);
  }
  return product;
}

console.log(factorial(6));
console.log(factorialV2(6));
