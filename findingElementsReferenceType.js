const employees = [
  {
    id: 1,
    name: 'Jim'
  },
  {
    id:2,
    name: 'Michael Scott'
  },
  {
    id: 3,
    name: 'Pam'
  },  
];

const employee = employees.find(function(e) {
    return e.name === 'Jim'
});
console.log(employee); //{ id: 1, name: 'Jim' }

// Finding Elements (Reference Types)
// What array methods would you use to find/locate an object? You can use the find method or find index method. For both you would specify a predicate function to locate an object based on a property.

// How would you deine a function for the .find method? The .find method is a method that exists for the array class and is used in order to find an object. For the argument you would specify function in this case it would be a predicate function meaning it would result in true or false. You could use either an anonymous function or an arrow function in order to implement this.