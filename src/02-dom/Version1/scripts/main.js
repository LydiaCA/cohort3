/*
There are two version of DOM2 test. This is the first version.
In this version, only getCounter was belelived as a business logic 
and was kept in the backend dom-functions.js. And therefore in the test
only testing if the counter is correct.

The createCard and createButton functions were believed presentation,
and were kept in the main.js. The test for them were through HTML webpage.
*/

import functions from "./dom-functions.js"

idShow.addEventListener("click", () => {
    let listItems = document.querySelectorAll("li");
    idMessage.textContent = functions.showItems(listItems);
});

idAdd.addEventListener("click", () => {
    functions.addItems(idOl, document.querySelectorAll("li").length);
});

idLeftPanel.addEventListener("click", () => {
    let nextCount = 0;
    if (event.target.id === "idAddCard") {
        nextCount = parseInt(functions.getCounter(idLeftPanel)) + 1;
        idLeftPanel.appendChild(createCard(nextCount));
    };

    if (event.target.id === "idAddBefore") {
        nextCount = parseInt(functions.getCounter(idLeftPanel)) + 1;
        idLeftPanel.insertBefore(createCard(nextCount), event.target.parentNode.parentNode);
    };

    if (event.target.id === "idAddAfter") {
        nextCount = parseInt(functions.getCounter(idLeftPanel)) + 1;
        idLeftPanel.insertBefore(createCard(nextCount), event.target.parentNode.parentNode.nextSibling);
    };

    if (event.target.id === "idDelete") {
        nextCount = parseInt(functions.getCounter(idLeftPanel)) - 1;
        idLeftPanel.removeChild(event.target.parentNode.parentNode);
    };
});


function createButton(buttonText) {
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
};

function createCard(cardNumber) {
    let newCard = document.createElement("div");
    let b = document.createElement("b");
    let title = document.createTextNode(`Card ${cardNumber}`);
    b.appendChild(title);

    newCard.setAttribute("class", "card");
    newCard.setAttribute("count", cardNumber);
    

    newCard.appendChild(document.createElement("br"));

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.appendChild(createButton("Add Before"));
    p1.appendChild(createButton("Add After"));

    newCard.appendChild(document.createElement("br"));
    p2.appendChild(createButton("Delete"));

    newCard.appendChild(b);
    newCard.appendChild(p1);
    newCard.appendChild(p2);
    return newCard;
};
 



