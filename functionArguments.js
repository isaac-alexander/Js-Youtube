function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 2));

function multiply(num1, num2) {
    let product = 1;
    for (const num of arguments)
        product *= num;
    return product;

}

console.log(multiply(2, 2, 4));

//What happens if a function is called with fewer arguments than it expects to receive? If a function is called with fewer arguments than it expects then the parameters that you didn't supply a value to will be assigned the value of undefined by default, this could lead unexpected results in your function