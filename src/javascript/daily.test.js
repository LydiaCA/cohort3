// When import a function, the function name need to be wrapped in {}.
//import {assertEquals} from './daily'
import functions from './daily'

test('Check for More Array Work - October 16-17', () => {
    var cars = ["Honda", "BMW", "Toyota"];
    var fruit = ["Apple", "Orange", "Lemon", "Banana"];
    expect(functions.arraySlice(cars,1)).toEqual(["BMW", "Toyota"]);
    // expect(functions.arraySplice(2, 0, "Pear", "Grape")).toBe(["Apple", "Orange", "Lemon", "Pear", "Grape", "Banana"]);
    var numbers = [64, 49, 16, 4];
    expect(functions.arrayForEach(cars)).toEqual(["Honda-", "BMW-", "Toyota-"]); 
    expect(functions.arraryMap(numbers)).toEqual([8, 7, 4, 2]);
});

test('Check the array basic', () => {
    var cars = ["Honda", "BMW", "Toyota"];
    var fruit = ["Apple", "Orange", "Lemon", "Banana"];
    expect(functions.arrayFor(cars)).toBe(cars.length);
    expect(functions.arrayWhile(fruit)).toBe(fruit.length);
    expect(functions.arrayDoWhile(fruit)).toBe(fruit.length);
    expect(functions.arrayForIn(fruit)).toBe("AppleOrangeLemonBanana");
    expect(functions.arrayForOf(fruit)).toBe("AppleOrangeLemonBanana");
}
);


/* 
//Example from the stub file "functions.test.js" in project 01-getting-started

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
}); */

test('Compare two parameters', () => {
    expect(functions.assertEquals("a", "b")).toBe(false); // expect(function()).toBe();
    expect(functions.assertEquals("a", "a")).toBe(true);
    expect(functions.assertEquals(1, 2)).toBe(false);
    expect(functions.assertEquals(2, 2)).toBe(true);
    expect(functions.assertEquals("2", 2)).toBe(false);
    expect(functions.assertEquals("This value", "This value")).toBe(true);
});

// In console, run "npm test daily.test.js"

//Daily exercise 2

/*
    Write a function to format an email based on an array.
*/

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

//Daily exercise 3
/*	
	Write the function to format an email based on an object / map
*/

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});