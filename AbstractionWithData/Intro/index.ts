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
