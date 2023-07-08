function isNaN(x) {
  return Number.isNaN(x);
}

function average(x, y) {
  return (x + y) / 2;
}

function isEven(x) {
  return x % 2 === 0;
}

function square(x) {
  return x * x;
}

function increase(x) {
  return x + 1;
}

function plus() {
  const args = [...arguments];
  return args.reduce((prev, current) => (prev += current), 0);
}

function minus(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply() {
  const args = [...arguments];
  return args.reduce((prev, current) => {
    const value = isNaN(current) ? 1 : current;
    return prev * value;
  }, 1);
}

function isGreater(a, b) {
  return a > b;
}

exports.average = average;
exports.isEven = isEven;
exports.square = square;
exports.increase = increase;
exports.plus = plus;
exports.minus = minus;
exports.divide = divide;
exports.multiply = multiply;
exports.isGreater = isGreater;
