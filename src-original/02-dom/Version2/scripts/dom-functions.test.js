import functions from "./dom-functions.js"

test("Simple DOM exercise for list-add items", () => {
    let newOl = document.createElement("Ol");
    for (let i = 1; i < 4; i++) {
        let newLi = document.createElement("Li");
        newLi.textContent = `Item ${i}`;
        newOl.appendChild(newLi);
    };
    expect(functions.showItems(newOl.querySelectorAll("Li"))).toBe("List items are: Item 1, Item 2, Item 3");

    // test for add items function.
    functions.addItems(newOl, 3);
    expect(newOl.children.length).toBe(4);

});

test("Actions with Cards - DOM2", () => {

    //Test Setup
    functions.counter = 0;
    const leftPanel = document.createElement("div");
    let leftPanelChildCount = leftPanel.childElementCount;

    //Call function
    functions.createCard(leftPanel);

    //Test effects of the function of counter,create card and create button 
    expect(functions.counter).toEqual(1);
    expect(leftPanel.childElementCount).toEqual(leftPanelChildCount + 1);
    expect(leftPanel.lastChild.textContent).toEqual("Card 1"+"Add Before"+"Add After"+"Delete");

    //Test addBefore, addAfter, delete functions
    functions.addBefore(leftPanel, leftPanel.lastChild);
    expect(leftPanel.firstChild.childNodes[0].textContent).toEqual("Card 2");
    
    functions.addAfter(leftPanel, leftPanel.lastChild);
    expect(leftPanel.lastChild.childNodes[0].textContent).toEqual("Card 3");
    
    functions.delete(leftPanel, leftPanel.lastChild);
    expect(leftPanel.lastChild.childNodes[0].textContent).toEqual("Card 1");
    
//--------------ignore below part ----
    //Test button functions
    // expect(functions.addBefore(event.target).).toBe

    let leftPanelDiv = document.createElement("div");
    let childDiv = document.createElement("div");
    let title = document.createTextNode("Card 1");
    let addBeforeButton = document.createElement("button");
    let addAfterButton = document.createElement("button");
    let DelButton = document.createElement("button");

    childDiv.setAttribute("count", 1);
    childDiv.appendChild(title);
    childDiv.appendChild(addBeforeButton);
    childDiv.appendChild(addAfterButton);
    childDiv.appendChild(DelButton);
    leftPanelDiv.appendChild(childDiv);

    functions.getCounter(leftPanelDiv);
    expect(leftPanelDiv.childElementCount).toBe(1);
});