// Functions: Functions are the building blocks of our applications, it allows us to group together statements to perform a task or calculate a value.
// Function in JavaScript is a name piece of code, we use the function keyword and then we can name the function whatever we want after we use parentheses and then curly braces.
// within thoe curly braces we Define statements and we can invoke or call that function in order to execute those statements



function sayHi(name) {
    console.log('Hi! ' + name);
}

sayHi('Alex');


// What is a parameter variable? When defining our function, we specify a parameter list within the parentheses when calling our function we can pass in values and that will allow us to customize the execution of our function

function multiply(num1, num2) {
    return num1 * num2;
}

console.log( multiply(2, 2) );

function multiply(num1, num2) {
    const product = num1 * num2;
}

console.log( multiply(2, 2) );

// javascript will return the value of undefined becaused there is no explicit return keyword

// What are the two reasons to create a function?You would create a function either for it to perform an action or to calculate a value and return that value..