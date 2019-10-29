const functions = {
    HelloWorld: () => {
        return console.log("Hello from Functions.");
    },

    percentageRate: (base, rate) => {
        let result = eval(base * rate).toFixed(2);
        return result;
    },

    financial: (x) => {
        return Number.parseFloat(x).toFixed(2);
    },

    federalTax: (income) => {
        var basketPercentageRate1 = 0.15;
        var basketPercentageRate2 = 0.205;
        var basketPercentageRate3 = 0.26;
        var basketPercentageRate4 = 0.29;
        var basketPercentageRate5 = 0.33;

        var basket1TopRange = 47630;
        var basket2TopRange = 95259;
        var basket3TopRange = 147667;
        var basket4TopRange = 210371;

        var basket1FullTax = basket1TopRange * basketPercentageRate1;
        var basket2FullTax = (basket2TopRange - basket1TopRange) * basketPercentageRate2;
        var basket3FullTax = (basket3TopRange - basket2TopRange) * basketPercentageRate3;
        var basket4FullTax = (basket4TopRange - basket3TopRange) * basketPercentageRate4;

        var tax = 0;
        var basketTax = 0;

        console.log("income is: " + income)
        if (income <= 0) {
            return 0;
        } else if ((income > 0) && (income <= basket1TopRange)) {
            tax = income * basketPercentageRate1;
            console.log("income tax in range 1 is: " + tax);
            return tax;
        } else if ((income > basket1TopRange) && (income <= basket2TopRange)) {
            tax = basket1FullTax + (income - basket1TopRange) * basketPercentageRate2;
            console.log("income tax in range 2 is: " + tax);
            return tax;
        } else if ((income > basket2TopRange) && (income <= basket3TopRange)) {
            tax = basket1FullTax + basket2FullTax + (income - basket2TopRange) * basketPercentageRate3;
            console.log("income tax in range 3 is: " + tax);
            return tax;
        } else if ((income > basket3TopRange) && (income <= basket4TopRange)) {
            tax = basket1FullTax + basket2FullTax + basket3FullTax + (income - basket3TopRange) * basketPercentageRate4;
            console.log("income tax in range 4 is: " + tax);
            return tax;
        } else if ((income > basket4TopRange)) {
            tax = basket1FullTax + basket2FullTax + basket3FullTax + basket4FullTax + (income - basket4TopRange) * basketPercentageRate5;
            console.log("income tax in range 5 is: " + tax);
            return tax;
        }
    }
}

export default functions;