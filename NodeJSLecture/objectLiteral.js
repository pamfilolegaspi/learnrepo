var person = {
    firstName: 'John',
    lastName: 'Doe',
    greet : function() {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    }
};

person.greet();

//invoke a property inside object person
console.log(person['firstName']);