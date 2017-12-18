/**
 * 10. Variables and scoping
 */

// helper function, delimiter for console logs
function delimiter() {
    console.log();
    console.log("--------------------------------------");
    console.log();
}

// let and const creates variables that are block-scoped
// while var creates variables that are function-scoped
function foo1(){
    if(true){
        let x = 11;
    }
    // console.log(x); <-- ReferenceError
}

// we can shadow variables
function foo2(){
    let x = 5;
    if(true){
        let x = 10; // shadows outer x
        console.log(x);
    }
    console.log(x);
}
foo2();

delimiter();

// const creates immutable variables

const MY_PI = 3.14;
// MY_PI = 3.1415; <-- ERROR

// but values may not be immutable
const MY_OBJ = {};
MY_OBJ.prop = "beer";   // thats OK
console.log(MY_OBJ);
// MY_OBJ = {};         // thats NOT

delimiter();

// temporal dead zon - TDZ

{   // TDZ starts here

    // storage space (binding) is created for tmp, but its uninitialized yet

    tmp = "goat";       // ReferenceError
    console.log(tmp);   // ReferenceError

    let tmp;            // TDZ ends here, tmp is initialized, but undefined
    console.log(tmp);

    tmp = "tiger";
    console.log(tmp);

}   // end of scope, end of tmp

// it seems that the example above dont throw an exception if i run it in my
// node + babel setup, but in ES6 it should work as i wrote in the comments

delimiter();

// notable things

// variables created with var are become properties of the global object
// it is not the case for let, but we can assign them to the global object
// for browsers its window, for Node.js its global

// now it is better to use let and const instead of var
