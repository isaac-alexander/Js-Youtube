const numbers = [2, 4, 6, 8, 10];

const areAllEven = numbers.every(number => number % 2 === 0);
console.log(`areAllEven: ${areAllEven}`); //hasOneEvenNumber: true


const numbers2 = [1, 3, 5, 7, 8, 9];

const hasOneEvenNumber = numbers2.some(number => number % 2 === 0);
console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`); //hasOneEvenNumber: true
