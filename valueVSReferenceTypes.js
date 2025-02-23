// What are primitive values and what are they passed by? Primitive values refers to simple values such as string number booleans and they are passed by copy.

let a1 = 10;
let b1 = a1;

a1 = 20;

console.log(a1); //20
console.log(b1); //10

//Primitive values are copied by their value



// What are object values and what are they passed by? Object values refers to key value pairs this also includes arrays and they are passed bu refrences

let a = { value: 20 };
let b = a;

a.value = 100;

console.log(a); //{ value: 100 }
console.log(b); //{ value: 100 }

//objects are copied by their reference

