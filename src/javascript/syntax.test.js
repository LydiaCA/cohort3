//import * as functions from './syntax'
import functions from './syntax'

test('Check if input is number', () => {
    expect(functions.isNumber(1)).toBe(true);
    expect(functions.isNumber(0)).toBe(true);
    expect(functions.isNumber("abc")).toBe(false);
}
)

test('Check if input is string', () => {
    expect(functions.isString("abc")).toBe(true);
    expect(functions.isString(1)).toBe(false);
    expect(functions.isString("+")).toBe(true);
    expect(functions.isString(NaN)).toBe(false);
}
)

test('Check if input is boolean', () => {
    expect(functions.isBoolean(true)).toBe(true);
    expect(functions.isBoolean(false)).toBe(true);
    //expect(functions.isBoolean(12)).toBe(false);
    expect(functions.isBoolean(NaN)).toBe(false);
}
)

test('Check if input is array', () => {
    expect(functions.isArray("abc")).toBe(false);
    var cars = ["CHRYSLER", "BMW", "HONDA"];
    expect(functions.isArray(cars)).toBe(true);
    //expect(functions.isArray(012)).toBe(true);
    //expect(functions.isArray(NaN)).toBe("undefined"); 
}
)

test('Check if-else statement', () => {
    expect(functions.isBiggerThanZero(0)).toBe(false);
    expect(functions.isBiggerThanZero(1)).toBe(true);
    //expect(funcitons.isBiggerThanZero(parseInt(-1))).toBe(false);
}
)

test('Add value to the front of array', () => {
    var cars = ["CHRYSLER", "BMW", "HONDA"];
    //expect(functions.addValuetoFrontArray(cars, "Toyota")).toBe(typeof cars);
    //expect(functions.addValuetoFrontArray(cars, "Toyota")).toBe(["CHRYSLER", "BMW", "HONDA", "Toyota"]);
    functions.addValuetoFrontArray(cars, "Toyota");
    functions.addValuetoEndArray(cars, "Volve");
    
}

)

