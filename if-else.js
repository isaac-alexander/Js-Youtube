// Conditional Statements: Conditional statements are used to perform different actions based on different conditions.

// Control Flow: Control flow in programming refers to the order in which statements are executed. In JavaScript Control flow structures such as the If-Else statement dictate how and under what conditions certain blocks code are executed.

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else if to specify a new condition to test, if the first condition is false
// Use else to specify a block of code to be executed, if the same condition is false


let priceOfChocolate = 1.99;
let hasAmountInCash = 0.99;

const canBuyChocolate = hasAmountInCash >= priceOfChocolate;

if (canBuyChocolate) {
    console.log('Enjoy your purchase');

} else {
    console.log('Sorry you do not have enough');
}


let hour = 15;

if (hour >= 6 && hour <= 12) {
    console.log('Serving breakfast');
} else if (hour > 12 && hour <= 14) {
    console.log('Serving lunch');
} else {
    console.log('Serving dinner');
}