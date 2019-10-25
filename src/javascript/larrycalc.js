const functions = {
    HelloWorld: (string) => {
       console.log(string);
       //return console.log(string) will return undefined. 
    },

    sum: (para1, para2) =>{
        var sum = para1 + para2;
        console.log("sum is: "+ sum);
        return sum;
    }
}
export default functions