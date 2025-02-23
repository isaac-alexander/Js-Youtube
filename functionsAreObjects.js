function add(num1, num2) {
    return num1 + num2;
}

const n = add;

console.log( n(2, 2));

console.log( add.length );

function Programmer(name) {
    this.name = name;
    this.writeCode = function() {
      console.log("Code in JavaScript");
        
    }
}

console.log( Programmer.length);
console.log( Programmer.constructor);

const Programmer1 = new Function('name',`
  this.name = name;
  this.writeCode = function() {
  console.log("Code in JavaScript");
  }
    `);

    const newProgrammer1 = new Programmer1('Steven');

    newProgrammer1.writeCode()

    // Explain how functions are objects in JavaScript? Internally fuctions are represented as objects in JavaScript, meaning that they have properties and methods.