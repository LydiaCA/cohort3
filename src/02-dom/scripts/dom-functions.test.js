import functions from "./dom-functions.js"

test("Simple DOM exercise for list-add items", () => {
    console.log("Hello from DOM functions.test.js");
    let newOl= document.createElement("Ol");

    for (let i = 0; i < 3; i++) {
        let newLi= document.createElement("Li");
        newLi.textContent = `Item ${i}`;
        newOl.appendChild(newLi);
        console.log(newLi.textContent);
    };
    console.log((newOL.querySelectorAll("Li")));
    expect(functions.showItems(newOl.querySelectorAll("Li"))).toBe("List items are: Item 1, Item 2, Item 3");
});