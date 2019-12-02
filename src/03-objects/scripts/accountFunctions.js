const accountFunctions = {
  counter: 0,
  createCard: (leftPanel, accountName) => {
    accountFunctions.counter++;

    let newCard = document.createElement("div");
    newCard.setAttribute("count", accountFunctions.counter);
    newCard.setAttribute("class", "card");
    newCard.textContent = `Account ${accountName}`;

    newCard.appendChild(document.createElement("br"));
    newCard.appendChild(accountFunctions.createButton("Deposit"));
    newCard.appendChild(accountFunctions.createButton("Withdraw"));
    newCard.appendChild(document.createElement("br"));

    newCard.appendChild(accountFunctions.createButton("Delete"));

    leftPanel.appendChild(newCard);

    return newCard;
  },

  createButton: buttonText => {
    let buttonId = "";
    if (buttonText === "Add Before") buttonId = "idAddBefore";
    if (buttonText === "Add After") buttonId = "idAddAfter";
    if (buttonText === "Delete") buttonId = "idDelete";

    let newButton = document.createElement("button");
    newButton.setAttribute("class", "button");
    newButton.setAttribute("type", "button");
    newButton.setAttribute("id", buttonId);
    newButton.textContent = buttonText;

    return newButton;
  }
};

export default accountFunctions;
