// ARRAY
// const names = ['Andy', 'Sam', 'Ash'];
// console.log(names);

// const caoches = ['Andy', 'Sam', 'Bex'];
//     console.log(caoches[1]);

// const pets = ['Fido', 'Rusty', 'Jack'];
//     console.log(pets[2]);

// const students = [
//     'Blanche',
//     'Moni',
//     'Elly',
//     'Daniela',
//     'Soude',
//     'Jacintha',
//     'Maryna'
// ]
// console.log(students.index0f('Soude'))

// Pop takes out last Element
// students.push()
// push adding last element to array
// students.pop()
// Shift takes out first Element
// students.shift()
// Unshift add item at the begining of an array
// students.unshift()


//First define a variable
//Second run this loop until conditions is met 
// Third iteration ad 1 to i (same as i + 1)
// We define index with Let not with const as we will modify it

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// const cities = [3, 5,8, 1, 5, 4]
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] < 5) console.log(cities[i]);
// }

// CHALLENGE

// 1) log each AGE to the console 
// 2) log "I am (age) years old" for each index
// 3) CHALLENGE - For each age in ages array, 
// double the age and log a string using that doubled value

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61]; {
//         console.log(ages);   
//     }

//     for (let i = 0; i < ages.length; i++) {
//         console.log('I am ' + ages[i] + '  years old')
//     }

  
    // for (let i = 0; i < ages.length; i++) {
    //     console.log(ages[i] * 2)
    // }
    // sum = 0;
    // for (let i = 0; i < ages.length; i++) {
    //     sum = ages[i] * 2
    //     console.log(sum.toString());
    // }

    // FOREACH is a method which calls a function for each element in an array (instead of using for loop as below, we can use forEach)
    const cities = ['London', 'Frankfurt', 'Bucharest', 'Padova']
    // for (let i = 0; i < cities.length; i++) {
    //     console.log(cities[i]);  
    // }
    // console.log('with forEach')
    // // cities.forEach((city) => {console.log(city)})
    // const result = cities.forEach((city) => console.log(city.toLowerCase()))
    // console.log('my result', result)
    // console.log('my result', cities)

// MAP
// city.map returns a new array 

// const newArr = cities.map((city) => `${city} is in europe`)
// console.log(newArr)

// const statementWithBangs = newArr.map(statement => `${statement}!`)
// console.log(statementWithBangs)

// const statementWithBangs = cities
//     .map((city) => `${city} is in europe`)
//     .map(statement => `${statement}!`)

// console.log(statementWithBangs)

// const cars = [{id: 'Porche'}]
// .map(car => ({
//     ...car,
//     wheels: true
// }))

// const numbers = [2, 5, 10, 44, 99]
// //double the numbers
// // find the square root
// // multiple them by 3
// //take out 10

// const double = val => 2 * val;
// const sqrtRoot = val => Math.sqrt(val);
// const triple = val => 3 * val;
// const takeOut10 = val => val - 10;
// const inspect = val => {
//     console.log(val)
//     return cal
// };

// // const newNumbers = numbers
// // .map(val => 2 * val)
// // .map(val => Math.sqrt(val))
// // .map(val => 3 * val)
// // .map(val => val - 10)
// const isPositive = val => {
//     if (val >= 0) return true
// //     else return false;
// }
// const newNumbers = numbers
// .map(double) // name the function you declared
// .map(sqrtRoot)
// .map(triple)
// .map(takeOut10)
// .filter(isPositive) // filter out from array list


// console.log('input number', numbers)
// console.log('output numbers', newNumbers)
// //REDUCE
// const sumOfAll = numbers.reduce((previousSum, valueToAdd) => {
//     return previousSum + valueToAdd;
// }, 0)
//iter => acc + value
// 0   => 0    + 2
// 1   => 2    + 5
// 2   => 7    + 10
// 3   => 17   + 44
// 4   => 61   + 99

// console.log('sum of all should be 160', sumOfAll)

// // I HAVE AN ARRAY AND I WANT TO REMOVE DUPLICATED VALUES

// const names = ['marco', 'marco', 'marco', 'moni']
// const result = names.reduce((acc, item) => {
// if (acc.includes(item)) return acc;
// else return [...acc, item]
// }, [])


// iter   acc         item
// 0      []         'marco'
// 1     ['marco']   'marco'
// 2     ['marco']   'marco'
// 3     ['marco']   'moni'
// //  ['marco', 'moni']
// console.log(result)

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
 * 
 * 
 */
const booleanArr =  [true, true, false, false, true];
 const removeFalseValues = booleanArr.filter((checkBoolean) => checkBoolean);
 console.log(removeFalseValues);

 
  
  /**
   * A function that takes an array of numbers that are between 0 - 1.
   * The function needs to create a new array with the numbers converted into a percentage
   *
   * @param {number[]} numbersArr [1, .5, .7, .25]
   * @return {string[]} ["100%", "50%", "70%", "25%"]
   */

const convertToPercentage = val => 100 * val;
const inspect = val => { // tell you what it looks like after every interation
    console.log(val)
    return val
}

const numbersArr = [1, .5, .7, .25]
const createPercentageList = numbersArr 
 .map(convertToPercentage) // name the function you declared
 .map(inspect)
 .map(value => value + '%')
console.log(createPercentageList.toString())
  
  /**
   * A function that takes an array of possessions and a name.
   * The functions needs to create a new array with the name prefixed to each item.
   *
   * @param {string[]} possessionsArr ["shoes", "jacket", "belt"]
   * @param {string} name "disco"
   * @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
   */
const possessionsArr = ['shoes', 'jacket', 'belt']
   const listOfPossessions = possessionsArr.map((previousPossession) => {
        return 'disco ' + previousPossession ;
   });
    
    console.log(listOfPossessions);
  
  
  /**
   * Intemediate Challenges
   */
  
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
  
//   export const convertStringToNumbersArray = (numberString) => {
//     return;
//   };

//   function createArrayOfTiers(num) {
//     arrT= num.toString().split("")
//   let z= []
//   const result = arrT.reduce((acc, curr)=>{
//   acc= acc+curr
//   z.push(acc)
//   return acc

//   },"")
//       return z;
//   }
  
  /**
   * A function that takes a string of numbers joined with a "+" and creates a new array based on if the number is even or odd.
   * Every number in the string will need to checked.
   *
   * @param {string} numberString - "1+2+3+4+5"
   * @return {string[]} ['odd', 'even', 'odd', 'even', 'odd']
   */
  
//   export const createOddEvenArray = (numberString) => {
//     return;
//   };
  
  /**
   * A function that takes an array of book titles and a search term.
   * The function needs fo remove any book titles that do not include the search term.
   *
   * @param {string[]} booksArr ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"]
   * @param {string} - searchTerm - "Google"
   * @return {string[]} - ["The Google story"]
   */
  
//   export const filterBooksBySearch = (booksArr, searchTerm) => {
//     return;
//   };
  
  /**
   * Advanced Challenges
   */
  
  /**
   * A function that takes a list, cleans each item and joins them with a +.
   * When it "cleans" it remove's whitespace and makes sure the string is lowercase.
   *
   * This function is failing the test's can you figure out why?
   * The bug is within the function, the test's are fine.
   * Can you get it to pass the tests?
   *
   * @param {string[]} stringArr ["  dIsco", " ShOes "]
   * @return {string} "disco+shoes"
   */
  
//   export const formatStringArray = (stringArr) => {
//     const cleanedArr = stringArr.forEach((string) => {
//       const cleanStr = string.trim().toLowerCase();
//       return cleanStr;
//     });
  
    // console.log(???)
  
//     const joinedString = cleanedArr.join("+");
  
//     return joinedString;
//   };
  
  /**
   * A function that takes a string, cleans it and formats it based on a condition.
   *
   * It will need to remove anything that is NOT a letter from the string.
   * - e.g numbers, punctuation, whitespace.
   *
   * If the index of the letter is even the letter needs to be Uppercase.
   * If the index of the letter is odd the letter needs to be Lowercase.
   *
   * @param {string} string " 22 $$He LL--O!%^& "
   * @return {string[]} [ 'H', 'e', 'L', 'l', 'O' ]
   */
  
//   export const formatString = (string) => {
//     return;
//   };
  
  /**
   * Expert Challenge
   */
  
  /**
   * A function that takes an array and FizzBuzzes it.
   *
   * It should remove anything from the given array that is NOT a POSITIVE number or a POSITIVE number as a STRING.
   *
   * If we were given [-1, "disco", "3", 5, "15", 2, 0]
   * We would be left with this ["3", 5, "15", 2]
   *
   * It then needs to create a NEW array from this clean array based on the conditons below:
   *
   * For multiples of three replace the number with "Fizz".
   * For multiples of five replace the number with "Buzz".
   * For numbers which are multiples of both three and five replace the number with "FizzBuzz".
   * All the other numbers need to be strings.
   *
   * @param {*[]} mixedArray [-1, "disco", "3", 5, "15", 2, 0]
   * @return {string[]} [ "Fizz", "Buzz", "FizzBuzz", "2" ]
   */
  
//   export const fizzBuzz = (mixedArray) => {
//     return;
//   };
//    (edited) 
//   rock
//   carrot
//   egg
  
  
  
  
  
  