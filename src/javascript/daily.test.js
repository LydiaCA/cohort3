// When import a specific function, the function nam needs to be wrapped in {}.
// e.g. import {assertEquals} from './daily'
import functions from './daily'
/* More Array Exercises (Really) - November 6, 2019 */
test('Get staff info whose balance >= 1000 with array', () => {
    functions.filterBalance(data.staff);
    expect(functions.filterBalance(data.staff)).toStrictEqual([{ fname: 'Liam', lname: 'Henry', balance: 1000 }, { fname: 'Emma', lname: 'Jones', balance: 1330 }]);
});


/* Pointers Reference Exercises November 5, 2019 */
test('How do pointers work', () => {
    //console.log("Reference");
    const a = { "name": "Larry", "bal": 10 };
    const arr = [];
    const obj = {};
    arr.push(a);
    obj[a.name] = a;

    expect(a.bal).toBe(10); //primitive 
    expect(arr[0].bal).toBe(10); //reference
    expect(obj[a.name].bal).toBe(10); //reference
    expect(obj.Larry.bal).toBe(10); //reference

    a.bal += 1;
    expect(a.bal).toBe(11);
    expect(arr[0].bal).toBe(11);
    expect(obj[a.name].bal).toBe(11);
    expect(obj.Larry.bal).toBe(11);

    functions.addThree(a);
    expect(a.bal).toBe(14);
    expect(arr[0].bal).toBe(14);
    expect(obj[a.name].bal).toBe(14);
    expect(obj.Larry.bal).toBe(14);
});


/* More Array Exercises - October 29, 2019 */

// Use only the JavaScript built-in functions listed below to complete 
// this exercise. Make sure you write your tests first.

// write a function to receive the same array (staff) and return 
// the total of balances
// write a function to receive the same array (staff) and return 
// the average the balances
test('Total the balance', () => {
    expect(functions.loopStaffTotalBalance(data.staff))
        .toEqual(3823);

});

test('Average the balance', () => {
    expect(functions.AverageBalance(data.staff))
        .toEqual(546);

});

/* loopStaff each / map - October 25, 2019 */
// Do the same assignment again, but this time use callback functions. 
//Use the ‘forEach’ and ‘map’ built-in functions.
test('email builder for company02', () => {
    const staffEmail03 = functions.loopStaffForEach(data.staff);
    expect(staffEmail03[4])
        .toEqual("noah.ho@evolveu.ca");
    const staffEmail04 = functions.loopStaffMap(data.staff);
    expect(staffEmail04[6])
        .toEqual("benjamin.amis@evolveu.ca");
});



/* loopStaff: in / of - October 24, 2019 */
//Do the same assignment as the last one using the two forms of the “for” statement. 
//Create your own tests but use the function names that are provided below.

test('email builder for company array for-in/of', () => {
    const staffEmail01 = functions.loopStaffIn(data.staff);
    expect(staffEmail01[0])
        .toEqual("jane.smith@evolveu.ca");
    const staffEmail02 = functions.loopStaffOf(data.staff);
    expect(staffEmail02[3])
        .toEqual("olivia.notly@evolveu.ca");
});



/* loopStaff - October 22, 2019 */
// Write a function that will take an array and return an array of emails. The new function you are writing today will call makeEmailObj that you have written in a previous exercise. 
// Copy and paste the code provided and you know the rest of the stick...Test first.
/*
    Sample data for the next few exercises.
*/

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};


/*	
	Write the function to build email addresses for the company.
*/

test('email builder for company00', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('Check for More Array Work - October 16-17', () => {
    let cars = ["Honda", "BMW", "Toyota"];
    let fruit = ["Apple", "Orange", "Lemon", "Banana"];
    expect(functions.arraySlice(cars, 1)).toEqual(["BMW", "Toyota"]);
    // expect(functions.arraySplice(2, 0, "Pear", "Grape")).toBe(["Apple", "Orange", "Lemon", "Pear", "Grape", "Banana"]);
    let numbers = [64, 49, 16, 4];
    expect(functions.arrayForEach(cars)).toEqual(["Honda-", "BMW-", "Toyota-"]);
    expect(functions.arrayMap(numbers)).toEqual([8, 7, 4, 2]);
});

//=== Prepare for Array Work - October 15, 2019 ===//

/*Let’s dig deeper into arrays. Read the documentation on the following and create examples of each one:
 
Basics
    for
    while
    do while
Next Level
    for in
    for of
*/
test('Check the array basic', () => {
    let cars = ["Honda", "BMW", "Toyota"];
    let fruit = ["Apple", "Orange", "Lemon", "Banana"];
    let numbers = [4, 2, 3, 1];
    expect(functions.arrayFor(cars)).toBe(cars.length);
    expect(functions.arrayWhile(fruit)).toBe(fruit.length);
    expect(functions.arrayDoWhile(fruit)).toBe(fruit.length);
    expect(functions.arrayForIn(fruit)).toBe("AppleOrangeLemonBanana");
    expect(functions.arrayForOf(fruit)).toBe("AppleOrangeLemonBanana");
    expect(functions.arrayReduce(numbers)).toBe(10);
    expect(functions.arrayFilter(numbers)).toStrictEqual([4, 3]);
    expect(functions.arraySort(numbers)).toStrictEqual([1, 2, 3, 4]);
});


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