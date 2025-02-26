// What is an arrow function? The arrow function is an alternative syntax to the function declaration syntax. You would assign it to a variable and define it with parentheses and then use the symbol for equal sign and greater than sign and then specify the code block if the code block only consists of one line then you can put everything on one line then you can remove the return keyword.


function add1(num1, num2) {
    return num1 + num2;
}

const add = (num1, num2) => num1 + num2; //an arrow function



const employees = [
    {
        id: 1,
        name: 'Jim'
    },
    {
        id: 2,
        name: 'Michael Scott'
    },
    {
        id: 3,
        name: 'Pam'
    },
];

const employee1 = employees.find(function (e) {
    return e.name === 'Jim'
});

console.log(employee1); //{ id: 1, name: 'Jim' }


const employee = employees.find((e) => e.name === 'Jim'); //an arrow function

console.log(employee); //{ id: 1, name: 'Jim' }


// How would you deine a function for the .find method? The .find method is a method that exists for the array class and is used in order to find an object. For the argument you would specify function in this case it would be a predicate function meaning it would result in true or false. You could use either an anonymous function or an arrow function in order to implement this.