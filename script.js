console.log("we loggin consoles");

//https://www.w3schools.com/jsref/met_document_addeventlistener.asp
//https://www.w3schools.com/js/js_operators.asp
//https://www.javascripttutorial.net/javascript-ternary-operator/
//write them longways is hard in this case
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments#:~:text=The%20arguments%20object%20is%20a,first%20entry's%20index%20at%200%20.
//https://gawdiseattle.gitbook.io/wdi/javascript/02more-manipulation#the-case-against-innerhtml
//https://gawdiseattle.gitbook.io/wdi/javascript/01readme#how-do-we-manipulate-the-dom
//parseint fucking hell
//https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/


var display = document.getElementById("display");
var input = document.getElementById("input");
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");
//still don't get the difference between var/let besides var is global, and let cannot be access outside where it was declared?
let i = 0;



//objects are easier to understand than functions, and their parts
function addOne(){
    display.innerHTML += i++;
}
inc.addEventListener(onclick, addOne);




// document.getElementById("increment").addEventListener("mouseover", "click");
// document.getElementById("decrement").addEventListener("mouseover", "click");

// function increment() value ++
// function decrement value --

// var display = display >= 0 ? "black" : "red";