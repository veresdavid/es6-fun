/**
 * 7. New string features
 */

// helper function, delimiter for console logs
 function delimiter() {
     console.log();
     console.log("--------------------------------------");
     console.log();
 }

// template literals

// string interpolation
let first = "David";
let last = "Veres";
console.log(`Hi, my name is ${first} ${last}!`);

delimiter();

// multiple line string
let multy = `This is
a multiple
line string!`;
console.log(multy);

delimiter();

// "raw"
let raw = String.raw`This is slash n: \n`;
console.log(raw);

delimiter();

// strings are iterable

for(let ch of "abc"){
    console.log(ch);
}

delimiter();

// there are also some cool features abot code points, but im not itnerested in them :P

// checking containment and repeating strings

console.log("David".startsWith("Da"));
console.log("David".endsWith("id"));
console.log("David".includes("avi"));
console.log("skrrra ".repeat(3));

delimiter();
