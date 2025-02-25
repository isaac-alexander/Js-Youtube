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