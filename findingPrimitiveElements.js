const numbers = [5, 4, 3, 2, 1, 3];

const indexOfThree = numbers.indexOf(3); //2
console.log(numbers[indexOfThree]); //3

const lastIndexOfThree = numbers.lastIndexOf(3);
console.log(lastIndexOfThree); //5

const indexOfTen = numbers.lastIndexOf(10);
console.log(indexOfTen); //-1
console.log(numbers[indexOfTen]); //undefined

if(indexOfTen === -1) {
    console.log('10 is not found in the array'); //
    
}

if (!numbers.includes(10)) { // ! = not or not found
    console.log('10 is not found in the array'); // 10 is not found in the array
    
}

// Finding Elements (Primitive)
// How would you check if an array contains a primitive value? There are 3 main methods you can use. You van use .indexOf, lastIndexOf or .includes