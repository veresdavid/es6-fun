/**
 * 12. Parameter handling
 */

// helper function, delimiter for console logs
function delimiter() {
    console.log();
    console.log("--------------------------------------");
    console.log();
}

// default values

function add(x = 0, y = 0){
    return x + y;
}
console.log(add(5, 6));

// undefined triggers default
console.log(add(undefined, 2));

// we can refer to other parameters
function refer(x, y = x){
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);
}
refer(11);

delimiter();

// rest parameters

function guys(...names){
    console.log("We have");
    for(let name of names){
        console.log(name);
    }
    console.log("here.");
}
guys("Dave", "Tom", "Peter");

delimiter();

// simulating named parameters

// simulating named parameters with destructuring
function processorInfo({ name = "Intel Core i5", numberOfProcessors = 4, numberOfThreads = 4} = {}){
    console.log(`I have a processor, named ${name} with ${numberOfProcessors} processors and ${numberOfThreads} threads.`);
}
processorInfo();
processorInfo({ name: "AMD Athlon" });
processorInfo({ numberOfProcessors: 4, numberOfThreads: 8 });

delimiter();

// examples of destructuring

// forEach loops
let items = [ ["foo", 2], ["bar", 3] ];
items.forEach(([ word, count ]) => {
    console.log(`${word} - ${count}`);
});

delimiter();

// coding style tips

// use undefined as default value for optional parameters
function optional(param1, param2 = undefined){
    // do something
}

// required parameters
function mandatory(){
    throw new Error("Parameter must be provided!");
}

function foo(param = mandatory()){
    console.log(`Your param is ${param}.`);
}

// foo();  // will throw an error
foo(10);

delimiter();

// enforcing a maximum arity
// there are more ways to do this
function maxArity1(...args){

    if(args.length > 2){
        throw new Error();
    }

    let [x, y] = args;  // get those 2 parameters

    console.log(`${x} and ${y}`);

}
// console.log(maxArity1(1, 2, 3));    // error
maxArity1(1, 2);

function maxArity2(x, y){

    if(arguments.length > 2){
        throw new Error();
    }

    console.log(`${x} and ${y}`);

}
// console.log(maxArity1(1, 2, 3));    // error
maxArity2(3, 4);

delimiter();

// the spread operator

// it looks the exact same as the rest of operator, but does its opposite
// the spread operator is used to turn arrays into function arguments
// or into elements of an array literal

// Math.max()
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.max(...[1, 2, 3, 4, 5]));

delimiter();

// spreading into arrays
let myArray = [1, 2, ...[3, 4], 5];
console.log(myArray);

delimiter();

// we can concatenate arrays
let array1 = ['a', 'b'];
let array2 = ['c', 'd'];
let arrayConcat = [...array1, ...array2];
console.log(arrayConcat);

delimiter();

// we can convert iterable objects into arrays
// like a set
let mySet = new Set([5, 6, 7]);
let arrayFromSet = [...mySet];
console.log(arrayFromSet);

delimiter();
