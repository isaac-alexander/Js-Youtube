const course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours',
    get details() {
        return `${this.name} is ${this.duration}`;
    },
    set details(value) {
        let parts = value.split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

console.log(`${course.name} is ${course.duration}`); //JavaScript for Beginners is 3 hours

console.log(course.details); //JavaScript for Beginners is 3 hours

course.details = 'JavaScript Pro is 10 hours';

console.log(course.details); //JavaScript Pro is 10 hours

//What are the get and set keywords? The get and set keywords can be used within object literals or classes in order to Define Getters and Setters. This enables you to use a method as if it were a property. The benefit of using Getters and Setters is that it can improve data encapsultion andprovide a more intuitive interface for interacting with an object's properties