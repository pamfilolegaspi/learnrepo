//function statement
function greet() {
    console.log('Hi');
}

greet();

//function are first class
function logGreet(fn) {
    fn();
}

logGreet(greet);

//function expression
var greetMe = function() {
    console.log('asasa');
}
greetMe();

//function expression on the fly
logGreeting(function(){
    console.log('hello assas')
});