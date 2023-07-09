import { divide, gcd, isEqual, minus, plus } from "../../helper";

type PairNumber =
  | {
      head: number;
      tail: number;
    }
  | number;

const makePairNum = (x: number, y: number): PairNumber => ({
  head: x,
  tail: y,
});

function getPairPart(type: "head" | "tail") {
  return (x: PairNumber) => {
    if (typeof x === "number") {
      return x;
    }
    return type === "head" ? x.head : x.tail;
  };
}

const getHead = getPairPart("head");
const getTail = getPairPart("tail");

function makeRationalNum(numerator: number, denominator: number) {
  const g = gcd(numerator, denominator);
  return makePairNum(divide(numerator, g), divide(denominator, g));
}

const getNumerator = getHead;
const getDenominator = getTail;

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

function subRationalNum(x: number, y: number) {
  return makeRationalNum(
    minus(
      multiplyNumerDenom({ toNumerator: x, toDenominator: y }),
      multiplyNumerDenom({ toNumerator: y, toDenominator: x })
    ),
    multiplyDenominator(x, y)
  );
}

function multiplyRationalNum(x: number, y: number) {
  return makeRationalNum(
    multiplyNumerDenom({ toNumerator: x, toDenominator: y }),
    multiplyDenominator(x, y)
  );
}

function dividedRationalNum(x: number, y: number) {
  return makeRationalNum(
    multiplyNumerDenom({ toNumerator: x, toDenominator: y }),
    multiplyNumerDenom({ toNumerator: y, toDenominator: x })
  );
}

function isRationalNumEqual(x: number, y: number) {
  return isEqual(
    multiplyNumerDenom({ toNumerator: x, toDenominator: y }),
    multiplyNumerDenom({ toNumerator: y, toDenominator: x })
  );
}

const printRat = (x: PairNumber) => {
  const numerator = getNumerator(x);
  const denominator = getDenominator(x);
  console.log(`${numerator}/${denominator}`);
};

const oneHalf = makeRationalNum(1, 2);
const oneThird = makePairNum(1, 3);

printRat(oneHalf);
printRat(oneThird);
printRat(addRationalNum(oneThird, oneThird));
