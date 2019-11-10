const funcitons = {
    showItems: (arrElements) => {
        let message = "";
        console.log("arrElements.length is: " + arrElements.length);
                
        for (let i = 0; i <= arrElements.length; i++) {
            message += arrElements[i].textContent + ", ";
        };
        console.log(message);
        return ("List items are: " + message.substring(0, message.length - 2));
    },

    addItems: () => {
        let listNumbers = document.querySelectorAll("li").length + 1;
        console.log("listNumbers is: " + listNumbers);
        let newLi = document.createElement("li");
        newLi.textContent = `Item ${listNumbers++}`;
        idUl.appendChild(newLi);
    }
};

export default funcitons;