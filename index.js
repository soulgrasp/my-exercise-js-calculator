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
let firstName = "Niklas";

firstName = "Dimitris";

console.log(firstName);

const birthYear = 1990;

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

console.log(person);
// all is possible to put inside an object




