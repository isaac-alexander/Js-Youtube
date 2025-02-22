
function getDog(name, breed, age, weightInPounds) {
    return {
        name,
        breed,
        age,
        weightInPounds,
        eat() {
            console.log(this.name + ': Chomp!');

        },
        bark() {
            console.log(this.name + ': Woof!');

        }
    }
}
function Dog(name, breed, age, weightInPounds) {
    /// this = {}

    // Add properties to this
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    this.eat = function () {
        console.log(this.name + ': Chomp!');

    }

    this.bark = function () {
        console.log(this.name + ': Woof!');

    }

    //return this;

}

const anotherDog = new Dog('Marley', 'Lab', 3, 60);
console.log(anotherDog);

//What are constructor functions? Constructor functions are usd to instantiate objects in JavaScript. We would name the function using Pascal notation and use a noun for the name then for setting the key value pairs we would use the "this" keyword and within it we can set the properties and the methods of an objects.