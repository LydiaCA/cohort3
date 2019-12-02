class Account {
  constructor(accountName, startingBalance) {
    this.account = accountName;
    this.initialBalance = startingBalance;
  }

  deposit(amount) {
    console.log("amount is: ", amount);
    console.log(this.initialBalance);
    this.initialBalance += Number(amount);
    console.log(this.initialBalance);
  }

  withdraw(amount) {
    this.initialBalance -= amount;
  }

  // balance() {}
}

export default Account;
