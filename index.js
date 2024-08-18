console.log("Hello world");

/*  
Primitive types
Number      '1, 2, 3.14, -564, 64713412'    Double i c# 64bit
String      'text', "text", `text`          Same as c# single double quotes o backtics allowed  
Boolean     true, false
Null        'null'                  Used when we explicitly set a variable with no value.
Undefined                                   for not yet defined variables

Nan = nummeroperationer på ej godkänd typ

Variables
*/
/*
let firstName = "Niklas";

firstName = "Dimitris";

console.log(firstName);

const birthYear = 1990;
*/
/*
birthYear = 2000; error not 
*/
// we can always change type and value of a let variable.
 
firstName = true;
console.log(firstName); // not recommended

// var är function scoped, not block scoped
// have other default behaviour, for legacy

// Object all is an object but not all
// sanna object arrays and functions
// primitiva är inte object, uses wrapper classes for temp func
// Object literals separated from the object

const person = {
    name: "Niklas",
    prof: "Developer",
    age: 45,
    sports: ["Football", "TableTennis"],
    certified: false,
    sayHeil: function(){
        console.log(`Hi my name is ${this.name}`);
    },
};

/*
console.log(person);
console.log(person.name);  // dot notation
// all is possible to put inside an object

console.log(person["prof"]); // square bracket notation alternative way to access

person.name = "Henrik"; // modify existing property

console.log(person.name);

person.children = 3; // out of the blue just add a new property
console.log(person.children);

person.sayHeil(); // invoke function
//delete person.prof; // remove property




// loop through an object in js
// for in för object 
// for of för arrays
for (const key in person) {
    console.log(person[key]);
    // need to use bracket notation to access dynamic variables
}
// semicolon is optional in JS
*/
// Arrays a special type of object, arrays you use index instead of keys
// in JS arrays are dynamic

// ###### End section  ########

/*

const sports = ["football", "handball", "basketball", "tennis"];
// accepts types dynamically
console.log(sports);
// access and manipulation via index
console.log(sports[1]);
sports[1] = "golf";

console.log(sports[1]);
sports.push("Hockey"); // add new element to the end of the array
console.log(sports);
// remove
sports.pop(); // removes last element of array
console.log(sports);
console.log(sports.length); // get number of elements in the array
const removedElement = sports.pop();  // save removed object/element
console.log(removedElement);
sports2 = ["football", "handball", "basketball", "tennis"];
// unshift() // add new element to beginning of array
// shift() remove the first elment of array

// foreach ( callback(element, index?))
// callback function that is used as a paramenter/argument
sports2.forEach(function(element){
    console.log(element); // loop ove sports and print every object to console, written  a mini function in the calling argument
});

// includes (searchElement) if element exists or not in array
const doesSoccerExists = sports2.includes("football");
console.log(doesSoccerExists);

// indexOf ( searchElement) // returns index
const indexOfTennis = sports2.includes("basketball");
console.log(indexOfTennis);

// slice ( start, end) gets intersection from an array (sub arrays) includes start index but excludes the end index object
const aSlice = sports2.slice(1,3);  // gets second and third elements
console.log(aSlice);

// splice(start, deleteCount?, item1?, itemN) used to insert and delete element in the middle of an array
console.log(sports);
const deletedElement = sports.splice(2, 1,"Curling", "Badminton") // deletecount 1, use 0 for not delete any element
console.log(sports);

// map( callback(elemenent, index?) )  // returns a new array with the modified content
const numbers = [1, 2, 3, 4];
const numbersDoubled = numbers.map(function(number){ // new values ends up in the new array is used to modify each element in an array and return result
    if (number === 3){
        return number * 3;
    }
    return number * 2;
})

console.log(numbers);
console.log(numbersDoubled);

// filter( callback(element, index?)) // returns elements that pass the filter condition
const numbers2 = [1, 23, 32, 44, 55, 60];
const numbers3 = numbers2;
console.log(numbers2)
const filteredNumbers = numbers2.filter(function(element){
    if (element > 50) // must return true or false
        return false; // filtered away

    return true; // passed and returned
});

console.log(filteredNumbers);  // print elements that passed the condition

console.log(numbers3);
const filteredNumbers2 = numbers3.map(function(number){
    if (number === 32){
        return number;
    }

    return number * 2;
})
console.log(filteredNumbers2);

*/
// ###### End section  #######

// ###########   Functions  ########
//  can have free functions not connected to a class fundamental difference with c#. Reusability 

const sum = add(5, 7);
console.log(sum);

// const sum2 = multiply(5,5); Example this crashes hence comment line

// free functions gets hoisted to the top  **  important  **
function greet(name) {
    console.log(`Hello ${name}`);
}


function add(a, b) {
    return a + b;
}

// nameing function  functions with a variable
// Store functions in variables, function expression  function is defined in a variable
const multiply = function(a,b) {
    return a * b;
}
// Does not get hoisted to the top, hence sequence dependent in code
// put pure functions on the top for structure and clear code

// ## Arrow functions ##  
//  Provides a shorter syntax for writing functions in JS. They are partic useful for wring concise one-liner functions
// and callback functions

// normal way
const divide1 = function(a,b) {return a/b;}
// arrow way
const divide2 = (a,b) => {
    return a / b;
};
const divide3 = (a,b) => a / b;  // the one line way

// =>  eliminates the function keyword
// if the return value is simple use it

// Most common Use cases for arrow functions  Callback
const numbers = [1, 4,6,234];

const doubleNumbers = numbers.map((number) => number * 2);

const filteredNumbers = numbers.filter((number) => number < 50);




// consolen är en JS tolk interpreter
// functions without return = undefined

// comparisons   "==" vs "==="


