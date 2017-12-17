/**
 * 8. Symbols
 */

// helper function, delimiter for console logs
function delimiter() {
    console.log();
    console.log("--------------------------------------");
    console.log();
}

// symbols are a new primitive type in ES6

// we can create them via the factory function Symbol()
let symbol1 = Symbol();

// it can take a string parameter, which is the description of the symbol
let symbol2 = Symbol("i am a new symbol");

// each symbol returned by Symbol() is unique!!!
console.log(Symbol() === Symbol());

delimiter();

// description does not matter, it is just a description string
let symbol3 = Symbol("desc");
let symbol4 = Symbol("desc");
console.log(symbol3 === symbol4);

delimiter();

// some main use cases of symbols

// symbols as property keys
// this way, property keys never clashes
const MY_KEY = Symbol();
let obj = {};
obj[MY_KEY] = 123;
console.log(obj[MY_KEY]);

delimiter();

// even for methods
const FOO = Symbol();
let foo = {
    [FOO](){
        return "bar";
    }
};
console.log(foo[FOO]());

delimiter();

// enumerating own property keys

let xmas = {
    [Symbol("white christmas?")]: true,
    numberOfPresents: 5
};

console.log(Object.getOwnPropertyNames(xmas));      // ingores symbol-valued property keys
console.log(Object.getOwnPropertySymbols(xmas));    // ignores string-valued property keys

delimiter();

// using symbols to represents concepts

// https://en.wikipedia.org/wiki/Suit_(cards)
const SYMBOL_DIAMONDS = Symbol("symbol of diamonds");
const SYMBOL_HEARTS = Symbol("symbol of hearts");
const SYMBOL_CLUBS = Symbol("symbol of clubs");
const SYMBOL_SPADES = Symbol("symbol of spades");

function isRedSymbol(symbol){
    if(symbol === SYMBOL_DIAMONDS || symbol === SYMBOL_HEARTS){
        return true;
    }else if(symbol === SYMBOL_CLUBS || symbol === SYMBOL_SPADES){
        return false;
    }else{
        throw new Exception("No such symbol!");
    }
}

console.log(isRedSymbol(SYMBOL_DIAMONDS));
console.log(isRedSymbol(SYMBOL_CLUBS));

delimiter();

// there are also other topcis, like crossing realms with symbols,
// wrapper objects for symbols, converting symbols to primitive types or
// JSON and symbols, but i think i dont need them right now :)
