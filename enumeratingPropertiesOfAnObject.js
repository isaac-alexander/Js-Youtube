let numbers = [1, 2, 3, 4, 5];
for (const elements of numbers) {
    console.log(elements);
    
}

const dog = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};
for (const key in dog) {
    console.log(dog[key]);
    
}

const keys = Object.keys(dog);
console.log(keys); //[ 'name', 'age', 'eyeColor' ] prints out the keys as an array

const values = Object.values(dog);
console.log(values); //[ 'Max', 5, 'blue' ] prints out the values as an array

const entries = Object.entries(dog);
console.log(entries); //[ [ 'name', 'Max' ], [ 'age', 5 ], [ 'eyeColor', 'blue' ] ] prints out the key-value pairs stored as an element in the array

for (const key of Object.keys(dog)) {
    console.log(key); 
}

for (const value of Object.values(dog)) {
    console.log(value);   
    
}

for (const entry of Object.entries(dog)) {
    console.log(entry);
    
}


//How can you enumerate over the properties of an object? You can use the for-in loop to iterate over the keys of an object and we can also use the built-in object class for example enumerating over the keys with Object.keys, enumerating over the values with Object.values and enumerating over the properties with Object.entries