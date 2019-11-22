const functions = {
    showItems: (arrElements) => { // input is an array of Li elements
        let message = "";
        for (let i = 0; i < arrElements.length; i++) {
            message += arrElements[i].textContent + ", ";
        };
        return ("List items are: " + message.substring(0, message.length - 2));
    },

    addItems: (arrElements, childNumber) => {
        let newLi = document.createElement("li");
        newLi.textContent = `Item ${++childNumber}`;
        arrElements.appendChild(newLi);
    },

    getCounter: (leftPanelDiv) => {
        let arrCards = leftPanelDiv.querySelectorAll("div");
        let max = 0;
        for (let i = 1; i < arrCards.length; i++) {
                if (max <= parseInt(arrCards[i].getAttribute("count")))
                max = arrCards[i].getAttribute("count");
        };
        return max;
    },

    counter: 0,

    createCard: (leftPanel) => {
        functions.counter++;
        
        let newCard = document.createElement("div");
        newCard.setAttribute("count", functions.counter);
        newCard.setAttribute("class", "card");
        newCard.textContent=`Card ${functions.counter}`

        newCard.appendChild(document.createElement("br"));
        newCard.appendChild(functions.createButton(("Add Before")));
        newCard.appendChild(functions.createButton(("Add After")));
        newCard.appendChild(document.createElement("br"));

        newCard.appendChild(functions.createButton(("Delete")));

        leftPanel.appendChild(newCard);
        
        return newCard;
    },

    createButton: (buttonText) => {
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
    },

    addBefore:(leftPanel, card) => {
        leftPanel.insertBefore(functions.createCard(leftPanel), card); 
    },

    addAfter:(leftPanel, card) => {
        leftPanel.insertBefore(functions.createCard(leftPanel), card.nextSibling);
    },

    delete:(leftPanel, card) => {
        leftPanel.removeChild(card);
    }
};

export default functions;