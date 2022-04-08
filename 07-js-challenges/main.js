// state 0
// nothing
const interviewer = 'Marco'
// state 1
// interviewer => Marco
let interviewee = 'Elly'
// state 2
// interviewee => Elly, interviewer => Marco
interviewee = interviewee.toLowerCase()
// state 3
// interviewee => elly, interviewer => Marco

/******************************************
 * checks with the string includes method if 'arc'
 * is included in the string
 * @param {string} testString - the string that has to be tested
 * @returns {boolean} - returns the result of the test
 * ***************************************/
const hasArc = (testString) => testString.includes('arc')

// function hasArc (testString) {
//     return testString.includes('arc')
// }

// const hasArc = function (testString) {
//     return testString.includes('arc')
// }
console.log(hasArc)
// state 4
// interviewee => elly, interviewer => Marco, hasArc => [Function hasArc]

const validCandidate = hasArc(interviewee)
// state 5
// interviewee => elly, interviewer => Marco, hasArc => [Function hasArc], validCandate => false

const coffeeMachine = (option) => {
    if (option === 1) return 'expresso'
    else if (option === 2) return 'macchiato'
    else return "we don't have this coffee here"
}
// state 6
// interviewee => elly, interviewer => Marco, hasArc => [Function hasArc]
// validCandate => false, coffeeMachine => [Function coffeeMachine]
const testVar = 'something'
rock
carrot
egg

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * A function that takes an array of Booleans and then removes the false values from the given array.
 * It should create a new array only consiting of the true values.
 *
 * @param {boolean[]} booleanArr [true, true, false, false, true]
 * @return {boolean[]} [true, true, true]
 */

// const predicateFn = value => value; // if true keep the element
//                                     // if false discard the element
const removeFalseValues = (booleanArr) => booleanArr.filter((value) => value);

const booleanArrTest = [true, true, false, false, true]
const removeFalseValuesResult = removeFalseValues(booleanArrTest)

const booleanArrTest2 = [0, 1, 2, 3, 0, 0]
const removeFalseValuesResult2 = removeFalseValues(booleanArrTest2)

const booleanArrTest3 = ['Marco', 'Blanche', '', 'Moni', 'Soude', 'Maryna']
const removeFalseValuesResult3 = removeFalseValues(booleanArrTest3)

const removeFalseValuesStrictlyBooleans = (booleanArr) => {
    if (!booleanArr || !booleanArr.length) { // checks if the parameter is defined and it is an array (or string)
        console.error('you can only use this function with booleans array!!!')
        return
    }
    const isArrayOfBooleans = booleanArr            // [true, true, false, false, true]
        .map(value => typeof value === 'boolean')   // [true, true, true, true, true]
        .reduce((previous, current) => {
            return previous && current
        }, true)                                    // true
    if (!isArrayOfBooleans) {
        console.error('you can only use this function with booleans array!!!')
        return
    }

    return booleanArr.filter((value) => value);
}

// const removeFalseValuesResult4 = removeFalseValuesStrictlyBooleans(booleanArrTest3)

const removeFalseValuesResult5 = removeFalseValuesStrictlyBooleans(booleanArrTest)

// state of my program now
// booleanArrTest => [.], removeFalseValuesResult => [correct result], removeFalseValues => [Function removeFalseValues]

  /**
   * A function that takes an array of numbers that are between 0 - 1.
   * The function needs to create a new array with the numbers converted into a percentage
   *
   * @param {number[]} numbersArr [1, .5, .7, .25]
   * @return {string[]} ["100%", "50%", "70%", "25%"]
   */
  
const createPercentageList = (numbersArr) => {
    return numbersArr.map(value => {
        // transform 1 => 100
        const percentage = 100 * value;
        // percentage => 100
        // we add % sign => "100%"
        const formattedPercentage = `${percentage}%`;
        return formattedPercentage;
    });
};

const result1 = createPercentageList([1, .5, .7, .25])

const multiplyBy100 = value => {return 100 * value};
const addPercentSign = percentage => {return`${percentage}%`};

const createPercentageListBeautified = (numbersArr) => {     // take my numbers array [1, .5, .7, .25]
    const percentArray = numbersArr.map(multiplyBy100) // do (to every element individually) a multiply by 100 [100, 50, 70, 25]
    const formattedArray = numbersArr.map(addPercentSign); // do (..) add a percent sign ["100%", "50%", "70%", "25%"]
    return formattedArray
}
const result2 = createPercentageList([1, .5, .7, .25])

/**
 * A function that takes an array of possessions and a name.
 * The functions needs to create a new array with the name prefixed to each item.
 *
 * @param {string[]} possessionsArr ["shoes", "jacket", "belt"]
 * @param {string} name "disco"
 * @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
 */
const namePara = 'school'
const value = 'shoes'
const addNameToString = (name, value) => `${name} ${value}`;
const possessions = ["shoes", "jacket", "belt"]

const createListOfPoessessions = (possessionsArr, name) => { // take my possession array
const possessionResult = possessionsArr.map(value => addNameToString(name, value)); // do (to every element individually) add a name string to the possession string
return possessionResult

}
const result3 = createListOfPoessessions(possessionsArr)
console.log(result3
    
    
//    * Intemediate Challenges
//    */
  
  /**
   * Have a look at the String method split()
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   *
   * You may need to use it below.
   */
  
/**
 * A function that takes a string of numbers joined with a "+" and returns an array of those numbers.
 * The strings will need to be converted into numbers.
 * e.g 1 instead of "1"
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {number[]} [1, 2, 3, 4, 5]
 */
  
const convertStringToNumbersArray = (numberString) => numberString // take my numbers string "1+2+3+4+5"
    .split('+')    // split it with my divider and give me an array ["1", "2", "3", "4", "5"]
    .map(value => parseInt(value)); // do (to every element individually) convert to integer [1, 2, 3, 4, 5]

const resultConvert = convertStringToNumbersArray("1+2+3+4+5")
console.log(resultConvert)





















