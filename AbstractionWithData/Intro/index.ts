import { gcd } from "../../helper";

function rational(n: number, d: number) {
  const g = gcd(n, d);
  return [n / g, d / g];
}

function numer(x: number[]) {
  return x[0];
}

function denom(x: number[]) {
  return x[1];
}

function addRationals(x: number[], y: number[]) {
  const numerValue = {
    x: numer(x),
    y: numer(y),
  };
  const denomValue = {
    x: denom(x),
    y: denom(y),
  };
  return rational(
    numerValue.x * denomValue.y + numerValue.y * denomValue.x,
    denomValue.y * denomValue.x
  );
}

const oneHalf = rational(1, 6);
const oneThird = rational(1, 3);

function printRational(rat: number[]) {
  console.log(`The rational number is: ${rat[0]} / ${rat[1]}`);
}

printRational(addRationals(oneHalf, oneThird));

type DispatchAction = (index: number) => number;

function pair(x: number, y: number): DispatchAction {
  return (index: number) => {
    if (index > 1 || index < 0) {
      return x;
    }
    return [x, y][index];
  };
}

function select(dispatch: DispatchAction, index: number) {
  return dispatch(index);
}

const p = pair(20, 14);

console.log(select(p, 0));
console.log(select(p, 1));

// Counting how many times a value appears in a list/sequence

function counting(items: number[], value: number) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i] === value) {
      count++;
    }
  }
  console.log(`${value} has appears ${count} times`);
}

counting([1, 3, 4, 1, 2], 1);

function makeWithDraw(balance: number) {
  return (amount: number) => {
    const rest = balance - amount;
    if (rest < 0) {
      return "Don't have enough amount";
    }
    balance -= amount;
    return rest;
  };
}

const withDraw = makeWithDraw(100);

console.log(withDraw(25));
console.log(withDraw(55));
console.log(withDraw(25));
