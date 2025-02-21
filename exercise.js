// Implement a function to accepts two numbers and return the maximum number

function maxNum(num1, num2) {
    return num1 >= num2 ? num1 : num2;   
}

console.log( maxNum(2, 1));


//Implement a function to accept a number. Then return "FizzBuzz" if divisible by 3 and 5 Or Return "Fizz" if divisible by 3 Or Return "Buzz" if only divisible by 5 Or Return the original number if not divisible by 3 or 5

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0)
        return 'FizzBuzz';
    else if (number % 3 === 0)
        return 'Fizz';
    else if (number % 5 === 0)
        return 'Buzz';
    else 
    return number;
}

console.log( fizzBuzz(15));
console.log( fizzBuzz(9));
console.log( fizzBuzz(10));
console.log( fizzBuzz(7));


//Implement two functions
//For the first function, have it accept an array as a parameter which contains list of numbers. Then console log the even numbers in the array.

//For the second function, have ot accept an array and log the odd numbers


function displayEvenNumbers(array) {
    for (const number of array) {
        if (number % 2 === 0)
            console.log(number);
            
    }
}
displayEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


function displayOddNumbers(array) {
    for (const number of array) {
        if (number % 2 != 0)
            console.log(number);
            
    }
}
displayOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
