
// FUnctions
// check with the string includes method if "arc"
// is included in the string 
// @param {String} - the string that has to be tested
// @returns {boolean} - returns the result of the test

const coffeeMachine = (option) => {
    if (option === 1) return 'expresso'
    else if (option === 2) return 'macchiato'
    else return 'we dont this coffee here'

}
coffeeMachine(1)


// const sayHello = (name) => {
//     console.log("Hello " + name);
//     }
// sayHello("John");
// //output: Hello John
// sayHello("Jane");
// //output: Hello Jane





// This is a function says Hello
//@param name {String} - the input name of the person to greet
//@returns {string} - greeting message
function sayHello(name) {
    const greeting = 'hello ' + name;
    return greeting;

}
const sayHelloToBlanche = sayHello('Blanche');
console.log(sayHelloToBlanche)

// Gives the volume of a pyramid
// @param height {number}
// @param baseWidth {Number}
// @param baseLength {Number}
// @returns {Numbner} - volumn of my pyramid
// l * w * h /3

const getPyramidVolume  = (basewidth, baseLength, height) => {
    const volume = (baseLength * basewidth * height) /3;
    const volumnFormatted = parseFloat(volume.toFixed(2))
    return volumnFormatted;
}
console.log(getPyramidVolume(100, 50, 50));

// Same but different solution
const getPyramidVolume2  = (basewidth, baseLength, height) => (baseLength * basewidth * height) /3;
    console.log(getPyramidVolume2(100, 50, 50));

// Write a function to find a perimeter of a retangle.
const calculatePerimeter = (width, height) => {
    const perimeter = (width + width + height + height);
        return  perimeter;
  }
  
  console.log(calculatePerimeter(1,1));

// Write a function to find the area of a circle. when given a radius, print the area to the console.
const calculateArea = (radius) => {
    const area = (Math.PI * radius * radius);
    return area
    console.log(area)
}
console.log(calculateArea(2));

// Now do the same to find the circumference of a circle

const calculateCircumference = (radius) => {
    const circumference = Math.PI * 2 * radius;
    return circumference
}
console.log(calculateCircumference(1));

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of your life (based on a constant max age).
// outputs the result to the screen like so: "You will need X to last you until the ripe old age of Y"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = (currentAge, amountPerDay) => {
    const maxAge = 70;
    const AVG_DAYS_YEARS = 365.25;
    const remainingYears = maxAge - currentAge;
    const totalSnickersPerLifetime = (amountPerDay * AVG_DAYS_YEARS * remainingYears);
    // const message = ('You need ' + totalSnickersPerLifetime + ' supply of snickers to last you until the age of ' + maxAge);
    console.log(`You need ${Math.round(totalSnickersPerLifetime)} supply of snickers to last you until the age of ${maxAge}`);
  
}
calculateSupply(35, 5);
calculateSupply(45, 2);
calculateSupply(67, 11);

// **The Temperature Converter**
// It's hot out! Not. Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "X°C is Y°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "X°F is Y°C."
 
const celsiusToFahrenheit = (celsius) => {
    const convertcelsiusToFahrenheit = (celsius * 9) /5 + 32;
    console.log(celsius + '°C is ' + convertcelsiusToFahrenheit + '°F')
}
celsiusToFahrenheit(23);

// **The Puppy Age Calculator**
// You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

const calculatePuppyAge = (age) => {
    const puppyAge = age * 7;
    console.log('Your puppy is ' + puppyAge + ' years old in dog years')
}
calculatePuppyAge(2);
calculatePuppyAge(5);
calculatePuppyAge(7);

// CAESAR CIPHER ENCRYPTOR
// try to develop a Caesar cipher encryptor

// Given a non-empty string of lowercase letters and a non negative integer representing a key, 
// write a function that returns a new string obtaining by shifting every letter in the input string by k positions in the alphabet, 
// where k is the key
// Of course letters should "wrap" so if you have the letter "z" shifted by 1 it will return "a"

// const inputText = "xyz"
// const key = 2

// const caesarEncryptor = (text, key) => {
//     const alphabet = ['a','b','c','d','e','f','g','h','i','j','k',
//     'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
//     const cipher = (text - key);
//     console.log(cipher)
// // Maybe I have to use for loop to iterate between the letters
// }
// caesarEncryptor('efg')

for (let index = 0; index < 5; index++) {
    console.log("The number is " + index);
}

let names = ["Andy", "Sam", "Bex"];
for (let index = 0; index < names.length; index++) {
console.log(index);
}