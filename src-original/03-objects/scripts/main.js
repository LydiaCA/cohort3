import {Account, AccountController} from "./account.js";
import accountFunctions from "./accountFunctions.js";

let controller = new AccountController();

idAddAccount.addEventListener("click", () => {
  const key = controller.addAccount(idAccount.value, idAmount.value);
  accountFunctions.createCard(idRightPanel, idAccount.value, idAmount.value, key);

});

idRightPanel.addEventListener("click", () => {
  if (event.target.textContent == "Deposit") {
    console.log(event);
    const card = event.target.parentNode;
    const key = card.attributes.key.value;
    controller.userAccounts[key1].deposit(card.children[2].value);
    card.children[1].textContent = 'Balance: ' + controller.userAccounts[key].initialBalance;
  }
  if (event.target.textContent == "Withdraw") {
    console.log(event);
    const card = event.target.parentNode;
    const key = card.attributes.key.value;
    controller.userAccounts[key].withdraw(card.children[2].value);
    card.children[1].textContent = 'Balance: ' + controller.userAccounts[key].initialBalance;
  }
  if (event.target.textContent == "Delete") {
    console.log(event);
    const card = event.target.parentNode;
    const key = card.attributes.key.value;
    controller.removeAccount(key);
    card.remove();
  }

  // let buttonId = "";
  // if (buttonText === "Add Before") buttonId = "idAddBefore";
  // if (buttonText === "Add After") buttonId = "idAddAfter";
  // if (buttonText === "Delete") buttonId = "idDelete";

})
