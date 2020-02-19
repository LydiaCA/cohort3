//import * as functions from './syntax'
import checkNumber from './syntax'

test('Check if input is number', () => {
    expect(checkNumber(1)).toBe(true);
    /* expect(checkNumber(0)).toBe(true);
    expect(checkNumber(1)).toBe(true);
    expect(checkNumber(abc)).toBe("undefined");  */
}
)