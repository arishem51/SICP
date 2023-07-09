function isNaN(x: number) {
  return Number.isNaN(x);
}

function average(x: number, y: number) {
  return (x + y) / 2;
}

function isEven(x: number) {
  return x % 2 === 0;
}

function square(x: number) {
  return x * x;
}

function increase(x: number) {
  return x + 1;
}

function plus() {
  const args = [...arguments];
  return args.reduce((prev, current) => (prev += current), 0);
}

function minus(x: number, y: number) {
  return x - y;
}

function divide(x: number, y: number) {
  return x / y;
}

function multiply() {
  const args = [...arguments];
  return args.reduce((prev, current) => {
    const value = isNaN(current) ? 1 : current;
    return prev * value;
  }, 1);
}

function isGreater(x: number, y: number) {
  return x > y;
}

export {
  isEven,
  isGreater,
  isNaN,
  increase,
  divide,
  average,
  plus,
  multiply,
  minus,
  square,
};
