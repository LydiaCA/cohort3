function sing() {
    console.log("AHHHHHHHH");
}

sing();

//Section11_Javascript_Exercise5
//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?
function checkDriverAge() {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
//checkDriverAge();

//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!" 
var checkDriverAge2 = function(age) {
    if (Number(age) < 18) {
        console.log("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
checkDriverAge2(92);

//== 112 Data Structure: Array ==/
var numbers = [1,2,3,4];
var booleans = [true, false, true];
/* var functionList = [{"apple": function apple() {
    console.log("apple");
}}, {"pear": function pear() {
    console.log("pear");
}}]; */

var functionList1 = [{"apple": function() {
    console.log("apple");
}}];
functionList1[0]; // return {apple: ƒ}

var functionList2 = [{"apple": function() {
    console.log("apple");
}}, {"pear": function pear() {
    console.log("pear");
}}];
functionList2[1]; // return {pear: ƒ}

//One anonymous function stored in an Array.
var functionList1 = [function() {
    console.log("apple");
}];

//Two anonymous functions stored in an Array.
var functionList1 = [function() {
    console.log("apple");
}, function(){
    console.log("pear"); 
}];
functionList1[0]; // return ƒ () {console.log("apple");}
functionList1[1]; // return ƒ () {console.log("pear");}

//Use Objet to store complex stuff such as multiple functions.
var object1{fruit1:apple, fruit2:pear};

/* Section 12: DOM Manipulatio */

console.log(document.getElementsByClassName("second"))//getElement's'byClass, it's plural
//result: HTMLCollection [p.second]

console.log(document.getElementById("first")); // no 's' in the method
//result: <p id="first" get="" it="" done="" today=""></p>

console.log(document.querySelector("li").classList); 
//result: DOMTokenList(2) ["bold", "red", value: "bold red"]
//list all content of bullet lists