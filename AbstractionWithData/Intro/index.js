"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../helper");
const makePairNum = (x, y) => {
    function dispatch(m) {
        if (m === 0) {
            return x;
        }
        if (m === 1) {
            return y;
        }
        return new Error(`${m}, The argument you provide is not 0 or 1 -- pair `);
    }
    return dispatch;
};
function getRationalNumPart(type) {
    return (x) => {
        const g = (0, helper_1.gcd)(getHead(x), getTail(x));
        return (0, helper_1.divide)(type === "numerator" ? getHead(x) : getTail(x), g);
    };
}
const getHead = (x) => x(0);
const getTail = (x) => x(1);
const makeRationalNum = makePairNum;
const getNumerator = getRationalNumPart("numerator");
const getDenominator = getRationalNumPart("numerator");
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
