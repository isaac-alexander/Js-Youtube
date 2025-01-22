// Logical Operators:Logical Operators in JavaScript are special symbols or keywords used within Expressions to perform logical operations. They primarily involve Boolean values however they can be applied to values of any type not just Boolean.
// The results of these operations is to determine the logical relationship between the operant, typically resulting in a Boolean value that indicates the truthiness or falsiness of the combined expression

// What are the 4 main logical operators inn JavaScript?

// AND (&&): Compares two values or two operands when both operands results to true then it will turn truthy
// OR (||): Compares two operands or two values and as long as one of them results to true then the expression will return true.
// NOT (!): Sometimes called the Bang Operator. This value returns the inverse of the operand that is used with. For example if the exclamation point is used in front of a variable and that variable is assigned to the value true the exclamation will have it return the inverse and it will return false.
// null coalescing (??): Allows you to supply a default value in case the operand used in front of the question mark is false.


//1. OR (||): Compares two operands or two values and as long as one of them results to true then the expression will return true.
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false

let hasReservations = true;
let acceptingWalkIns = false;

const hasAccessToTable = hasReservations || acceptingWalkIns;

console.log(hasAccessToTable); //true

//2. AND (&&): Compares two values or two operands when both operands results to true then it will turn truthy. And return true if all the operand are truthy and false otherwise.
console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false

let age = 16;
let hasCar = true;

const canDrive = age >= 16 && hasCar;
console.log(canDrive); //true

//3. NOT (!): Sometimes called the Bang Operator. This value returns the inverse of the operand that is used with. For example if the exclamation point is used in front of a variable and that variable is assigned to the value true the exclamation will have it return the inverse and it will return false.
console.log(!true); //false

let isClosedOnSunday = true;
const isRestaurantOpen = !isClosedOnSunday;

console.log(isRestaurantOpen); //false

//4. null coalescing (??): Allows you to supply a default value in case the operand used in front of the question mark is false.

let a = null;
const result = a ?? false;

console.log(result); //false


// How do Logical Operators function when applied to non-Boolean values? Value logical operators are evaluated from left to right, if you're using the or operator once JavaScript evaluates an operand to be truthy then it will return that value, if you are using the and operator then all the operands needs to evaluate the truthy in the case when it's true then it will return the last value in the expression
let usersChosenColor = 'blue';
let defaultColor = 'green';

const currentWebsiteColor = usersChosenColor || defaultColor;

console.log(currentWebsiteColor); //blue

// Operator Precedence: Previously in JavaScript everything has been evaluated from left to right for each statement, but, here when using operators it will use the same order of precedent used in math (PEMDAS or BODMAS).
// We would use parentheses() to makes it more readable for other programmers who are viewing our code but JavaScript does this under the hood

let n = 5 + (5 * 4);
console.log(n);  //25