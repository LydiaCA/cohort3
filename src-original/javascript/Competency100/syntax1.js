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

console.log("test.");

// Returns if a value is really a number
function checkNum(n) {
    return 2;
}
/*     let string = typeof value;
    console.log("Inside of isNumber(value), value type is: " + string);
    return typeof value === 'number' && isFinite(value); */




// Returns if a value is a string
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

// Returns if a value is a boolean
function isBoolean(value) {
    return typeof value === 'boolean';
}

// Returns if a value is an array
function isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
}

// ES5 actually has a method for this (ie9+)
//Array.isArray(value);

// Returns if a value is nulll
function isNull(value) {
    return value === null;
}

// Returns if a value is undefined
function isUndefined(value) {
    return typeof value === 'undefined';
}

// Returns if a value is a function
function isFunction(value) {
    return typeof value === 'function';
}

// Returns if a value is an object
function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}



/* 
isNumber(1);
isNumber(0);
isNumber("abc");
isString("+");
isNumber(true); */

/*



 export function number(input) {
    if (typeof (input) === "number") return true;
    return false;
}
} */
export default checkNum;