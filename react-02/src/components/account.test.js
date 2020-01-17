import Account from "./account.js";

let user1 = new Account("Alex", 100);

test("Test for Deposit", () => {
  user1.deposit(200);
  expect(user1.initialBalance).toBe(300);
});

test("Test for Withdraw", () => {
  user1.withdraw(200);
  expect(user1.initialBalance).toBe(100);
});
