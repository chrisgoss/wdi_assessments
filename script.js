console.log("we loggin consoles");

//https://www.w3schools.com/jsref/met_document_addeventlistener.asp
//https://www.w3schools.com/js/js_operators.asp
//https://www.javascripttutorial.net/javascript-ternary-operator/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments#:~:text=The%20arguments%20object%20is%20a,first%20entry's%20index%20at%200%20.

var display = document.getElementById("display");
var input = document.getElementById("input");
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");

function addInput(){
    display.innerHTML = input.innerHTML;
    console.log("input worked");
}
inc.addEventListener(onclick, addInput);






// function addOne(){
//     display.innerHTML = inc++;
//     console.log("inc worked");
// }
// inc.addEventListener(onclick, addOne);




// document.getElementById("increment").addEventListener("mouseover", "click");
// document.getElementById("decrement").addEventListener("mouseover", "click");

// function increment() value ++
// function decrement value --

// var display = display >= 0 ? "black" : "red";