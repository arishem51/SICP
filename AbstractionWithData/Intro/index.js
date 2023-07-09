"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../helper");
const makePairNum = (x, y) => ({
    head: x,
    tail: y,
});
function getPairPart(type) {
    return (x) => {
        if (typeof x === "number") {
            return x;
        }
        return type === "head" ? x.head : x.tail;
    };
}
const getHead = getPairPart("head");
const getTail = getPairPart("tail");
function makeRationalNum(numerator, denominator) {
    const g = (0, helper_1.gcd)(numerator, denominator);
    return makePairNum((0, helper_1.divide)(numerator, g), (0, helper_1.divide)(denominator, g));
}
const getNumerator = getHead;
const getDenominator = getTail;
function multiplyDenominator(x, y) {
    return getDenominator(x) * getDenominator(y);
}
function multiplyNumerDenom({ toNumerator, toDenominator, }) {
    return getNumerator(toNumerator) * getDenominator(toDenominator);
}
function addRationalNum(x, y) {
    return makeRationalNum((0, helper_1.plus)(multiplyNumerDenom({ toNumerator: x, toDenominator: y }), multiplyNumerDenom({ toNumerator: y, toDenominator: x })), multiplyDenominator(x, y));
}
function subRationalNum(x, y) {
    return makeRationalNum((0, helper_1.minus)(multiplyNumerDenom({ toNumerator: x, toDenominator: y }), multiplyNumerDenom({ toNumerator: y, toDenominator: x })), multiplyDenominator(x, y));
}
function multiplyRationalNum(x, y) {
    return makeRationalNum(multiplyNumerDenom({ toNumerator: x, toDenominator: y }), multiplyDenominator(x, y));
}
function dividedRationalNum(x, y) {
    return makeRationalNum(multiplyNumerDenom({ toNumerator: x, toDenominator: y }), multiplyNumerDenom({ toNumerator: y, toDenominator: x }));
}
function isRationalNumEqual(x, y) {
    return (0, helper_1.isEqual)(multiplyNumerDenom({ toNumerator: x, toDenominator: y }), multiplyNumerDenom({ toNumerator: y, toDenominator: x }));
}
const printRat = (x) => {
    const numerator = getNumerator(x);
    const denominator = getDenominator(x);
    console.log(`${numerator}/${denominator}`);
};
const oneHalf = makeRationalNum(1, 2);
const oneThird = makePairNum(1, 3);
printRat(oneHalf);
printRat(oneThird);
printRat(addRationalNum(oneThird, oneThird));
