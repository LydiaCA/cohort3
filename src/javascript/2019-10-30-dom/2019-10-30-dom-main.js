import functions from "./2019-10-30-dom-functions.js"
console.log("Hello from DOM Main.");

/* idButton.addEventListener("click", ()=>{
    document.getElementById("idShow").textContent=functions.HelloWorld();
 */

idLevel1.addEventListener("click", ()=>{
    console.log(event.target);
    console.log(event.target.getAttribute("count"));
    console.log(event.target.parentNod);
    //console.log(event.target.parentNod.children);
});
idAdd.addEventListener("click", ()=>{
    var newDiv = document.getElementById("Level1");
    event.target.parentNod.appendChild(newDiv);

})
