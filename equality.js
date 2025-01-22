// Equality Operators:Equality operators are used to compare two values or expressions to determine if they are equal
// == The equality operator returns true if the operands are equal, and false if they are not.
// != The inequality operator returns true if the operands are not equal, and false if they are.

let a = 2;
let b = '2';

console.log(a == b);
//truthy

console.log(a === b);

// What is Loose Equality?Loose Equality in JavaScript refers to the comparison of two values using two equal signs without enforcing type similarity. When using Loose Equality, JavaScript performs type coercion if the value being compared are of different data types attrmpting to convert them to a comparable form before making them the comparison.
// This process known as type coercion can lead to unexpected results if you are not aware of how the values are converted

// What is Strict Equality?Strict Equality refers to using three equal signs for checking for equality