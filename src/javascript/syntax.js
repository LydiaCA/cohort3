/* 
define attributes / variables
    number
    string
    boolean
    array
    dictionary / objects
    undefined
sample if / else
functions
    parameters
    returns
arrays
    add to the front
    add to the end
    update values
loops 
    for
    for/in
    while
    do while
    forEach (with array and function)
Objects / Dictionaries
    declare object
    lookup key to retrieve value
 */

// Inspired by https://webbjocke.com/javascript-check-data-types/

// Returns if a value is really a number
const functions = {

    isNumber: number => {
        return (typeof number === 'number' && isFinite(number));
    },

    // Returns if a value is a string
    isString: value => {
        return (typeof value === 'string' || value instanceof String);
    },


    // Returns if a value is a boolean
    isBoolean: value => {
        return typeof value === 'boolean';
    },

    // Returns if a value is an array
    isArray: value => {
        return value && typeof value === 'object' && value.constructor === Array;
    },

    // ES5 actually has a method for this (ie9+)
    //Array.isArray(value);

    // Returns if a value is nulll
    isNull: value => {
        return value === null;
    },

    // Returns if a value is undefined
    isUndefined: value => {
        return typeof value === 'undefined';
    },

    // Returns if a value is a function
    isFunction: value => {
        return typeof value === 'function';
    },

    // Returns if a value is an object
    isObject: value => {
        return value && typeof value === 'object' && value.constructor === Object;
    },

    // Return trun if a value is bigger than true, otherwise false.
    isBiggerThanZero: value => {
        if (value > 0) return true;
        return false;
    },

    addValuetoFrontArray: (inputArray, value) => {
        inputArray.unshift(value);
        return inputArray;
    },

    addValuetoEndArray: (inputArray, value) => {
        inputArray.push(value);
        return inputArray;
    },

    updateValueofArray: (inputArray, value) => {
        updateValueofArray.unshift(value);
        return updateValueofArray;
    },

    updateValueofArray: (inputArray, index, newValue) => {
        inputArray[index] = newValue;
        return inputArray;
    },

    arrayForLoop: (inputArray) => {
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

    arrayForInLoop: (inputArray) => {
        var string1 = "";
        for (var property1 in inputArray) {
            string1 += inputArray[property1];
        }
        //console.log("string1 is: " + string1);
        return string1;
    },

    arrayForOfLoop: (arrayEntities) => {
        var string1 = "";
        for (let eachItem of arrayEntities) {
            string1 += eachItem;
            //console.log("string1 is: " + string1);
        }
        return string1;
    },

    arrayForEachLoop: (inputArray) => {
        var string1 = "";
        inputArray.forEach(function (eachItem) {
            string1 += eachItem;
        });
        return string1;
    },


    checkObject: (inputObject) => {
        var string1 = "";
        for (var property in inputObject) {
            string1 += (inputObject[property] + "-");
        }
       var returnedString = string1.slice(0, string1.length-1);
        return returnedString; //remove the last char "-".
    }
}
export default functions;