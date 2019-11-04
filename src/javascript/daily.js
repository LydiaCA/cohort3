const functions = {

    loopStaffIn: (arrStaff) => {
        const arrEmail0 = [];
        for (let staff in arrStaff) {
            console.log("functions.makeEmailObj[staff] is: " + functions.makeEmailObj(staff));
            arrEmail0.push(functions.makeEmailObj(staff));
        }
        console.log("arrEmail0 is: " + arrEmail0);
        return arrEmail0;
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
        console.log("arrEmail in loopStaff is: " + arrEmail);
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
        // function function1(acc, item, index, inputArray) {
        //     return acc - item;
        // }

        function myFunc(total, num) {
            return total - num;
        }
        return addup;
    },


    //=== Prepare for Array Work - October 15, 2019 ===//

    /*Let’s dig deeper into arrays. Read the documentation on the following and create examples of each one:
    
    Basics
        for
        while
        do while
    Next Level
        for in
        for of
    */

    arrayFor: (inputArray) => {
        var length = 0;
        for (var i = 0; i < inputArray.length; i++) {
            length++;
        }
        return length;
    },

    arrayWhile: (inputArray) => {
        var j = 0;
        while (j < inputArray.length) {
            j++;
        }
        return j;
    },

    arrayDoWhile: (inputArray) => {
        var i = 0;
        do {
            i++;
        } while (i < inputArray.length)
        return i;
    },

    arrayForIn: (inputArray) => {
        var string1 = "";
        for (var property1 in inputArray) {
            string1 += inputArray[property1];
        }
        return string1;
    },

    arrayForOf: (arrayEntities) => {
        var string1 = "";
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
        console.log("first name is: " + name.fname);
        let firstName = name.fname.toLowerCase();
        let lastName = name.lname.toLowerCase();
        //let emailAddress = name.fname.toLowerCase() + "." + name.lname.toLowerCase() + "@evolveu.ca";
        let emailAddress = firstName + "." + lastName + "@evolveu.ca";
        console.log("emailAddress is: " + emailAddress);
        return emailAddress;
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