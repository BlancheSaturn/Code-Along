
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