import functions from "./CanadianTaxCalculator"

test("Canadian Tax Calculator", () => {
    //expect(functions.HelloWorld()).toBe(undefined);
    //expect(functions.percentageRate(1, 2)).toBe('2.00');
    //expect(functions.percentageRate(1, '15%')).toBe('0.15');
    //expect(functions.federalTax(80000)).toBe(663585);    
    //functions.federalTax(64567);

    //test for basket top range number
    expect(functions.federalTax(-34567)).toBe(0); //negative income
    expect(functions.federalTax(0)).toBe(0); //zero income
    expect(functions.federalTax(47630)).toBe(7144.50); //income in the range of bssket 1 
    expect(functions.federalTax(95259)).toBe(16908.445); //income in the range of bssket 2 
    expect(functions.federalTax(147667)).toBe(30534.525); //income in the range of bssket 3 
    expect(functions.federalTax(210371)).toBe(48718.685); //income in the range of bssket 4 
    expect(functions.federalTax(210372)).toBe(48719.015); //income in the range of bssket 5 
});