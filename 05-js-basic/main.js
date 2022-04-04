// variables
const age = 18;

// camelCase
// name of my variable => NameOfMyVariable (every single word after the first will be capital case)
// MAX_NUMBER_OF_USERS = 5 (use for those const that can never change)
let ageToRetire = 67;
const country = 'Italy'

if (country === 'Italy') {
    ageToRetire = 65;
}

let canRetire = false;
if (age >= ageToRetire) {
    console.log('you can retire now')
} else {
    console.log ('you are too young to retire')
}

// modulus operator 
// 5/2 = 2 with ar remainder of 1 (modulus is 1)

let isEven = false;
if (age % 2 === 0) {
    isEven = true;
}

if (isEven) {
    console.log ('your age is even')
}

// if a name, is a coaches name log, it is a coach

const name = 'Blanche';
if (name === 'Blanche') {
    console.log ('it a coach')
} 

const greeting = 'bonjour';
if (greeting === 'bonjour') {
    console.log ('cava')
}

const score = 10;
if (score === 10) {
    console.log ('you won a game')
}

let timeToRetire = 65;
if (age >= timeToRetire) {
    console.log ('time to retire')
}

const hasCovid = true;
const isShielding = false;
if (hasCovid || isShielding) {
    console.log('time to isolate')
} else {
    console.log('keep social distances')
}

const isBritish = true;
if (age >= 18 && isBritish) {
    console.log('you can vote next election')
} else {
    console.log('you cannot vote')
}
