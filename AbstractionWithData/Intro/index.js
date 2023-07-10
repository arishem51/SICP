"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../helper");
function rational(n, d) {
    const g = (0, helper_1.gcd)(n, d);
    return [n / g, d / g];
}
function numer(x) {
    return x[0];
}
function denom(x) {
    return x[1];
}
function addRationals(x, y) {
    const numerValue = {
        x: numer(x),
        y: numer(y),
    };
    const denomValue = {
        x: denom(x),
        y: denom(y),
    };
    return rational(numerValue.x * denomValue.y + numerValue.y * denomValue.x, denomValue.y * denomValue.x);
}
const oneHalf = rational(1, 6);
const oneThird = rational(1, 3);
function printRational(rat) {
    console.log(`The rational number is: ${rat[0]} / ${rat[1]}`);
}
printRational(addRationals(oneHalf, oneThird));
function pair(x, y) {
    return (index) => {
        if (index > 1 || index < 0) {
            return x;
        }
        return [x, y][index];
    };
}
function select(dispatch, index) {
    return dispatch(index);
}
const p = pair(20, 14);
console.log(select(p, 0));
console.log(select(p, 1));
// Counting how many times a value appears in a list/sequence
function counting(items, value) {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i] === value) {
            count++;
        }
    }
    console.log(`${value} has appears ${count} times`);
}
counting([1, 3, 4, 1, 2], 1);
function makeWithDraw(balance) {
    return (amount) => {
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
