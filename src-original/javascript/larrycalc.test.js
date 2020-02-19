import functions from "./larrycalc"

test("Larry's test", () => {
    //console.log("Hello World.");
    functions.HelloWorld("Hello from Larry!");
    functions.sum(7,2);
    expect(functions.sum(7,2)).toBe(9);
}
)