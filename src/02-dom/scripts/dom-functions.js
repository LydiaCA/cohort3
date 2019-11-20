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
        console.log("max is: " + max);
        return max;
    },



};

export default functions;