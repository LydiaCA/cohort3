
const functions = {

    size: (num) => {
        if (num < 0) return "negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num <= 100) return "large";
        return "extra large";
    },


    add: (num1, num2) => {
        return Number(num1) + Number(num2);
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },


    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        return num1 / num2;
    },


    tax: (num) => {
        if (num < 0) return 0;
        if (num <= 47630) return num * 0.15;
        if (num <= 95259) return ((num - 47630) * 0.205) + 7145;
        if (num <= 147667) return ((num - 95259) * 0.26) + 16908;
        if (num <= 210371) return ((num - 147667) * 0.29) + 30535;
        return ((num - 210371) * 0.33) + 48719;
    },


    addElement: (arr, ele) => {
        arr.push(ele);
        return arr;
    },

    totalArr: (arr) => {
        let total = 0;
        let x;
        for (x of arr) {
            total += Number(x);
        }
        return total;
    },

    clearArr: (arr) => {
        arr.length = 0;
        return arr;
    },


    lookUp: (pCode) => {
        const dict = {
            ab: "Alberta",
            bc: "British Columbia",
            mb: "Manitoba",
            nb: "New Brunswick",
            nl: "Newfoundland and Labrador",
            ns: "Nova Scotia",
            nt: "Northwest Territories",
            nu: "Nunavut",
            on: "Ontario",
            pe: "Prince Edward Island",
            qc: "Quebec",
            sk: "Saskatchewan",
            yt: "Yukon",
        }
        return dict[pCode];
    }

};

export default functions;