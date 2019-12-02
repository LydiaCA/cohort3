import Account from "./account.js";
import accountFunctions from "./accountFunctions.js";

idAddAccount.addEventListener("click", () => {
  let account1 = new Account(idAccount.value, idAmount.value);
  console.log(account1.account);

  accountFunctions.createCard(idRightPanel, idAccount.value);
});
