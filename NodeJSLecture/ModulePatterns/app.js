var greet1 = require('./greet1.js');

greet1();

//Assigning direct property from greet2.js & invoking it
var greet2 = require('./greet2.js').greet2;

greet2();


//Invoking specific functions from greet3.js
var greet3 = require('./greet3.js');

greet3.greetFn1();
greet3.greetFn2();


var greet4 = require('./greet4.js');
greet4.greet();


//Notes: Syntax from ES6 for modules

//   greet.js
//  ---------------------------
//   export function.greet() {
//      console.log('Hello');
//   }
//  ---------------------------


//  app.js
//  ---------------------------
//  import * as greetr from 'greet';
//  greetr.greet();
//  ---------------------------