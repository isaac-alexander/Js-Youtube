// Emptying an array
// How would you empty the contents of an array? To empty an array, you can simply assign it to a new array, you could also set the length property to zero or use the splice method.


const numbers = [1, 2, 3, 4, 5];

while (numbers.length > 0)
    numbers.pop();
console.log(numbers); //[]

numbers.length = 0;
console.log(numbers); //[]


const numbers1 = [1, 2, 3, 4, 5];

const deletedNumbers = numbers1.splice(0, numbers1.length);
console.log(`deletedNumbers: ${deletedNumbers}`);  //deletedNumbers: 1,2,3,4,5

let numbers2 = [1, 2, 3, 4, 5];
let anotherArray = numbers2;

numbers2 = [];
console.log(numbers2);
