const pair = (numer, denom) => ({
  numer,
  denom,
});

const head = ({ numer }) => numer;
const tail = ({ denom }) => denom;

const makeRatNum = pair;

// Numerator
const numer = head;

// Denominator
const denom = tail;

const addRat = (x, y) => {
  return makeRatNum(
    numer(x) * denom(y) + numer(y) * denom(x),
    denom(x) * denom(y)
  );
};

const subRat = (x, y) => {
  return makeRatNum(
    numer(x) * denom(y) - numer(y) * denom(x),
    denom(x) * denom(y)
  );
};
const mulRat = (x, y) => {
  return makeRatNum(numer(x) * numer(y), denom(x) * denom(y));
};
const divRat = (x, y) => {
  return makeRatNum(numer(x) * denom(y), denom(x) * numer(y));
};
const isEqualRat = (x, y) => {
  return numer(x) * denom(y) === numer(y) * denom(x);
};

const printRatNum = (ratNumber) => {
  console.log(`${numer(ratNumber)} / ${denom(ratNumber)}`);
};

const RatNumberMethod = {
  add: addRat,
  sub: subRat,
  divide: divRat,
  multiply: mulRat,
  isEqual: isEqualRat,
  print: printRatNum,
};

const oneHalf = makeRatNum(1, 2);

RatNumberMethod.print(oneHalf);
