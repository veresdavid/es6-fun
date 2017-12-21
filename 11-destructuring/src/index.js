/**
 * 11. Destructuring
 */

// helper function, delimiter for console logs
function delimiter() {
    console.log();
    console.log("--------------------------------------");
    console.log();
}

// first, lets create and object and an array
let me = {
    first: "David",
    last: "Veres",
    age: 22,
    gender: "male",
    job: "student"
};

let numbers = [1, 2, 3, 4, 5];

// object patterns

// extract values from an object
// get first and last properties from object me, and assign them to new
// variables, called myFirstName and myLastName
let { first : myFirstName, last: myLastName } = me;
console.log(myFirstName);
console.log(myLastName);

delimiter();

// array patterns

// we can user array pattern on iterables, like arrays, string, sets, etc.

// get the first and second values from an array
let [ first, second ] = numbers;
console.log(first);
console.log(second);

delimiter();

// get first letter of string
let [ firstChar ] = "Dave";
console.log(firstChar);

delimiter();

// non existing properties and array elements

// return default value, or undefined

// hairColor is not a property of the object me
let { hairColor : color } = me;
console.log(color); // undefined

delimiter();

// we can use default value
let { hobby : myHobby = "skateboarding" } = me;
console.log(myHobby);

delimiter();

// undefined triggers default value
me.weight = undefined;
let { weight : myWeight = 60 } = me;
console.log(myWeight);  // should be the default value, 60

delimiter();

// we can refer to other values in a pattern

let [ value = 3, valueAgain = value ] = [];
console.log(value);
console.log(valueAgain);

delimiter();

// property value shorthands

let { age, gender } = me;
console.log(age);
console.log(gender);

delimiter();

// computed property keys

// if the key of the property is a symbol
const KEY = Symbol("i am a key");
me[KEY] = "ES6";
let { [KEY] : es6 } = me;
console.log(es6);

delimiter();

// more array destructuring features

// we can skip elements of an array
let [,,third] = numbers;
console.log(third);

delimiter();

// the rest operator
let [ firstElement, ...rest ] = numbers;
console.log(rest);

delimiter();

// we cant mix declaring and assigning to existing variables
// but we also cant start destructuring with a curly brace
// because it would look like a block
/*
let davidAge;
({ age : davidAge }) = me;
console.log(davidAge);

delimiter();
*/

// examples

// for-of loop
let map = new Map().set("no", false).set("yes", true);
for(let [ key, value ] of map){
    console.log(`${key} - ${value}`);
}

delimiter();

// multiple return values
function findElement(array, predicate){
    for(let [ index, element ] of array.entries()){
        if(predicate(element)){
            return { element, index };
        }
    }
    return { element: undefined, index: -1 };
}

let { element, index } = findElement([1, 3, 5, 7, 9, 11], x => x === 5);
console.log(element);
console.log(index);

delimiter();
