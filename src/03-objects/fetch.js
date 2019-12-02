const functions = {
    getFirstName: (data) => {
        
        let firstName = [];
        data.forEach(function (item) { firstName.push(item.name); });
        // for (let element of data) {
        //     firstName.push(data.name);
        // };
        console.log(firstName);
        return firstName;
    }
},
export default functions;