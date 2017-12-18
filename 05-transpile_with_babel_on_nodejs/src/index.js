/**
 * ES6 transpile example, based on: http://babeljs.io/docs/setup/#installation
 */

import test from "./stuff";
import Point from "./point";

test("BABEL IS WORKING!!!");

let point = new Point(1, 2);
console.log(`My point: ${JSON.stringify(point)}`);
