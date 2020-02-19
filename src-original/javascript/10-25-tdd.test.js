/* 
TDD Steps:
 write console log of test & function and pass each to know they both work
 1.write the stub (method name, parms, dummy return)
 2.write a min code to pass
 3.write the minimun code to get the tests to pass
 4.another test
 5.fail
 6.write code
 7.continue
 8.refactor/repeat for all the functionality you need 
 a stub has a function name, parameters, return dummy


 1. Write the stub (function name, parameters, return dummy result) 
 2. Write successful test but it will fail because of function dummy result 
 3. Write minumun code in function to make test pass (function { return right answer}) 
 4. npm test and it should pass 
 5. Go into function and make it pass using proper code(parameters) 
 6. Write another test 
 7. fail 
 8. write code 
 9. continue until done 
 10. Repeat  
 11. refactor
*/

import functions from "./10_25_tdd";

test('hello world', () => {
    console.log("Hello World from test");
}),

test('chech the sum', () => {
    expect(functions.sum(1, 2)).toBe(3);
})


