// When import a function, the function name need to be wrapped in {}.
import {assertEquals} from './daily'

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

test ('Compare two parameters', () => {
    expect(assertEquals("a","b")).toBe(false); // expect(function()).toBe();
    expect(assertEquals("a","a")).toBe(true);
    expect(assertEquals(1,2)).toBe(false);
    expect(assertEquals(2,2)).toBe(true);
    expect(assertEquals("2",2)).toBe(false);
    expect(assertEquals("This value","This value")).toBe(true);
});

// In console, run "npm test daily.test.js"