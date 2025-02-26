// Removing Elements Of An Array
// How would you remove an element from the beginning of an array? You would use the shift method to remove an element from the beginning.

// How would you remove an element from the middle of an array? You would used the splice method.

// How would you remove an element from the end of an array? You would use the pop method

const numbers = [1, 2, 3, 4, 5];

const lastElement = numbers.pop();
console.log(`lastElement: ${lastElement}\n`); //lastElement: 5 the \n tells JavaScript to add another line in the console

const firstElement = numbers.shift();
console.log(`firstElement: ${firstElement}`); //firstElement: 1

const middleElement = numbers.splice(1, 1);
console.log(`middleElement: ${middleElement}`); //middleElement: 3

 