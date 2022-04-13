// We need to track some things in other to complete a valid arithmetic expression.
// create a calculator object to hold everything that is required to construct a valid expression

const calculator = {
        // this holds the string value (what user inputted or the result of a completed calculation). Tracks what is showns on screen
        resultValue: '0',
        // this holds the result of the previous operation in the calculator 
        firstOperand: null,
         // checks if both the previous operation and the operator are inputted, if true the next numbers inputted will be the second operand
        waitingForSecondOperand: false,
        // stores the operator for an expression. 
        operator: null,
      };



      const onDOMLoaded = (_event) => {
        console.log('DOM loaded')
        const result = document.getElementById('displayResult')








      }

      document.addEventListener(
        'DOMContentLoaded',
        (e) => onDOMLoaded(e)
    )