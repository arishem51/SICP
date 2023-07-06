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

// Example: Counting Change

function countChange(amount) {
  return cc(amount, 5);
}

function cc(amount, kindsOfCoins) {
  if (amount === 0) {
    return 1;
  }
  if (amount < 0 || kindsOfCoins === 0) {
    return 0;
  }
  return (
    cc(amount, kindsOfCoins - 1) +
    cc(amount - firstDenomination(kindsOfCoins), kindsOfCoins)
  );
}

function firstDenomination(kindsOfCoins) {
  if (kindsOfCoins === 1) {
    return 1;
  }
  if (kindsOfCoins === 2) {
    return 5;
  }
  if (kindsOfCoins === 3) {
    return 10;
  }
  if (kindsOfCoins === 4) {
    return 20;
  }
  if (kindsOfCoins === 5) {
    return 25;
  }

  return 0;
}

console.log(countChange(100));

// Exponentiation

// b = 2, n = 5 => 2 * 2^0 * 2 ^ 1 * 2 ^ 2 * ... 2 ^5

function expt(b, n) {
  return n === 0 ? 1 : b * expt(b, n - 1);
}

function exptV2(b, n) {
  function iterative(total, counter) {
    if (counter === 0) {
      return total;
    }
    return iterative(total * b, counter - 1);
  }

  return iterative(1, n);
}

console.log(expt(2, 3), exptV2(2, 3));

function fastExpt(b, n) {
  if (n === 0) {
    return 1;
  }
  if (isEven(n)) {
    return square(fastExpt(b, n / 2));
  }
  return b * fastExpt(b, n - 1);
}

function isEven(n) {
  return n % 2 === 0;
}

function square(n) {
  return n * n;
}

console.log(fastExpt(2, 3));

// Greatest Common Divisors

function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

console.log(gcd(16, 32));

function smallestDivisor(n) {
  function findDivisor(n, testDivisor) {
    if (square(testDivisor) > n) {
      return n;
    }
    if (divides(testDivisor, n)) {
      return testDivisor;
    }
    return findDivisor(n, testDivisor + 1);
  }

  function divides(a, b) {
    return b % a === 0;
  }

  return findDivisor(n, 2);
}

function isPrime(n) {
  return n === smallestDivisor(n);
}

console.log(isPrime(16));
