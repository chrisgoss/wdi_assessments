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


// upon input change, update h1 (change could be submit or just value change)
// - adding an "onchange" event handler to the input 

// make sure that shit is an int (optional)

// make input value increase on tapping + button 
// - adding a "click" event on inc
// callback for that would increase the value of input

// make input value decrease on tapping - button
// - adding a "click" event on dec
// callback for that would decrease the value of input



var display = document.getElementById("display");
var input = document.getElementById("input");
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");

function updateDisplay(e){
    display.innerText = e.target.value;
}
// e is the event object, in this case it's a "change" event object 



input.addEventListener("change", updateDisplay);

function increase(){
    input.value++
    changeColor()
    display.innerText = input.value
}

inc.addEventListener("click", increase);
function decrease(){
    input.value--
    changeColor()
    display.innerText = input.value
}
dec.addEventListener("click", decrease);



function changeColor(){
    if (input.value < 0) {
        display.style.color = "crimson";
    }
    if (input.value >= 0) {
        display.style.color = "dodgerblue"
    }
}