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
    }
};

export default functions;