class Account {
  constructor(accountId, accountName, startingBalance) {
    this.account = accountName;
    this.accountId = accountId;
    this.initialBalance = startingBalance;
  }

  deposit(amount) {
    this.initialBalance = Number(amount) + Number(this.initialBalance);
  }

  withdraw(amount) {
    this.initialBalance = Number(this.initialBalance) - Number(amount);
  }

  // balance() {}
}

class AccountController {
  constructor() {
    this.userAccounts = {};
    this.nextKey = 0;
  }

  addAccount(accountName, startingBalance) {
    let acc = new Account(this.nextKey, accountName, startingBalance);
    this.userAccounts[this.nextKey] = acc;
    this.nextKey++;
    return this.nextKey - 1;
  }

  removeAccount(accountId) {
    delete this.userAccounts[accountId];
  }

  totalBalance() {
    let sum = 0;
    for (const property in this.userAccounts) {
      sum += property.initialBalance;
    }
    return sum;
  }

  highestValueAccount() {
    let highestAccount;
    Object.values(this.userAccounts).reduce(
      (highestBalance, currentAccount) => {
        if (currentAccount.initialBalance > highestBalance) {
          highestAccount = currentAccount;
          highestBalance = currentAccount.initialBalance;
        }
      }
    );
    return highestAccount;
  }

  lowestValueAccount() {
    let lowestAccount;
    Object.values(this.userAccounts).reduce((lowestBalance, currentAccount) => {
      if (currentAccount.initialBalance < lowestBalance) {
        lowestAccount = currentAccount;
        lowestBalance = currentAccount.initialBalance;
      }
    });
    return lowestAccount;
  }
}
export { Account, AccountController };
