// // variables
// const age = 18;

// // camelCase
// // name of my variable => NameOfMyVariable (every single word after the first will be capital case)
// // MAX_NUMBER_OF_USERS = 5 (use for those const that can never change)
// let ageToRetire = 67;
// const country = 'Italy'

// if (country === 'Italy') {
//     ageToRetire = 65;
// }

// let canRetire = false;
// if (age >= ageToRetire) {
//     console.log('you can retire now')
// } else {
//     console.log ('you are too young to retire')
// }

// // modulus operator 
// // 5/2 = 2 with ar remainder of 1 (modulus is 1)

// let isEven = false;
// if (age % 2 === 0) {
//     isEven = true;
// }

// if (isEven) {
//     console.log ('your age is even')
// }


// Code-Along Challenges
// // if a name, is a coaches name log, it is a coach

// const name = 'Blanche';
// if (name === 'Blanche') {
//     console.log ('it a coach')
// } 

// const greeting = 'bonjour';
// if (greeting === 'bonjour') {
//     console.log ('cava')
// }

// const score = 10;
// if (score === 10) {
//     console.log ('you won a game')
// }

// let timeToRetire = 65;
// if (age >= timeToRetire) {
//     console.log ('time to retire')
// }

// const hasCovid = true;
// const isShielding = false;
// if (hasCovid || isShielding) {
//     console.log('time to isolate')
// } else {
//     console.log('keep social distances')
// }

// const isBritish = true;
// if (age >= 18 && isBritish) {
//     console.log('you can vote next election')
// } else {
//     console.log('you cannot vote')
// }

// const grade = 'E'
// let percentage = null;
// switch  (grade) {
//     case 'A':
//         percentage = '90-100%'
//         console.log('your grade is' , percentage);
//         break;

//     case 'B':
//         percentage = '80-90%'
//         console.log('your grade is' , percentage);
//         break;
    
//     case 'C':
//         percentage = '70-80%'
//         console.log('your grade is' , percentage);
//         break;

//     case 'D':
//         percentage = '60-70%'
//         console.log('your grade is' , percentage);
//         break;
//     default:
//         console.log('I dont know your percentage');
// }


// AFTERNOON CHALLENGES
// Create an if statement to check if a number is positive or negative

const isPostiveNumber = 2;
if (isPostiveNumber >= 0) {
    console.log('number is postive') 
} else { 
        console.log('number is negative')
}
// Use an if statement to determine the greatest of three numbers
const number1 = 10;
const number2 = 5;
const number3 = 2;
if (number1 >= number2 && number1 >= number3) {
    console.log('The largest number is ' + number1)
} 
else if (number2 >= number1 && number2 >= number3) {
    console.log('The largest number is ' + number2)
} 
    
else { 
    console.log('The largest number is ' + number3)
}

// Create a "Days until the weekend" switch case. Given a day, e.g "Tuesday" , log "Only 3 more days until the weekend"
// if the isn't recognised, use a defualt to show "Sorry we didn't recognise that day"
const day = 'Friday'
switch(day) {
    case 'Sunday':
        console.log('It the weekend');
        break;
    case 'Monday':
        console.log('4 days until the weekend');
        break;
    case 'Tuesday':
        console.log('3 days until the weekend');
        break;
    case 'Wednesday':
        console.log('2 days until the weekend');
        break;
    case 'Thursday':
        console.log('1 day until the weekend');
        break;
    case 'Friday':
        console.log('0 day until the weekend');
        break;
    case 'Saturday':
        console.log('It the weekend');
        break;
    default:
        console.log('Sorry we didnt recognise that day');
}

// Create a switch case for vegetables prices at a supermarket. 
// It should have potatoes and carrot as the same price per kg,
// but brocolli, cabbage and asparagus as different prices. 

const vegetable = 'carrot'
switch(vegetable) {
    case 'potatoes':
    case 'carrot':
        console.log('£2.30p per kg')
        break;

    case 'brocolli':
        console.log('£1.65p per kg')
        break;

     case 'cabbage':
        console.log('£2.00 per kg')
        break;
    default:
        console.log('Not available today');
}

