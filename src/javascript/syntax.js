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
    checkNumber: number => {
        return (typeof number === 'number' && isFinite(number));
    },

    // Returns if a value is a string
    isString: value => {
        return (typeof value === 'string' || value instanceof String);
    },


    // Returns if a value is a boolean
    isBoolea: value => {
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
    }


};
export default functions;