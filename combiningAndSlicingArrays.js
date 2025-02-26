
// How would you combine two arrays? You would use the concat method to create a new array

// How would you get a slice of an array? You would use the slice method and you can pass two arguments (The start index and the end index)


const exampleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];

const combinedArray = exampleNumbersA.concat(exampleNumbersB);
console.log(combinedArray); //[ 1, 2, 3, 4, 5, 6 ]

const firstSlice = combinedArray.slice(0, 4) //0 is the start index and 4 is the end index
console.log(firstSlice); //[ 1, 2, 3, 4 ]

