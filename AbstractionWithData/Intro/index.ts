import { gcd } from "../../helper";

type DispatchAction = (m: number) => number;

function makeRationalNum(x: number, y: number) {
  return pair(x, y);
}

function getNumerator(x: DispatchAction) {
  const g = gcd(head(x), tail(x));
  return head(x) / g;
}
function getDenominator(x: DispatchAction) {
  const g = gcd(head(x), tail(x));
  return tail(x) / g;
}

function pair(x: number, y: number): DispatchAction {
  function dispatch(m: number) {
    if (m === 1 || m === 0) {
      return [x, y][m];
    }
    return x;
  }
  return dispatch;
}

function head(z: DispatchAction) {
  return z(0);
}
function tail(z: DispatchAction) {
  return z(1);
}

function add_rat(x: DispatchAction, y: DispatchAction) {
  return makeRationalNum(
    getNumerator(x) * getDenominator(y) + getNumerator(y) * getDenominator(x),
    getDenominator(x) * getDenominator(y)
  );
}

// function sub_rat(x: number, y: number) {
//   return makeRationalNum(
//     getNumerator(x) * getDenominator(y) - getNumerator(y) * getDenominator(x),
//     getDenominator(x) * getDenominator(y)
//   );
// }
// function mul_rat(x: number, y: number) {
//   return makeRationalNum(getNumerator(x) * getNumerator(y), getDenominator(x) * getDenominator(y));
// }
// function div_rat(x: number, y: number) {
//   return makeRationalNum(getNumerator(x) * getDenominator(y), getDenominator(x) * getNumerator(y));
// }
// function equal_rat(x: number, y: number) {
//   return getNumerator(x) * getDenominator(y) === getNumerator(y) * getDenominator(x);
// }
const oneThird = makeRationalNum(1, 3);
const oneFirth = makeRationalNum(1, 5);
const result = add_rat(oneThird, oneFirth);

console.log(`${getNumerator(result)} / ${getDenominator(result)}`);
