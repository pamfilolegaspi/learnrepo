var person = {
    firstname : '',
    lastName : '',
    greet : function () {
        return this.firstname + ' ' + this.lastName
    }
}

var john = Object.create(person);
john.firstname = 'john';
john.lastName = 'doe';

console.log(john.greet());