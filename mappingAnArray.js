// How would you transform/map over each element of an array? You can use the built-in map() method. With that method you would specify a callback function where you would operate on each element and transform it in some way, this would result in creating a new array consisting of those updated values.


const numbers = [2, 4, 6, 8, 10];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); //[ 4, 16, 36, 64, 100 ]


const characters = ['a', 'b', 'c', 'd'];
const upperCaseCharacters = characters.map(char => char.toUpperCase());
console.log(upperCaseCharacters); //[ 'A', 'B', 'C', 'D' ]


const employees = [
    {id: 1, name: 'Alice', email: 'AliCe@gmail.com'},
    {id: 2, name: 'Steven', email: 'STeVen@gmail.com'},
    {id: 3, name: 'Joe', email: 'Joe@gmail.com'},
];

const updatedEmployees = employees.map(employee => ({
    ...employee,
    email: employee.email.toLowerCase()
}));

console.log(updatedEmployees);

// [
//     { id: 1, name: 'Alice', email: 'alice@gmail.com' },
//     { id: 2, name: 'Steven', email: 'steven@gmail.com' },
//     { id: 3, name: 'Joe', email: 'joe@gmail.com' }
//   ]