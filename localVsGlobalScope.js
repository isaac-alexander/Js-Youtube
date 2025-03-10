// What is the difference between the global scope and local scope? In JavaScript the scope of the variable determines where it can be accessed within the codes. Variables declared outside any function or block are in the global scope making them accessible throughout the entire script in contrast, variables declared within a function or blocks such as Loops or conditional statements are in local scope meaning they are only accessible within that specific block.

function greet() {
    const message = 'Hello World';
    console.log(message); //Hello World
    
}

greet()
console.log(message); //ReferenceError: message is not defined
