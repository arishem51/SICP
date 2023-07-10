"use strict";
function makeWithdraw(initialAmount) {
    let balance = initialAmount;
    function withdraw(amount) {
        if (balance >= amount) {
            balance -= amount;
            return balance;
        }
        return "Insufficient funds";
    }
    function deposit(amount) {
        balance += amount;
        return balance;
    }
    function dispatch(m) {
        if (m === "deposit") {
            return deposit;
        }
        return withdraw;
    }
    return dispatch;
}
const acc = makeWithdraw(100);
console.log(acc("withdraw")(50));
console.log(acc("withdraw")(60));
console.log(acc("deposit")(40));
console.log(acc("withdraw")(60));
function makeSimplifiedWithdraw(balance) {
    return (amount) => {
        balance -= amount;
        return balance;
    };
}
