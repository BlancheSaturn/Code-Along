/**
 * A function that programmatically concatenates two strings together with a space in between them.
 * This means if the string were different it would still add them together.
 *
 * @returns {string} John Smith
 */
 const firstName = "John";
 const lastName = "Smith";
 
 const createFullName = (firstName, lastName) => {
    const combinefirstNamelastName = (firstName.concat(" ", lastName))
    return combinefirstNamelastName

 };
 const concatFullName = createFullName (firstName, lastName)
 console.log(concatFullName)

/**
 * A function that programmatically returns the largest number.
 * This means if the numbers were different it would still return the largest one.
 *
 * @returns {number} the largest number
 */
 const largeNumber1 = 100;
 const largeNumber2 = 200;
 
const findLargestNumber = (largeNumber1, largeNumber2) => {
    if (largeNumber1 > largeNumber2)
    return 'the largest number is number 1' 
    else if (largeNumber2 > largeNumber1) 
    return 'the largest number is number 2' 
   // Write your code here
 };
 console.log(findLargestNumber(largeNumber1, largeNumber2))

 /**
 * A function that takes two numbers as input, multiplies them together and returns the product.
 * !!NOTE!! You'll have to write in the parameters for this function yourself.
 *
 * @param {number} number1 3
 * @param {number} number2 6
 * @returns {number} 18
 */

const number1 = 3
const number2 = 6
const multiplyNumbers = (number1, number2) => {
    return number1 * number2
  };
const resultMultiply = multiplyNumbers(number1, number2);
console.log(resultMultiply);

/**
 * A function that creates a Recipe string from a given array of Ingredients.
 * Each ingredient will be joined with a +.
 *
 * @param {string[]} ingredientsArr ["Bacon","Lettuce","Tomato"]
 * @return {string} "Bacon+Lettuce+Tomato"
 */
const ingredientsArr = ["Bacon","Lettuce","Tomato"]
const createRecipeString = (ingredientsArr) => {
    const jointRecipe = ingredientsArr.join('+')
        return jointRecipe
}
    const finalRecipe = createRecipeString (ingredientsArr)
    console.log(finalRecipe)
 

