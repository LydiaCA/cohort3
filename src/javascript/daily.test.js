// When import a function, the function name need to be wrapped in {}.
//import {assertEquals} from './daily'
import functions from './daily'

/* loopStaff: in / of - October 24, 2019 */
//Do the same assignment as the last one using the two forms of the “for” statement. 
//Create your own tests but use the function names that are provided below.
/* 
test('email builder for company01', () => {
    const staffEmail01 = functions.loopStaffIn(data.staff);
    // Write your tests here
    expect(staffEmail01[0])
        .toEqual("jane.smith@evolveu.ca");
    //const staffEmail2 = functions.loopStaffOf(data.staff);
    // Write your tests here
}); */



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
    console.log("staffEmail is: " + staffEmail);
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
    expect(functions.arraySlice(cars,1)).toEqual(["BMW", "Toyota"]);
    // expect(functions.arraySplice(2, 0, "Pear", "Grape")).toBe(["Apple", "Orange", "Lemon", "Pear", "Grape", "Banana"]);
    let numbers = [64, 49, 16, 4];
    expect(functions.arrayForEach(cars)).toEqual(["Honda-", "BMW-", "Toyota-"]); 
    expect(functions.arrayMap(numbers)).toEqual([8, 7, 4, 2]);
});

test('Check the array basic', () => {
    let cars = ["Honda", "BMW", "Toyota"];
    let fruit = ["Apple", "Orange", "Lemon", "Banana"];
    let numbers = [1,2,3,4];
    expect(functions.arrayFor(cars)).toBe(cars.length);
    expect(functions.arrayWhile(fruit)).toBe(fruit.length);
    expect(functions.arrayDoWhile(fruit)).toBe(fruit.length);
    expect(functions.arrayForIn(fruit)).toBe("AppleOrangeLemonBanana");
    expect(functions.arrayForOf(fruit)).toBe("AppleOrangeLemonBanana");
    // expect(functions.arrayReduce(numbers)).toBe([2,4,6,8]);

    expect(functions.arrayReduce([175, 50, 25])).toBe(100);

    
    
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