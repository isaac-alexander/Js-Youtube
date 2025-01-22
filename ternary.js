// The Ternary Operator:The Ternary Operator is a way to conditionally assign a value to a variable. You would use a conditional expression followed by a question mark if that conditional expression is evaluated truthy then you'll use the value that follows just after the question mark otherwise you'll use the value following the colon which is specified at the end.

let age = 16;
const canDrive = age >= 16 ? true : false;
console.log(canDrive);

let points = 110;
const customerType = points > 100 ? 'gold' : 'silver';
console.log(customerType);
