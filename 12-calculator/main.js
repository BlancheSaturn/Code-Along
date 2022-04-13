// We need to track some things in other to complete a valid arithmetic expression.
// create a calculator object to hold everything that is required to construct a valid expression

const calculator = {
  // this holds the string value (what user inputted or the result of a completed calculation). Tracks what is showns on screen
  showValue: "0",
  // this holds the result of the previous operation in the calculator
  firstOperand: null,
  // checks if both the previous operation and the operator are inputted, if true the next numbers inputted will be the second operand
  waitingForSecondOperand: false,
  // stores the operator for an expression.
  operator: null,
};

// Create this function for the content of the showValue property 
// which is one of the property in the calculator object to be shown on screen.
// Anytime a calculation is done we invoke this function to dhow the content of the showValue property
const updateResult = (result) => {
  const display = document.querySelector(".calculator-result");
  display.value = calculator.showValue;
};
updateResult();

// created this function so I can listen for clicks on 
// the calculator keys and determine what type of key was clicked.
// We have these set of buttons on the calculator (calculator__operator, calculator__percent, 
// calculator__plus-minus,calculator__square-root,calcultor__digit, calculator__decimal,calculator__all-clear, equal-sign)
// const calculatorHandle = document.querySelector('.calculator__buttons');
// calculatorHandle.addEventListener('click', event => {
// const clickedValue = event.target
  
// Check if the clicked element is a button.
// If not, exit from the function
// the querySelector() returns the first element that matches a CSS selector
const keys = document.querySelector('.calculator__buttons');
keys.addEventListener('click', (event) => {
  // accessing the clicked element
const target = event.target;
// Looking to see  if the clicked element is a button.
// If it not a button, exit from the function
  if (!target.matches('button')) {
    return;
  }
  
//  Using classList.contains to returns true if the calculator contains the button we're listening for, otherwise false
  if (event.target.classList.contains('calculator__operator')) {
    console.log('calculator__operator', target.value);
    return;
  } else if (event.target.classList.contains('calculator__percent')) {
    console.log('calculator__percent', target.value);
    return;
  } else if (event.target.classList.contains('calculator__plus-minus')) {
    console.log('calculator__plus-minus', target.value);
    return;
  } else if (event.target.classList.contains('calculator__square-root')) {
    console.log('calculator__square-root', target.value);
    return;
  } else if (event.target.classList.contains('calculator__decimal')) {
    console.log('decimal', target.value);
    return;
  } else if (event.target.classList.contains('calculator__all-clear')) {
    console.log('clear', target.value);
    return;
  } else
  console.log('calculator__digit', target.value);
});