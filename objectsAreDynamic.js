const person = {
    name: 'Steven'
};

console.log(person);

person.favoriteFood = 'tacos';
console.log(person);

person['favoriteIceCream'] = 'chocolate';
console.log(person);


delete person.favoriteIceCream;

console.log(person);

person.eat = function() {
    console.log('start eating');
    
}

person.eat()


// Explain how objects are dynamic Objects in JavaScript are dynamic because you can change and mutate the properties and methods of the object after it has been initialized
