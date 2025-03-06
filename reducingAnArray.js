// What is the reduce method and how does it work? The reduce method is a built-in method for the array data structure that reduces all the elements of an array into a single value, this value could be a number, a string, an object or another array. It accepts two possibke parameters, so fir the first parameter you would specify a callback function, this callback function will accept two parameters(the accumulator and the current value) now the reduce also accepts an optional second parameteryou can supply the initial starting value for the accumulator.


const numbers = [1, 10, 5, 14];
let sum = 0;

for (const num of numbers)
    sum += num;

console.log(`Total sum ${sum}`); //Total sum 30

const sum2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(`Total sum ${sum2}`); //Total sum 30

const sum3 = numbers.reduce((accumulator, currentValue) => accumulator +currentValue);

console.log(`Total sum ${sum3}`); //Total sum 30
