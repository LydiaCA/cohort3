const functions = {
    HelloWorld: () => {
        return console.log("Hello from Functions.");
    },

    addElements: (arr, element) => {
        arr.push(element);
        return arr;
    },

    totalElements: (arr, element) => {
        let accumulation = 0;
        // for(let i=0; i<arr.length; i++) {
        //     accumulation += parseFloat(arr[i]);
        // };

        arr.forEach(element => {
            accumulation += parseFloat(element);
        });

        return accumulation;
    },

    emptyElements: (arr) => {
        return arr = [];
    },

    provinceLookup: (dictioinary, shortName) => {
        return dictioinary[shortName];
    }
}

export default functions;