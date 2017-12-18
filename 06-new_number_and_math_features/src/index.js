/**
 * 6. New number and Math features
 */

// helper function, delimiter for console logs
 function delimiter() {
     console.log();
     console.log("--------------------------------------");
     console.log();
 }

// specify integers in hex, binary and octal
console.log(0xFF);
console.log(0b11);
console.log(0o10);

delimiter();

// new property for global object Number, for comparing floating point numbers with tolerance
console.log(Number.EPSILON);

delimiter();

// we can convert numbers back
console.log((255).toString(16));
console.log((8).toString(8));
console.log((7).toString(2));

delimiter();

// use case of octal literals: UNIX-style file permissions
// user | group | all
// rwx | rwx | rwx
// for example: 755
// 111 | 101 | 101
// rwx | r-x | r-x
console.log(0o755);

delimiter();

// parseInt() and the new integer literals

// by default, parseInt works for hexadecimal literals
console.log(parseInt("0xFF"));
console.log(parseInt("0xFF", 0));
console.log(parseInt("0xFF", 16));

// in any other cases, it only parses until the first non-digit
console.log(parseInt("0xFF", 10));  // it will only parse 0

// parseInt() does not supports binary and octal literals, we have to use Number for these cases
console.log(Number("0b11"));
console.log(Number("0o1"));

// or we can remove prefix and use parseInt() with radix
console.log(parseInt("11", 2));

delimiter();

// new static Number properties

// Number.isFinite()
// is the given parameter an actial number?
// it DOES NOT coerce the given paramter to number (like the global isFinite() function does)
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite("123"));
console.log(Number.isFinite(123));

delimiter();

// Number.isNaN()
// check if the given parameter is NaN
// it DOES NOT coerce the given parameter to number (like the global isNaN() function does)
// note, that NaN === NaN is false!!!
console.log(NaN === NaN);
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("123"));

delimiter();

// usage of Number.EPSILON
// 0.1 and 0.2 can be represented precisely, but 0.3 cant!
console.log(0.1 + 0.2 === 0.3); // this is false
console.log((Math.abs(0.1 + 0.2 - 0.3)) < Number.EPSILON);  // this is true

delimiter();

// Number.isInteger()
// returns true, if the parameter is a number, and does not have decimal fraction
console.log(Number.isInteger(33));
console.log(Number.isInteger(33.3));
console.log(Number.isInteger(NaN));

delimiter();

// the Math global object also contains a lot of usefull mathematical functions
// like: Math.sign(), Math.trunc(), Math.sinh(), etc.

console.log(Math.sign(-69));
console.log(Math.trunc(123.4567));

delimiter();
