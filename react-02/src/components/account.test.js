import { Account } from "./account.js";

let user1 = new Account(1, "Alex", 100);

test("Test for Deposit", () => {
  user1.deposit(200);
  expect(user1.currentBalance).toBe(300);
});

test("Test for Withdraw", () => {
  user1.withdraw(200);
  expect(user1.currentBalance).toBe(100);
});
