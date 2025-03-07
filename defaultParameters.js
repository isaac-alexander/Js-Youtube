//What are default parameters? Default parameters allow functions too have predefined values that are used if no argument is passed to the function

function writeCode(language = 'JavaScript') {
    console.log(`Write code in ${language}`);
    
}

writeCode('JavaScript'); //Write code in JavaScript
writeCode('C#'); // Write code in C#
writeCode(); // Write code in JavaScript //default value from language = 'JavaScript'

function codeDetails(language = 'JavaScript', tool = 'VS Code') {
    console.log(`Writing code in ${language} using ${tool}`);
    
}
codeDetails(); //Writing code in JavaScript using VS Code. no arguement passed uses the default value
codeDetails('Python'); //Writing code in Python using VS Code. One arguement replaces the first value
codeDetails('C#', 'Visual Studio'); //Writing code in C# using Visual Studio . Two arguments, replaces both values


function createUser(name, role= 'guest', status = 'active') {
    console.log(`User: ${name}, Role: ${role}, Status: ${status}`);
    
}
createUser('Steven'); //User: Steven, Role: guest, Status: active
createUser('Alice', 'admin', 'active'); // User: Alice, Role: admin, Status: active