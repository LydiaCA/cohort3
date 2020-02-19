const functions = {
    //=== More Array Work - October 16-17  ===//
    /* 
    Continue from yesterday. Read the article:
    
    https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d 
    
    Read the documentation on the following and create examples of each one:
    slice
    splice
    
    forEach
    map
    reduce
    filter
    sort */

    arraySlice: (inputArray, startIndex) => {
        //console.log(inputArray.slice(startIndex));
        return inputArray.slice(startIndex);
    },

    arraySplice: (startIndex, removedNumbers, inputArray) => {
        return inputArray.slice(startIndex, removedNumbers, inputArray);
    },

    arrayForEach: (inputArray) => {
        let newArr = [];
        inputArray.forEach(function(item) { newArr.push(item+'-'); });
        return newArr;
    },

    arrayMap: (inputArray) => {
        return inputArray.map(Math.sqrt);
    },

    arrayReduce: (inputArray) => {
        let addup = inputArray.reduce(function1, 0);
        function function1(acc, item, index, inputArray) {
            return acc + item;
        }

        // let addup = inputArray.reduce((acc, item, index, inputArray) => acc + item, 0);
        
        return addup;
    }

    arrayFilter: (inputArray) => {
         inputArray.filter(item) ;
    }
}

export default functions;