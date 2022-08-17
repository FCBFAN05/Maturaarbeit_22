/* reusable JS function */
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

/* function with values*/
function functionWithArgs(arg1, arg2) {
    const sum = arg1+arg2;
    console.log(sum);
}

functionWithArgs(1,2);

/* return value from function with return */
function timesFive(num) {
    return num*5;
}

const result = timesFive(5);

/* global scope with functions*/
let myGlobal = 10;

function fun1() {
    myGlobal2 = 5;
}

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof myGlobal2 != "undefined") {
        output += " myGlobal2: " + myGlobal2;
    }
    console.log(output);
}

/* Local scope with functions */
function myLocalScope() {
    const myVar = 'xy'
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

/* Global vs. Local Scope with functions */
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    return "sweater";
}

myOutfit();

/* undefined value returned from a function */
// Setup
let sum2 = 0;

function addThree() {
    sum2 += 3;
}

function addFive() {
    sum2 += 5;
}

addThree();
addFive();

/* Assignment with a returned value */
// Setup
let processed;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

/* queue */
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* Comparison with the Equality Operator */
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual("12"); // true

/* Comparison with the Strict Equality Operator */
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict("7"); // false

/* Comparison with the Inequality Operator */
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual("99"); // true

/* Comparison with the Strict Inequality Operator */
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual("17"); // false

/* Comparison with the Greater Than Or Equal To Operator */
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }
    return "Less than 10";
}

testGreaterOrEqual(10);

/* Comparison with the Less Than Or Equal To Operator */
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

testLessOrEqual(10);

/* Comparisons with the Logical And Operator */
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

testLogicalAnd(10);

/* Comparisons with the Logical Or Operator */
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

testLogicalOr(15);

/* Chaining If Else Statements */
function testSize(num) {
    if (num < 5)
        return "Tiny";
    else if (num < 10)
        return "Small";
    else if (num < 15)
        return "Medium";
    else if (num < 20)
        return "Large";
    else
        return "Huge";
}

testSize(7);

/* Multiple Conditional (Ternary) Operators */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    return strokes === 1
        ? names[0]
        : strokes <= par - 2
            ? names[1]
            : strokes === par - 1
                ? names[2]
                : strokes === par
                    ? names[3]
                    : strokes === par + 1
                        ? names[4]
                        : strokes === par + 2
                            ? names[5]
                            : names[6];
}

/* Switch */
function Switch(val) {
    let answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}

/* Returning Boolean Values from Functions */
function isLess(a, b) {
    return a < b;
}

isLess(10, 15);

/* Multiple Identical Options in Switch Statements*/
function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }
    return answer;
}

/* Return Early Pattern for Functions */
// Setup
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

/* Counting Cards */
let count = 0;

function cc(card) {
    const regex = /[JQKA]/;
    if (card > 1 && card < 7) {
        count++;
    } else if (card === 10 || regex.test(card)) {
        count--;
    }

    if (count > 0) return count + " Bet";
    return count + " Hold";
}

/* Using Objects for Lookups */
function phoneticLookup(val) {
    let result;
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];
    return result;
}

/* Testing Objects for Properties */
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}

/* Complex Objects */
const myMusic = [
    {
        artist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: ["CD", "8T", "LP"],
        gold: true
    },
    {
        artist: "Deep Purple",
        title: "Smoke on the water",
        release_year: 1976,
        formats: ["CD", "8T", "LP"]
    }
];

/* Record Collection */
// First Version:
// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }
    return records;
}

// Second Version:
const recordCollection2 = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords2(records, id, prop, value) {
    if (value === '') {
        delete records[id][prop];
    } else if (prop === 'tracks') {
        records[id][prop] = records[id][prop] || []; // short circuit evaluation
        records[id][prop].push(value);
    } else {
        records[id][prop] = value;
    }
    return records;
}

/* Nesting For Loops */
function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/* parseInt Function with radix */
function convertToInteger(str) {
    return parseInt(str, 2);
}
convertToInteger("10011");

/* Arrow Functions */
const magic = () => new Date();

/* Arrow Functions with parameters */
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

/* Default parameters for functions */
const increment = (number, value = 1) => number + value;

/* Rest parameter */
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

/* Convert character to ASCII Code */
"\n".charCodeAt(0);

/* Erklärung Arrays */

let oneDimensionArray = [0,1,2,3,4,5]
console.log(oneDimensionArray[0])
let twoDimensionArray = [["00","01","02","03","04","05"],["00","01","02","03","04","05"],["00","01","02","03","04","05"]]
console.log(twoDimensionArray[0][0])

/* Erklärung If/ Else if/ Else */
let number = 6
if (number < 10) {
    console.log("Tiny")
} else if (number < 20) {
    console.log("Small")
} else if (number < 50) {
    console.log("Medium")
} else if (number < 100) {
    console.log("Large")
} else {
    console.log("Huge")
}