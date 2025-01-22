// Switch-Case Statements: Switch-Case statements provides a clean syntax in the case when you're using a variable and performing comparison equality. You can implement the same functionality using If-Else statement but Switch-Case statements provides a clean alternative for accomplishing the same thing so to describe the syntax you would use the switch keyword then the parentheses you would use a variable or a value and then within the code blocks you would specify different cases to define the case when that variable or value is equal to that case and then execute code for that particular use case.
// When using Switch-Case statements you also want to remember to supply a defualt value


let job = 'Software Developer';

// if (job === 'Software Developer') {
//     console.log('Write code');
// } else if (job === 'Designer') {
//     console.log('Makes user interface documents');
// } else if (job === 'Cloud Engineer') {
//     console.log('Manages and deploys cloud resources') ;
// } else {
//     console.log('Works directly with customers') ;
// }

switch (job) {
    case 'Software Developer':
        console.log('Writes code');
        break;
    case 'Designer':
        console.log('Makes user interface documents');
        break;
    case 'Cloud Engineer':
        console.log('Manages and deploys cloud resources');
        break;
    default:
        console.log('Works directly with customers');
}

