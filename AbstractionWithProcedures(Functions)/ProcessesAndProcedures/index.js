// Linear Recursion and Iteration

const createIsEqualToNumber = (numberToEqual) => {
  return (numberToCompare) => {
    return numberToCompare === numberToEqual;
  };
};

const isZero = createIsEqualToNumber(0);
const isOne = createIsEqualToNumber(1);

const reduceOne = (numToReduce) => {
  return numToReduce - 1;
};

// n! = n * (n - 1) * (n - 2)...

function factorial(n) {
  if (isOne(n)) {
    return n;
  }
  return n * factorial(reduceOne(n));
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

// Tree Recursion

// Fibonacci --> f(n) = f(n - 1) + f(n - 2)

function fibonacci(num) {
  if (isZero(num) || isOne(num)) {
    return num;
  }
  return fibonacci(reduceOne(num)) + fibonacci(num - 2);
}

// 4 => fib(3) + fib(2) => fib(1) + fib(2) + fib(1) + fib(0) + 1 + 1 + 0 + 1 + 0

function fibonacciV2(num) {
  return fibIter(1, 0, num);
}

function fibIter(first, second, count) {
  if (isZero(count)) {
    return second;
  }
  return fibIter(first + second, first, reduceOne(count));
}

// 4 => fib(1,0,4) => fib(1,1,3) => fib(2, 1,2) => fib(3,2,1) => fib(5,3,0)

console.log(fibonacci(4), fibonacciV2(4));

// f(n) = n if n < 3 and f(n) = f(n – 1) + 2f(n – 2) + 3f(n – 3) if n >= 3

// f(4) = f(3) + 2f(2) + 3f(1) = f(2) + 2f(1) + 3f(0) + 4 + 3 = 2 + 2 + 0 + 4 + 3 = 11

function exercise111(number) {
  if (number < 3) {
    return number;
  }
  return (
    exercise111(reduceOne(number)) +
    2 * exercise111(number - 2) +
    3 * exercise111(number - 3)
  );
}

function exercise111V2(number) {
  // V2 content
  return number;
}

console.log(exercise111(4), exercise111V2(4));

// test

// 6 => 6 + 5 + 4 + 3 ... + 0;

function sumRecursive(number) {
  if (number > 1) {
    return number + sumRecursive(number - 1);
  }
  return 1;
}

function sumIterative(number) {
  function iterative(total, count) {
    if (count <= number) {
      return iterative(total + count, count + 1);
    }
    return total;
  }

  return iterative(0, 0);
}

console.log(sumIterative(3));
