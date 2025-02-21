// BREAK STATEMENT

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break; //exists the loop when i is 5
//     }
//     console.log(i);
    
// }

// let i = 0;
// while (i < 10) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
//     i++;
// }


// let i = 0;
// do {
//     if (i === 5) {
//         break;  
//     }
//     console.log(i);
//     i++;   
// } while (i < 10);

// const obj = { a: 1, b: 2, c: 3};
// for (let key in obj) {
//     if (key === 'b') {
//         break;
//     }
//         console.log( obj[key]);
        
// }

// const arr = [1, 2, 3, 4, 5];
// for (let element of arr) {
//     if (element === 3) {
//         break;
//     }
//     console.log(element);
    
// }

////////////////////////////////////////////////////////////////////////
// CONTINUE STATEMENT

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
    
// }


//***WHILE LOOP***

// let i = 0;
// while (i < 10) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
    
// }

//***DO-WHILE LOOP***
// let i = 0;
// do {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
    
// } while (i < 10)

// const obj = { a: 1, b: 2, c: 3, d: 4 };
// for (let key in obj) {
//     if (obj[key] % 2 === 0) {
//         continue;
//     }
//     console.log( obj[key] );
    
// }

const arr = [1, 2, 3, 4, 5];
for (let element of arr) {
    if (element % 2 === 0) {
        continue;
    }
    console.log(element);
    
}

// Break and Continue
// What is the break keyword used for? The break keyword is used when dealing with control flow in for Loops or in Switch-Case statements, so when JavaScript encounters the break statement within one of these structures, it will stop the execution for that associated for Loop or Switch-Case statement

// What is the continue keyword used for? The continue keyword can be used within for Loops or while-loops, so when JavaScript encounters this keyword it will skip the current iteration of that for loop and skip on to the next iteration