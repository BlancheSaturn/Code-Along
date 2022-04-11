/**
 * A function that programmatically concatenates two strings together with a space in between them.
 * This means if the string were different it would still add them together.
 *
 * @returns {string} John Smith
 */
const firstName = "John";
const lastName = "Smith";

const createFullName = (firstName1, lastName1) => {
  const combinefirstNamelastName = firstName1.concat(" ", lastName1);
  return combinefirstNamelastName;
};
const finalFullName = createFullName(firstName, lastName);
console.log(finalFullName);

/**
 * A function that programmatically returns the largest number.
 * This means if the numbers were different it would still return the largest one.
 *
 * @returns {number} the largest number
 */
const largeNumber1 = 100;
const largeNumber2 = 200;

const findLargestNumber = (Number1, Number2) => {
  if (Number1 > Number2) return Number1;
  else return Number2;
};
const biggestNum = findLargestNumber(largeNumber1, largeNumber2);
console.log("The largest number is", biggestNum);

/**
 * A function that programmatically adds two numbers together.
 * This means if the numbers were different it would still add them together.
 *
 * @returns {number} the sum of both numbers
 */
const addNumber1 = 12;
const addNumber2 = 24;

const addNumbers = (addNum1, addNum2) => {
  const sum = addNum1 + addNum2;
  return sum;
};
const resulttotal = addNumbers(addNumber1, addNumber2);
console.log("The sum of both number is", resulttotal);

/**
 * A function that takes two numbers as input, multiplies them together and returns the product.
 * !!NOTE!! You'll have to write in the parameters for this function yourself.
 *
 * @param {number} number1 3
 * @param {number} number2 6
 * @returns {number} 18
 */

const number1 = 3;
const number2 = 6;
const multiplyNumbers = (num1, num2) => {
  const sum1 = num1 * num2;
  return sum1;
};
const resultMultiplySum = multiplyNumbers(number1, number2);
console.log(resultMultiplySum);

/**
 * A function that creates a Recipe string from a given array of Ingredients.
 * Each ingredient will be joined with a +.
 *
 * @param {string[]} ingredientsArr ["Bacon","Lettuce","Tomato"]
 * @return {string} "Bacon+Lettuce+Tomato"
 */
const ingredientsArr = ["Bacon", "Lettuce", "Tomato"];
const createRecipeString = (ingredientslist) => {
  const jointRecipe = ingredientslist.join("+");
  return jointRecipe;
};
const finalRecipe = createRecipeString(ingredientsArr);
console.log(finalRecipe);

/**
 * A function that takes Array of Items and returns a NEW ARRAY with the first and last item in it.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Tony","Dave"]
 */
const itemsArr = ["Tony", "John", "Dave"];
const getFirstAndLastItems = (items) => {
  const newNameArr  = [...items.slice(0,1),...items.slice(-1)]  // Array.slice() returns selected array elements as a new array
//   const newNameArr = items.filter((item, index, array) => {
//     const isFirst = index === 0;
//     const isLast = index === array.length - 1;
//     if (isFirst || isLast) return true;
//     return false;
// })
return newNameArr; // after I've remove element in index 1, I returned the remaining element left in a new array
  };

const finalArr = getFirstAndLastItems(itemsArr);
console.log(finalArr);

/*
 * A function that takes an array of scores and totals the scores by looping through the array.
 *
 * @param {number[]} scoreArr [1,2,3]
 * @return {number} 6
 */
const scoreArr = [1, 2, 3];
const totalScores = (scores) => {
  const sumofArray = scores.reduce((accumulatingTotal, numberToAdd) => {
    return accumulatingTotal + numberToAdd;
  });
  return sumofArray;
};
const sum = totalScores(scoreArr);
console.log(sum);
