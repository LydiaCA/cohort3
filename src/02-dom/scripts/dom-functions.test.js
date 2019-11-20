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
    functions.addItems(newOl,3);
    expect(newOl.children.length).toBe(4);

});

test("Actions with Cards", () => {
    let leftPanelDiv = document.createElement("div");
    let childDiv = document.createElement("div");
    let title = document.createTextNode("Card 1");
    let addBeforeButton = document.createElement("button");
    let addAfterButton = document.createElement("button");
    let DelButton = document.createElement("button");
    
    //childDiv.textContent = `Count ${count}`;
    childDiv.setAttribute("count", 1);
    childDiv.appendChild(title);
    childDiv.appendChild(addBeforeButton);
    childDiv.appendChild(addAfterButton);
    childDiv.appendChild(DelButton);
    leftPanelDiv.appendChild(childDiv);

    console.log("in the test", leftPanelDiv.childNodes.length);
    console.log("in the test", childDiv.getAttribute("count"));
    functions.getCounter(leftPanelDiv);
    expect(leftPanelDiv.childern.length).toBe(2);

})