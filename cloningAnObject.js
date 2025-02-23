//Object.assign method

let a = { value: 10 };
let b = {};

Object.assign(b, a)

b.value = 20;

console.log(a);
console.log(b);


//Spread Operator Method ...

let a2 = { value: 10 };
let b2 = { ...a};


b2.value = 20;

console.log(a2);
console.log(b2);


// How would you make a clone of an object? You can make a clone of an object by using Object.assign. For the first argument you would pass target object then you can pass in one or more Source object. You can also used a modern syntax known as the spread operator in order to copy the properties and methods to the Target object by the use of three dots before the variable that refrences the object