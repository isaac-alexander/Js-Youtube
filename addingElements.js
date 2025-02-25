const numbers = [5, 4, 3, 2, 1];

numbers.push(7, 8, 9); //adds new element to the end of the array
console.log(numbers); //[5, 4, 3, 2, 1, 7, 8, 9]

numbers.unshift(25, 24); //adds new element to the start of the array
console.log(numbers);  //[25, 24, 5, 4, 3, 2, 1]


const numbers1 = [5, 4, 3, 2, 1];
numbers1.splice(1, 0, 25, 24); //adds element to the middle of the array (first argument 1 = index position to start from ... second argument 0 = number of elements to be deleted in this case none thats 0.... third argument = 25, 24what data you want to add and you can use more than one value )
console.log(numbers1); //[5, 25, 24, 4, 3, 2, 1]


// How would you add an element to the beginning of an array? You would use the method unshift to add to the beginning of the array.

// How would you add an element to the middle of an array? You would use the splice method.

// How would you add an element to the end of an array? You would use the push method.