//import * as functions from './syntax'
import functions from './syntax'

test('Check if input is number', () => {
    expect(functions.checkNumber(1)).toBe(true);
    /* expect(checkNumber(0)).toBe(true);
    expect(checkNumber(1)).toBe(true);
    expect(checkNumber(abc)).toBe("undefined");  */
}
)