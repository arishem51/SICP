function makeWithdraw(initialAmount: number) {
  let balance = initialAmount;
  function withdraw(amount: number) {
    if (balance >= amount) {
      balance -= amount;
      return balance;
    }
    return "Insufficient funds";
  }
  function deposit(amount: number) {
    balance += amount;
    return balance;
  }

  function dispatch(m: "withdraw" | "deposit") {
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

function makeSimplifiedWithdraw(balance: number) {
  return (amount: number) => {
    balance -= amount;
    return balance;
  };
}
