// What is the difference between the let keyword and the var keyword? Both the let keyword and the var keyword can be used to declare a variable. The let keyword is the modern way to declare a variable and it was introduced in es6, the difference is that the let keyword is block scoped and the var keyword is function scope. With the let keyword the variable will be accessible within the block it is defined in with the var keyword the variable will be accessible within the function it is defined in.

/////////////////////////////////////////////////////////////////////////
//with the var keyword the variable will be accessible within the function it is defined in.

function display() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
        
    }
    console.log(i)
    
}

display()
//////////////////////////////////////////////////////////////////////////


//With the let keyword the variable will be accessible within the block it is defined in

function display() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        
    }
    console.log(i); //ReferenceError: i is not defined
    
}

display()

