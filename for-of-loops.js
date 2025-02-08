let numbers = [1, 2, 3, 4, 5];
// for (let idx = 0; idx < numbers.length; idx++) {
//     console.log( numbers[idx]);
        
// }

for (let element of numbers) {
    console.log(element);
    
}

// 1
// 2
// 3
// 4
// 5

//What is the for-of-loop? The for-of-loop is a special syntax in JavaScript that allows us to easily iterate over an array for each iteration we get access to the element. You would use the for-of-loop over the traditional for loop in the case where we don't need to use index that you currently iterating on.