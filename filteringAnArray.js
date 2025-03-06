// How would you filter the elements of an array? You would use the built-in filter() method and specify a callback function and in that callback function yoou would specify what condition you want to be true in order for that element to be included in the array to return


const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); //[ 2, 4, 6 ]

const employees = [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' },
    { id: 3, name: 'Charlie', role: 'Developer' },
    { id: 4, name: 'Danielle', role: 'Manager' },
];

const developers = employees.filter(employee => employee.role === 'Developer');
console.log(developers);
// [
//     { id: 1, name: 'Alice', role: 'Developer' },
//     { id: 3, name: 'Charlie', role: 'Developer' }
//   ]