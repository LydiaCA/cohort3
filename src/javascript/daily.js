const functions = {

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
            i ++;
         } while (i<inputArray.length)
         return i;
    },

    arrayForIn: (inputArray) => {
        var string1 = "";
        for (var property1 in inputArray) {
            string1 += inputArray[property1];
        }
        console.log("string1 is: " + string1);
        return string1;
    },

    arrayForOf: (arrayEntities, arrayNames) => {
        var string1 = "";
        for(let eachItem of arrayEntities) {
            string1 += arrayEntities[eachItem];
        return string1;
        }
    },

//=== makeEmailObj - Oct 11, 2019 ===//

makeEmailObj: (name) => {
        let emailAddress = name.fname.toLowerCase() + "." + name.lname.toLowerCase() + "@evolveu.ca";
        console.log(" *** In makeEmailObj, email address is: " + emailAddress);
        return emailAddress;
    },

//=== makeEmailArr - October 9, 2019 ===//

// If object to be exported, write "export default ObjectName at the end of the JS"
// If functions need to be exported, write "export" in front of each function.

makeEmailArr: (name) => {
        let emailAddress = name[0].toLowerCase() + "." + name[1].toLowerCase() + "@evolveu.ca";
        console.log(" *** In makeEmailArr, email address is: " + emailAddress);
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
            console.log(" *** the two values are not the same. p1-->" + num1 + ", p2-->" + num2);
            // console.log("p1-->" + num1);
            // console.log("p2-->" + num2);
            return false;
        }
    }
}

export default functions;