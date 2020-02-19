import functions from './fetch.js'

const data = [
    { "name": "Madison", "surname": "Grainger", "gender": "female", "region": "New Zealand" },
    { "name": "Claudia", "surname": "Turcdeanu", "gender": "female", "region": "Romania" },
    { "name": "Ηρόδοτος", "surname": "Βαρνακιώτης", "gender": "male", "region": "Greece" },
    { "name": "Cornelia", "surname": "Bogza", "gender": "female", "region": "Romania" },
    { "name": "Dáša", "surname": "Barbora", "gender": "female", "region": "Slovakia" },
    { "name": "Δήμος", "surname": "Αυγερινός", "gender": "male", "region": "Greece" },
    { "name": "Adriana", "surname": "Stoenescu", "gender": "female", "region": "Romania" },
    { "name": "Veli", "surname": "Şahin", "gender": "male", "region": "Turkey" },
    { "name": "Farsang", "surname": "Előd", "gender": "male", "region": "Hungary" },
    { "name": "Pirkko", "surname": "Häyhä", "gender": "female", "region": "Finland" }]

test('Test Fetch funtions', () => {
    console.log("Hello from functions.test");
    expect(functions.getFirstName(data)[0]).toBe("Madison");
})

