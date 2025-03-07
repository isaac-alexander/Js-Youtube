// What are function declaration? Function declarations are the traditional syntax to create function in JavaScript. You'd use then function keyword and then name the function, specifying a parameter list and then the implementation within curly braces

function sayHi() {
    console.log('Hi');
    
}
sayHi(); //Hi

// What are function expressions? Function expression are an alternative syntax in JavaScript where you would implement a function, whether it be an anonymous function or a name function then assign it to a variabe. We can do this in JavaScript since functions are objects.

let sayHi2 = function() {
    console.log('Hi');
    
};
sayHi2(); //Hi

let greeting = function sayHi() {
    console.log('Hi');
    
};
greeting(); //Hi

