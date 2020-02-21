class Account {
  constructor(accountId, accountName, startingBalance) {
    this.account = accountName;
    this.accountId = accountId;
    this.currentBalance = startingBalance;
  }

  deposit(amount) {
    this.currentBalance = Number(amount) + Number(this.currentBalance);
  }

  withdraw(amount) {
    this.currentBalance = Number(this.currentBalance) - Number(amount);
  }

  // balance() {}
}

class AccountController {
  constructor() {
    this.userAccounts = [];
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
      sum += property.currentBalance;
    }
    return sum;
  }

  highestValueAccount() {
    let highestAccount;
    Object.values(this.userAccounts).reduce(
      (highestBalance, currentAccount) => {
        if (currentAccount.currentBalance > highestBalance) {
          highestAccount = currentAccount;
          highestBalance = currentAccount.currentBalance;
        }
      }
    );
    return highestAccount;
  }

  lowestValueAccount() {
    let lowestAccount;
    Object.values(this.userAccounts).reduce((lowestBalance, currentAccount) => {
      if (currentAccount.currentBalance < lowestBalance) {
        lowestAccount = currentAccount;
        lowestBalance = currentAccount.currentBalance;
      }
    });
    return lowestAccount;
  }
}
export { Account, AccountController };
