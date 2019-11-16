const functions = {
    /* Callback Exercise (Part 1) - November 8, 2019 */
    filterPeopleByProvince: (arrCollection, strProvinceName) => {
        return arrCollection.filter((e) => { return e.province === strProvinceName });
    },

    filterPeopleByMultiProvinces: (arrCollection, arrProvinceName) => {
        let arrPeople = [];
        console.log("How many inquery provinces? " + arrProvinceName.length);
        for (let i = 0; i < arrProvinceName.length; i++)
            arrPeople.push(arrCollection.filter((e) => { return e.province === arrProvinceName[i] }));
        arrPeople = arrPeople[0].concat(arrPeople[1]);
        console.log(arrPeople);
        return arrPeople;
    },

    fullName: (arrCollection) => {
        let newArr = [];
        arrCollection.forEach(function (item) { newArr.push(item.fname + " " + item.lname); });
        return newArr;
    },

    /* More Array Exercises (Really) - November 6, 2019 */
    filterBalance: (arrStaff) => {
        return arrStaff.filter((e) => { return e.balance >= 1000 });
    },

    /* Pointers Reference Exercises November 5, 2019 */
    addThree: (thing) => {
        thing.bal = thing.bal + 3;
    },

    /* More Array Exercises - October 29, 2019 */
    loopStaffTotalBalance: (arrStaff) => {
        let arrTotalBalance = [];
        for (let element of arrStaff) {
            arrTotalBalance.push(element.balance);
        };
        let totalBalance = arrTotalBalance.reduce(function myFunc(total, num) {
            return total + num;
        });
        return totalBalance;
    },

    AverageBalance: (arrStaff) => {
        let arrTotalBalance = [];
        for (let element of arrStaff) {
            arrTotalBalance.push(element.balance);
        };
        let totalBalance = arrTotalBalance.reduce(function myFunc(total, num) {
            return total + num;
        });
        return parseInt(totalBalance / arrTotalBalance.length);
    },

    loopStaffForEach: (arrStaff) => {
        let newArr = [];
        arrStaff.forEach(function (item) { newArr.push(functions.makeEmailObj(item)); });
        return newArr;
    },


    loopStaffMap: (arrStaff) => {
        return arrStaff.map(x => functions.makeEmailObj(x));
    },

    loopStaffIn: (arrStaff) => {
        //console.log("In loopStaffIn(), arrStaff is: " + arrStaff);
        const arrEmail01 = [];
        for (let index in arrStaff) {
            arrEmail01.push(functions.makeEmailObj(arrStaff[index]));
        }
        return arrEmail01;
    },

    loopStaffOf: (arrStaff) => {
        const arrEmail00 = [];
        for (let eachItem of arrStaff) {
            arrEmail00.push(functions.makeEmailObj(eachItem));
        };
        return arrEmail00;
    },

    //     const arrEmail = arrStaff.map((item) => {
    //         functions.makeEmailObj(item)
    //     }),
    //     return arrEmail;
    // },

    /* loopStaff - October 22, 2019 */
    loopStaff: (arrStaff) => {
        const arrEmail = arrStaff.map((item) => {
            return functions.makeEmailObj(item)
        });
        return arrEmail;
    },

    /* More Array Work - October 16-17 */
    arraySlice: (inputArray, startIndex) => {
        return inputArray.slice(startIndex);
    },

    arraySplice: (startIndex, removedNumbers, inputArray) => {
        return inputArray.slice(startIndex, removedNumbers, inputArray);
    },

    arrayForEach: (inputArray) => {
        let newArr = [];
        inputArray.forEach(function (item) { newArr.push(item + '-'); });
        return newArr;
    },

    arrayMap: (inputArray) => {
        return inputArray.map(x => Math.sqrt(x));
    },

    arrayReduce: (inputArray) => {
        let addup = inputArray.reduce(myFunc);
        function myFunc(total, num) {
            return total + num;
        }
        return addup;
    },

    arrayFilter: (inputArray) => {
        // let addup = inputArray.reduce(myFunc);
        // function myFunc(total, num) {
        //     return total + num;
        // }
        return inputArray.filter((e) => { return e > 2 });
    },

    arraySort: (inputArray) => {
        return inputArray.sort();
    },


    //=== Prepare for Array Work - October 15, 2019 ===//
    arrayFor: (inputArray) => {
        let length = 0;
        for (let i = 0; i < inputArray.length; i++) {
            length++;
        }
        return length;
    },

    arrayWhile: (inputArray) => {
        let j = 0;
        while (j < inputArray.length) {
            j++;
        }
        return j;
    },

    arrayDoWhile: (inputArray) => {
        let i = 0;
        do {
            i++;
        } while (i < inputArray.length)
        return i;
    },

    arrayForIn: (inputArray) => {
        let string1 = "";
        for (let property1 in inputArray) {
            string1 += inputArray[property1];
        }
        return string1;
    },

    arrayForOf: (arrayEntities) => {
        let string1 = "";
        for (let eachItem of arrayEntities) {
            string1 += eachItem;
        };
        return string1;
    },

    arrayMap: (inputArray) => {
        const newArray = inputArray.map(x => Math.sqrt(x));
        return newArray;
    },

    //=== makeEmailObj - Oct 11, 2019 ===//

    makeEmailObj: (name) => {
        return name.fname.toLowerCase() + "." + name.lname.toLowerCase() + "@evolveu.ca";
    },

    //=== makeEmailArr - October 9, 2019 ===//

    // If object to be exported, write "export default ObjectName at the end of the JS"
    // If functions need to be exported, write "export" in front of each function.

    makeEmailArr: (name) => {
        let emailAddress = name[0].toLowerCase() + "." + name[1].toLowerCase() + "@evolveu.ca";
        return emailAddress;
    },

    //=== AssertEquals - October 7, 2019 ===//
    /*	
        Write the function that will create this output:
    
    *** the two values are not the same:
        p1--> a
        p2--> b
    *** the two values are not the same:
        p1--> 1
        p2--> 2
    *** the two values are not the same:
        p1--> 2
        p2--> 2
    */

    // Write the function after this comment ---

    assertEquals: (num1, num2) => {
        if (num1 === num2) return true;
        else { //else is not necessary here, should be removed. Later after done coding, review again and remove uncessary else.
            return false;
        }
    }
}

export default functions;