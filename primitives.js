// Primitive Types
// Primitive Types: Primitive types refers to simple fundamental values.
// Examples includes: String, number, BigInt, Boolean, undefined, null & symbol

// String: A string is a sequence of one or more characters that may consist of letters, numbers, or symbols written inside a quote. Strings in JavaScript are primitive data types and immutable, which means they are unchanging.

let favoriteFruit = 'strawberries';
let favoriteIceCream = "chocolate";
let favoriteProgrammingLanguage = `JavaScipt`;


// Numbers:JavaScript has only one type of number. Numbers can be written with or without decimals.

let numberOfDonuts = 12;
let pi = 3.14;


// BigInt:JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
// BigInt is a new data type intended for use when integer values are larger than the range supported by the Number data type. This data type allows us to safely perform arithmetic operations on large integers, represent high-resolution timestamps, use large integer IDs, and more without the need to use a library.

let veryLargeNumber = 5435434363466n

// Boolean:In JavaScript, a boolean value is one that can either be TRUE or FALSE. If you need to know “yes” or “no” about something, then you would want to use the boolean function.

let lovesCoding = true;

// undefined:The undefined property indicates that a variable has not been assigned a value, or not declared at all

let favoriteColor;
console.log(favoriteColor);

//null:In JavaScript, null is a special value that represents an empty or unknown value. For example, let number = null; The code above suggests that the number variable is empty at the moment and may have a value later.

favoriteFruit = null;


//symbol:In JavaScript, a Symbol is a unique and immutable primitive value that can be used to create unique identifiers for objects, properties, or methods. Unlike strings or numbers, Symbols are not coerced to a different type and cannot be converted to a string or number. Creating Symbols.

const uniqueKey = Symbol();

