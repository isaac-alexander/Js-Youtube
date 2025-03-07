//What is the rest operator? The rest operator allows you to represent an indefinite number of arguments as an array. This is useful when working with functions that can accept a variabe number of arguments

let course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours'
};

let newCourse = {
    ...course,
    name: 'JavaScript Pro'
};
console.log(newCourse); //{ name: 'JavaScript Pro', duration: '3 hours' }

function multiply(...args) {
    return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log( multiply(1, 2, 3, 4) ); //[ 2, 3, 4 ]

function multiply(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier);
}

console.log( multiply(2, 1, 2, 3, 4)); //[ 2, 4, 6, 8 ]
