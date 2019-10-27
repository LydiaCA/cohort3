const functions = {
    emailBuilder: (firstName, lastName) => {
        //return "email";
        return firstName.charAt(0).toLowerCase() + "." + lastName.toLowerCase() + "@evolveu.ca";
    }
}
export default functions;