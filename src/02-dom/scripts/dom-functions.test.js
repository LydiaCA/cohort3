import functions from "./dom-functions.js"

test("Simple DOM exercise for list-add items", () => {
    let newOl = document.createElement("Ol");
    for (let i = 1; i < 4; i++) {
        let newLi = document.createElement("Li");
        newLi.textContent = `Item ${i}`;
        newOl.appendChild(newLi);
    };
    expect(functions.showItems(newOl.querySelectorAll("Li"))).toBe("List items are: Item 1, Item 2, Item 3");
    functions.addItems(newOl,3);
    expect(newOl.children.length).toBe(4);

});