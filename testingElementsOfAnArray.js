// What is the every() method and how does it work? The every() method is a built-in method in the array data structure and it tests whether every single element in an array satisfies a specified condition

const numbers = [2, 4, 6, 8, 10];

const areAllEven = numbers.every(number => number % 2 === 0);
console.log(`areAllEven: ${areAllEven}`); //hasOneEvenNumber: true


// What is the some() method and how does it work? The sum() method is a built-in meethod in the array data structure, it returns true if at least one of the element in the array passes a particular condition and false otherwise

const numbers2 = [1, 3, 5, 7, 8, 9];

const hasOneEvenNumber = numbers2.some(number => number % 2 === 0);
console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`); //hasOneEvenNumber: true
