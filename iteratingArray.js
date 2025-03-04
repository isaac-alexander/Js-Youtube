// How would you iterate through an array? You could use the for-of loop to iterate through all the elements of an array and you could also use the built-in for each method, you would pass in a function as an argument which will take an element as a parameter and optionally take in the index as a second parameter.



const numbers = [1, 2, 3, 4];

for (let number of numbers)
    console.log(number);
// 1
// 2
// 3
// 4



numbers.forEach((number) => {
    console.log(number);
    
});
// 1
// 2
// 3
// 4


numbers.forEach((number, index) => console.log(`At index, ${index}: ${number}`));
// At index, 0: 1
// At index, 1: 2
// At index, 2: 3
// At index, 3: 4

