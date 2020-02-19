import functions from './daily21'

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

test('Check for loopStaff  - October 21', () => {
    expect(functions.arrayForEach(cars)).toEqual(["Honda-", "BMW-", "Toyota-"]); 
    expect(functions.arraryMap(numbers)).toEqual([8, 7, 4, 2]);
})
