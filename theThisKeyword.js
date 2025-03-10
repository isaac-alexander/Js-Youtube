//
//How would you explicitly set the value of the 'this' keyword for a function or method? In JavaScript to explicitly set the value of the this keyword for a function you can use the bind method, the bind method creates a new a new function that when called has its this keyword set to provided value. This allows you to call a function with this set to a specific object even if the function is defined in a different context.

const course = {
    name: 'JavaScript for Beginners',
    start() {
        console.log(this.name);
        
    }
}

course.start();

function statrVideo() {
    console.log(this);
    
}

statrVideo();

const course2 = {
    name: 'ES6 syntax',
    start: () => {
        console.log(this.name); //undefined
        
    }
}

course2.start();

function introduction(language) {
    console.log(this.name + 'teaches' + language);
    
}

const instructor = {nname: 'Steven'};
const introduction = introduction.bind(instructor);
introduction('JavaScript');

//How would you explicitly set the value of the 'this' keyword for a function or method? In JavaScript to explicitly set the value of the this keyword for a function you can use the bind method, the bind method creates a new a new function that when called has its this keyword set to provided value. This allows you to call a function with this set to a specific object even if the function is defined in a different context.