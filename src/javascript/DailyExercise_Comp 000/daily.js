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

export function assertEquals(num1, num2) {
    if (num1 === num2) return true;
        else { //else is not necessary here, should be removed. Later after done coding, review again and remove uncessary else.
            console.log(" *** the two values are not the same");
            console.log("p1-->" + num1);
            console.log("p2-->" + num2);
            return false;
        }
}
   
// If object to be exported, write "export default ObjectName at the end of the JS"
// If functions need to be exported, write "export" in front of each function.

export function makeEmailArr(name) {
    let emailAddress = name[0].toLowerCase()  + "." + name[1].toLowerCase() + "@evolveu.ca";
    console.log(" *** In makeEmailArr, email address is: " + emailAddress);
    return emailAddress;
}

export function makeEmailObj(name) {
    let emailAddress = name.fname.toLowerCase() + "." + name.lname.toLowerCase() + "@evolveu.ca";
    console.log(" *** In makeEmailObj, email address is: " + emailAddress);
    return emailAddress;
}