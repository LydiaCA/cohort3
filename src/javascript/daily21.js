const functions = {

    loopStaff: () => {

    },

    makeEmailObj: (name) => {
        let emailAddress = name.fname.toLowerCase() + "." + name.lname.toLowerCase() + "@evolveu.ca";
        console.log(" *** In makeEmailObj, email address is: " + emailAddress);
        return emailAddress;
    }

    
export default functions;