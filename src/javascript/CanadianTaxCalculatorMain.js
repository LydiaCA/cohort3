import functions from "./CanadianTaxCalculator.js"

console.log("Hello from CanadianTaxCalculatorMain.js");
idCalculator.addEventListener("click", () => {
    console.log("Hello from event listener of CanadianTaxCalculatorMain.js");
    //console.log("income from HTML is: " + Number(income.value));    
    //functions.HelloWorld();
    //var tax = functions.federalTax(-34567);
    let income = document.getElementById("idIncome").value;
    console.log("idIncome.value is: " + income);
    //document.form.idTax.value = tax;
    idTax.textContent = "$" + Number(functions.federalTax(income)).toFixed(2);

})