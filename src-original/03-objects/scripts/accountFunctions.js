const accountFunctions = {
  createCard: (leftPanel, accountName, accountBalance, key) => {
    
    let newCard = document.createElement("div");
    newCard.setAttribute("key", key);
    newCard.setAttribute("class", "card");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p1t = document.createTextNode("Account " + accountName);
    let p2t = document.createTextNode("Balance " + accountBalance);
    p1.className = 'cardText'
    p2.className = 'cardText'
    p1.appendChild(p1t);
    p2.appendChild(p2t);
    newCard.appendChild(p1);
    newCard.appendChild(p2);

    let input = document.createElement("input");
    input.setAttribute("type", "text");

    newCard.appendChild(input);
    newCard.appendChild(document.createElement("br"));
    newCard.appendChild(accountFunctions.createButton("Deposit"));
    newCard.appendChild(accountFunctions.createButton("Withdraw"));
    newCard.appendChild(document.createElement("br"));

    newCard.appendChild(accountFunctions.createButton("Delete"));

    leftPanel.appendChild(newCard);

    return newCard;
  },

  createButton: buttonText => {

    let newButton = document.createElement("button");
    newButton.setAttribute("class", "button");
    newButton.setAttribute("type", "button");

    newButton.textContent = buttonText;

    return newButton;
  }
};

export default accountFunctions;
