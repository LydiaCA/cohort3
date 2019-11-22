/*
There are two version of DOM2 test. This is the second version.
In this version, getCounter, createCard and createButton functions
were all belelived as business logic and were kept in the backend 
dom-functions.js.
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
        idLeftPanel.appendChild(functions.createCard(idLeftPanel));
    };

    if (event.target.id === "idAddBefore") {
        console.log("addBefore location", event.target.parentNode.parentNode);
        nextCount = parseInt(functions.getCounter(idLeftPanel)) + 1;
        idLeftPanel.insertBefore(functions.createCard(idLeftPanel), event.target.parentNode);
    };

    if (event.target.id === "idAddAfter") {
        nextCount = parseInt(functions.getCounter(idLeftPanel)) + 1;
        idLeftPanel.insertBefore(functions.createCard(idLeftPanel), event.target.parentNode.nextSibling);
    };

    if (event.target.id === "idDelete") {
        nextCount = parseInt(functions.getCounter(idLeftPanel)) - 1;
        console.log("event.target.parentNode ", event.target.parentNode.parentNode);
        idLeftPanel.removeChild(event.target.parentNode);
    };
});





