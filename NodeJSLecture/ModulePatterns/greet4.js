var greeting = 'Hello from greet4.js';

function greet() {
    console.log(greeting);
}

//revealing module pattern
module.exports = {
    greet: greet
}