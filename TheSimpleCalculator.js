
// manipulating the input screen by getting a HTML object
var inputscreen = document.getElementById("inputscreen");

// Creating a global variable, (outside everything so that it can be
// used in all functions), to store our equation in.
var equation = "";

// function to display number clicked on the input screen.
// to have more than a single digit, concatenate to the end 
//of the current value.

function shownumber(number) 
{
  var currentv = inputscreen.value; //gets the current value
  inputscreen.value = currentv + number; 
  //concatenate our number,then assign it to the input screen 
  //attribute value to display it.
}

function operatorinput(operator) 
{
  equation += inputscreen.value + operator; //concatenate the 
  //number and operator to the equation.
}


function calculatesum(calculate) 
{
  equation += inputscreen.value + currentv;
  eval(equation);
  inputscreen.value = equation;
}

function clearscreen(clear) 
{
  inputscreen.value = "";
  equation = "";
}