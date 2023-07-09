"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcd = exports.isEqual = exports.square = exports.minus = exports.multiply = exports.plus = exports.average = exports.divide = exports.increase = exports.isNaN = exports.isGreater = exports.isEven = void 0;
function isNaN(x) {
    return Number.isNaN(x);
}
exports.isNaN = isNaN;
function average(x, y) {
    return (x + y) / 2;
}
exports.average = average;
function isEven(x) {
    return x % 2 === 0;
}
exports.isEven = isEven;
function square(x) {
    return x * x;
}
exports.square = square;
function increase(x) {
    return x + 1;
}
exports.increase = increase;
function plus(...numbers) {
    const args = [...arguments];
    return args.reduce((prev, current) => (prev += current), 0);
}
exports.plus = plus;
function minus(x, y) {
    return x - y;
}
exports.minus = minus;
function divide(x, y) {
    return x / y;
}
exports.divide = divide;
function multiply() {
    const args = [...arguments];
    return args.reduce((prev, current) => {
        const value = isNaN(current) ? 1 : current;
        return prev * value;
    }, 1);
}
exports.multiply = multiply;
function isGreater(x, y) {
    return x > y;
}
exports.isGreater = isGreater;
function isEqual(x, y) {
    return x === y;
}
exports.isEqual = isEqual;
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
exports.gcd = gcd;
