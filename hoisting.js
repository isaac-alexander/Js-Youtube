// What is hoisting? Hoisting refers to a JavaScript mechanism where function declarations are moved to the top of their containing scope during the compilation phase, this allows you to call or invoke the function anywhere within its enclosing scope.

add(2, 2);

function add(num1, num2) {
    console.log(num1 + num2);
    
}

add2(2, 2);


let add2 = function(num1, num2) {
    console.log(num1 + num2); //error hoisting cannot be used for function expression
    
}