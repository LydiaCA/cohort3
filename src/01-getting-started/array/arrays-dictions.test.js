import functions from "./arrays-dictions.js"

/* Working with Arrays */
test("Add elements works?", () => {
    // expect(functions.addElements([], "")).toBe([undefined]);
    expect(functions.addElements([1], 2)).toStrictEqual([1, 2]);
    expect(functions.addElements([1, 2], 3)).toStrictEqual([1, 2, 3]);
});

test("Total elements works?", () => {
    expect(functions.totalElements([1, 2, 3])).toBe(6);
});

test("Clear elements works?", () => {
    expect(functions.emptyElements([1, 2, 3])).toStrictEqual([]);
});

test("Province lookup works?", () => {
    const dict = {
        ab: "Alberta",
        bc: "British Columbia",
        mb: "Manitoba",
        nb: "New Brunswick",
        nl: "Newfoundland and Labrador",
        ns: "Nova Scotia",
        nt: "Northwest Territories",
        nu: "Nunavut",
        on: "Ontario",
        pe: "Prince Edward Island",
        qc: "Quebec",
        sk: "Saskatchewan",
        yt: "Yukon",
    };
    expect(functions.provinceLookup(dict, "")).toEqual(undefined);
    expect(functions.provinceLookup(dict, "ab")).toEqual("Alberta");

});
