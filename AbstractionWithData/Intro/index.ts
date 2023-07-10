import { divide, gcd, isEqual, minus, plus } from "../../helper";

type PairNumber = number[];

const makePairNum = (x: number, y: number) => {
  const arr = [x, y];
  function dispatch(m: number) {
    if (m === 0 || m === 1) {
      return arr[m];
    }
    return new Error(`${m}, The argument you provide is not 0 or 1 -- pair `);
  }
  return dispatch;
};

function getRationalNumPart(type: "numerator" | "denominator") {
  return (x: PairNumber) => {
    const g = gcd(getHead(x), getTail(x));
    return divide(type === "numerator" ? getHead(x) : getTail(x), g);
  };
}

const getHead = (x: any) => x(0);
const getTail = (x: any) => x(1);

const makeRationalNum = makePairNum;

const getNumerator = getRationalNumPart("numerator");

const getDenominator = getRationalNumPart("numerator");

function multiplyDenominator(x: PairNumber, y: PairNumber) {
  return getDenominator(x) * getDenominator(y);
}

function multiplyNumerDenom({
  toNumerator,
  toDenominator,
}: {
  toNumerator: PairNumber;
  toDenominator: PairNumber;
}) {
  return getNumerator(toNumerator) * getDenominator(toDenominator);
}

function addRationalNum(x: PairNumber, y: PairNumber) {
  return makeRationalNum(
    plus(
      multiplyNumerDenom({ toNumerator: x, toDenominator: y }),
      multiplyNumerDenom({ toNumerator: y, toDenominator: x })
    ),
    multiplyDenominator(x, y)
  );
}

// function subRationalNum(x: number, y: number) {
//   return makeRationalNum(
//     minus(
//       multiplyNumerDenom({ toNumerator: x, toDenominator: y }),
//       multiplyNumerDenom({ toNumerator: y, toDenominator: x })
//     ),
//     multiplyDenominator(x, y)
//   );
// }

// function multiplyRationalNum(x: number, y: number) {
//   return makeRationalNum(
//     multiplyNumerDenom({ toNumerator: x, toDenominator: y }),
//     multiplyDenominator(x, y)
//   );
// }

// function dividedRationalNum(x: number, y: number) {
//   return makeRationalNum(
//     multiplyNumerDenom({ toNumerator: x, toDenominator: y }),
//     multiplyNumerDenom({ toNumerator: y, toDenominator: x })
//   );
// }

// function isRationalNumEqual(x: number, y: number) {
//   return isEqual(
//     multiplyNumerDenom({ toNumerator: x, toDenominator: y }),
//     multiplyNumerDenom({ toNumerator: y, toDenominator: x })
//   );
// }

const printRat = (x: PairNumber) => {
  const numerator = getNumerator(x);
  const denominator = getDenominator(x);
  console.log(`${numerator}/${denominator}`);
};

const oneHalf = makeRationalNum(1, 2);
const oneThird = makePairNum(1, 3);
