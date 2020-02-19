import * as functions from './syntax'

test('Check if input is number', () => {
    expect(functions.checkNum(-1)).toBe(1);
    expect(functions.checkNum(0)).toBe(true);
    expect(functions.checkNum(1)).toBe(true);
    expect(functions.checkNum(abc)).toBe("undefined"); 
}
)
/* 
test('Check if input is string', () => {
    expect(functions.isString(abc)).toBe(true);
    expect(functions.isString(1)).toBe(true);
    expect(functions.isString(012)).toBe(true);
    expect(functions.isString(NaN)).toBe("undefined"); 
}
)

test('Check if input is boolean', () => {
    expect(functions.isBoolean(true)).toBe(true);
    expect(functions.isBoolean(false)).toBe(true);
    expect(functions.isBoolean(012)).toBe(true);
    expect(functions.isBoolean(NaN)).toBe("undefined"); 
}
)

test('Check if input is string', () => {
    expect(functions.isString(abc)).toBe(true);
    expect(functions.isString(1)).toBe(true);
    expect(functions.isString(012)).toBe(true);
    expect(functions.isString(NaN)).toBe("undefined"); 
}
)

test('Check if input is string', () => {
    expect(functions.isString(abc)).toBe(true);
    expect(functions.isString(1)).toBe(true);
    expect(functions.isString(012)).toBe(true);
    expect(functions.isString(NaN)).toBe("undefined"); 
}
)

test('Check if input is string', () => {
    expect(functions.isString(abc)).toBe(true);
    expect(functions.isString(1)).toBe(true);
    expect(functions.isString(012)).toBe(true);
    expect(functions.isString(NaN)).toBe("undefined"); 
}

test('Check if-else statement', () => {
    

})
) */