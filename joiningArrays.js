const numbers = [1, 2, 3, 4, 5];
const joinedNumbers = numbers.join(', ');
console.log(joinedNumbers); //1, 2, 3, 4, 5



const courseName = 'JavaScript for Beginners';

// const toLowerCaseCouseName = courseName.toLocaleLowerCase();
// console.log(toLowerCaseCouseName); //javascript for beginners

// const parts = toLowerCaseCouseName.split(' ');
// console.log(parts); //[ 'javascript', 'for', 'beginners' ]

const parts = courseName
    .toLowerCase()
    .split(' ');
    //method chaining


const urlSlug = parts.join('-');
console.log(urlSlug); //javascript-for-beginners

// How does the .join() method work? The join method is available for arrays in order to convert the elements into a string. It accepts an argument where you can specify what the separator will be and that separator will be placed in between the elements for the string that it returns

// How does the .split() method work? The split method exists for the string data type. You specify the separator and then it will convert the string into an array