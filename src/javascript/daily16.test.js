import functions from './daily16'

test('Check for More Array Work - October 16-17', () => {
    var cars = ["Honda", "BMW", "Toyota"];
    var fruit = ["Apple", "Orange", "Lemon", "Banana"];
    expect(functions.arraySlice(cars,1)).toEqual(["BMW", "Toyota"]);
    // expect(functions.arraySplice(2, 0, "Pear", "Grape")).toBe(["Apple", "Orange", "Lemon", "Pear", "Grape", "Banana"]);
    var numbers = [64, 49, 16, 4];
    expect(functions.arrayForEach(cars)).toEqual(["Honda-", "BMW-", "Toyota-"]); 
    expect(functions.arraryMap(numbers)).toEqual([8, 7, 4, 2]);
})