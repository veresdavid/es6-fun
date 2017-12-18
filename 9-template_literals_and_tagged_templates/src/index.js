/**
 * 9. Template literals and tagged templates
 */

// helper function, delimiter for console logs
function delimiter() {
    console.log();
    console.log("--------------------------------------");
    console.log();
}

// template literals

// i have used it earlier
// we can make multiple line template literals, and also interpolate expressions
const name = "Dave";
console.log(`Hello ${name}
this is your
multiple line
string!`);

delimiter();

// tagged templates

/**
 * an example of tagged templates:
 * tagFunction`Hello ${firstName} ${lastName}!`
 * the name before the content in backquotes is a name of a function to call,
 * this is a tag function
 * the tag function receives two kinds of data:
 *  - template strings (like 'Hello ')
 *  - substitutions (like firstName)
 */

// i have already used tagged templates
console.log(String.raw`Slashes \n wont be \n\t escaped!`);

delimiter();

// tagged templates can be used for example in regular expressions or
// text localization, but im currently not interested in these topics

// implementing a tag function
function myTagFunction(templateStrings, ...substitutions){
    console.log(templateStrings);
    console.log(substitutions);
}
myTagFunction`Hi ${name}, this is ${name}!`;

delimiter();
