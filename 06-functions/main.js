
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
 