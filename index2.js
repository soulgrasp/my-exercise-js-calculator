
//   #### User input article 
// Alert
// Prompt
// Confirm
// If Conditionals
// === Comparisons
// Else, Else if
// Logical operators
// Truthy Falsey 

console.log("Banzai new section");

// IO stuff
//alert("Shebangs");

// prompt
/*
const nameOfUser = prompt("Who are u");

console.log(`You are: ${nameOfUser}`);
// returns string if click ok, will convert input to string
// null if canceled
*/

// Confirm  Boolean question

/*
const isOver20 = confirm("Are you over 20");  // OK === true || false

console.log(isOver20);
*/

/*  ###  The BOM (Browser Object Model)
These methods are not hovering on their own in JavaScript, 
they are actually connected to something. 
And this something is the BOM. BOM stands for 
Browser Object Model. 
It is an object the represents the Browser and its 
functionality and it is utilized with the windows keyword. 
Like this:

alert("Some string");

// is really like this:

window.alert("...some string");

// Same with the others:

window.promt("...some prompt");
window.confirm("...some confirmation text");
*/

// Good code hygene

let greeting;
greeting = "Hello Fellaz";
console.log(greeting);

// If-Statements

if (true)
    console.log("break a leg");


// Comparison dark JS dynamic magic
// implicit type conversion sample
//   ####  ==   ####


/*
const numbersAreEqual = 5 == 5;  // true
const numbersAreEqualAgain = 5 == "5"; // true implicit shit

//  ##### ===   #####
// strict comparison value and value types must be the same
const numbersAreEqualstrict = 5 === "5"; // false
const x = 5;
const y = "5";
const areTheyEqual = x === y;

console.log(areTheyEqual); // false not same value type

alert("Welcome to Netto (Denmark)");
const ageRestriction = 16;
const age = prompt("your age");
const ageAsNumber = window.parseInt(age); // type conversion from string
if (ageAsNumber < 15)
{
    alert("get the f out youngster");
}
else {
    alert("Vel bekommen");
}
    */

// if
// else if
// else

// ### Logical operators &&  AND

// ### Logical operators ||  OR

// same as C#

// good coding standard  break out complex logic conditions to a separate variable

/*
const goodWorker = hasCertificate || (isAvailable && hasFSkatt) || isOldEnough;

if (goodWorker) {
  // This is easier to read, and hopefully the nameing of the variable explains what it contains in some way.
}
*/


const lifeIsSweet = true;
//console.log(`Life is sweet = ${!lifeIsSweet}`); // print false


// JS black shit Truthy n Falsey

/*
A value is considered truthy if it coerces to true when evaluated in a boolean context, like an if check for instance.

    Non-empty strings: Any string with at least one character is truthy

    Numbers (except 0): Any number excepts 0 is truthy.

    Objects: All objects are truthy, even empty ones.

    Arrays: All arrays are truthy, even empty ones.

    Function: Defined functions are truhty.

// TS syntax, just go with it. This means that user can have to types of value, IUser or null.
let user: IUser | undefined;

if (user) {
  // ...do something with the user if the user is considerd truthy, or in this case of the type IUser.
}

if ("Niklas") {
  // ...This codeblock will run since any string with atleast one character is consederd truthy.
}

if (155) {
  // ..also truthy, since all numbers except 0 is truthy.
}
*/

// Falsey things in JS
/*
A value is considered falsey if it coerces to false when evaluated in a boolean context, like an if check for instance.

    Empty string: An empty string (""), or (''), or (``) is falsey.

    The number 0: The number 0 is falsey.

    null: The null value is falsey.

    undefined: The `undefined is also falsy.

    NaN: Not-a-number is also falsy.

if ("") {
  // Will not run since it's falsy.
}

let user;

if (user) {
  // Is falsy since we haven't assigned a value to the user variable.
}
*/








