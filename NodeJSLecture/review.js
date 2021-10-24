//Objects properties and methods
var obj = {
    greet: 'hello'
}

console.log(obj.greet);

//variable set into string and use the variable in brackets
//to get the particular property on an object
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);


//Functions and Arrays
var arr = [];

arr.push(function() {
    console.log('Hello world 1');
});

arr.push(function() {
    console.log('Hello world 2');
});

arr.push(function() {
    console.log('Hello world 2');
});

arr.forEach(function(item){
    item();
});

