// Linear Recursion and Iteration

const ZERO = 0;
const ONE = 1;

// n! = n * (n - 1) * (n - 2)...

function factorial(n) {
  if (n === ONE) {
    return n;
  }
  return n * factorial(n - ONE);
}

// Another approach
// Multiply until reach to n, => 1 * 2 * 3 * ... * n

function factorialV2(n) {
  return generateProductNum(ONE, ONE, n);
}

function generateProductNum(product, counter, maxCount) {
  if (counter <= maxCount) {
    return generateProductNum(product * counter, counter + 1, maxCount);
  }
  return product;
}

console.log(factorial(6));
console.log(factorialV2(6));

// Tree Recursion

// Fibonacci

function fibonacci(num) {
  if (num === ZERO || num === ONE) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(4));
