const dog = {
    name: 'Max',
    breed: 'Dachshund',
    age: 5,
    weightInPounds: 12,
    eat: function() {
        console.log('Chomp');

    },
    bark() {
        console.log('Woof');
        
    }
}


function getDog(name, breed, age, weightInPounds) {
    return {
        name,
        breed,
        age,
        weightInPounds,
        eat() {
            console.log('Chomp');
            
        },
        bark() {
            console.log('Woof');
            
        }
    }
}

const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60);
console.log(anotherDog);


// Encapsultion involves grouping together data and the methods that manipulate the data into a single unit while hiding or abstracting away the internal details from outside interference or misuse

// What is the purpose of JavaScript objects? JavaScript objects stores key value pairs, their purpose is to store State and behviour. State is represented by properties and behaviour is represented by functions with the object. When we specify a function within an object we call it a method 

// What are factory functions? Factory function provides an efficient way for us to create a new object. The name of the function will use camel case notation and it can accept parameter variables. These parameter variables can help customize the values of the object being returned. The benefit is that it reduces code duplication and the need to copy and paste.