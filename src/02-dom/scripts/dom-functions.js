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

    addCards: (leftPanelDiv) => {
        console.log("in the function", leftPanelDiv.childNodes.length);
        //let arrCards = leftPanelDiv.querySelectorAll("div");
        let arrCards = leftPanelDiv.childNodes;
        // console.log(arrCards);
        // let cardNumber = arrCards;
        // let txt = "";
        let max = 0;
        for (let i = 0; i < arrCards.length; i++) {
            console.log("arrcards[i] is: ", arrCards[i]);
            console.log("count is: ", parseInt(arrCards[i].getAttribute("count")));
            if (max <= parseInt(arrCards[i].getAttribute("count")))
                max = arrCards[i].getAttribute("count");
        };
        console.log("max is: " + max);
        //     txt = txt + arrCards[i].nodeName;
        // }
        // console.log("card", txt);
        // ...
        // 
        // for (let i = 0; i < cardNumber; i++) {
        //     console.log("count is: ", pareInt(arrCards[i].getAttribute("count")));
        //     if (max <= pareInt(arrCards[i].getAttribute("count")))
        //         max = arrCards[i].getAttribute("count");
        // };
        // console.log("max is: " + max);

        let newCard = document.createElement("div");
        let title = document.createTextNode('Card ${divNumber}');
        let addBeforeButton = document.createElement("button");
        let addAfterButton = document.createElement("button");
        let delButton = document.createElement("button");

        newCard.appendChild(title);
        newCard.appendChild(addBeforeButton);
        newCard.appendChild(addAfterButton);

        newCard.appendChild(delButton);

        // newLi.textContent = `Item ${++childNumber}`;
        // arrElements.appendChild(newLi);

        // newCard.setAttribute("count") = 'Card ${i}';
    },

};

export default functions;