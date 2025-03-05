// How would you sort the element of an array? You can use the built-in sort method to sort the elements of an array. You can simply invoke the sort method if the array consists of element that are string or numbers, however if thne array cosists of elements which are objects then you need to specify a callback function. This call back function will accept two parameters representing two objects to compare and you would compare those objects based on their properties

let characters = ['c', 'd', 'b', 'a'];
characters.sort(); //sorts the array in ascending order
console.log(characters); //[ 'a', 'b', 'c', 'd' ]

characters.reverse();
console.log(characters); //[ 'd', 'c', 'b', 'a' ]

let employees = [
    { id: 1, name: 'Jen' },
    { id: 2, name: 'Steven' },
    { id: 3, name: 'Andrew' },
    { id: 4, name: 'Terry' },
];
employees.sort((a, b) => {
    const lowercaseA = a.name.toLowerCase();
    const lowercaseB = b.name.toLowerCase();

    if (lowercaseA < lowercaseB) return -1;
    if (lowercaseA > lowercaseB) return 1;
    return 0;
});
console.log(employees);
// [
//     { id: 3, name: 'Andrew' },
//     { id: 1, name: 'Jen' },
//     { id: 2, name: 'Steven' },
//     { id: 4, name: 'Terry' }
//   ]

