const button1 = document.getElementById("button1");
const input1 = document.getElementById("input1");

// Listen to "click" action from button, and print to console.log
button1.addEventListener("click", onButtonClicked);

function onButtonClicked() {
    console.log("Hello World from HelloWorld.js");
    console.log("Add one to your input number is: " + (parseInt(input1.value) + 1));
    console.log("The number you input belongs to "+ size(parseInt(input1.value)));
}

/*     function size(number) {
        if (number < 10 ) {
            return "small";}
        else if (number < 20) {
            return "med"; 
        } else {
            return "large";
        }
    } */

// Simplifize above ugly code.
function size(number) {
    if (number < 10 ) return "small";
    if (number < 20)  return "med"; 
        return "large";
}
