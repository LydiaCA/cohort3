import functions from "./arrays-dictions.js"

let inputArray = [];

idAdd.addEventListener("click", () => {
    if (isNaN(idInput.value) || idInput.value === "") {
        idMessage.textContent = "Please input a valid input.";
    } else {
        functions.addElements(inputArray, idInput.value);
        idMessage.textContent = "Number has been added to the array." + " Array is: " + inputArray.toString();
    }
    idInput.value="";
});

idShow.addEventListener("click", () => {
    idMessage.textContent = "Array is: " + inputArray.toString();
});

idTotal.addEventListener("click", () => {
    idMessage.textContent = "The total amount in the array is: " + functions.totalElements(inputArray);
});

idClear.addEventListener("click", () => {
    idMessage.textContent = "Array has cleared.";
});

idProvinceButton.addEventListener("click", () => {
    const dict = {
        ab: "Alberta",
        bc: "British Columbia",
        mb: "Manitoba",
        nb: "New Brunswick",
        nl: "Newfoundland and Labrador",
        ns: "Nova Scotia",
        nt: "Northwest Territories",
        nu: "Nunavut",
        on: "Ontario",
        pe: "Prince Edward Island",
        qc: "Quebec",
        sk: "Saskatchewan",
        yt: "Yukon",
    };
    idProvinceMessage.textContent = functions.provinceLookup(dict, idProvinceShortName.value);
    idProvinceShortName.value = "";
});