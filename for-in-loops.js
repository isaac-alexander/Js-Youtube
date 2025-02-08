const course = {
    name: 'JavaScript for Beginners',
    duration: 3,
    section: 7
};

// console.log(course.name);
// console.log(course['duration']);
// console.log(course.section);

for (const key in course) {
    console.log(course[key]);
       
}

//JavaScript for Beginners
//3
//7

// What is the for-in loop and when would you use it? The for-in loop is used to iterate through the keys of a JavaScript object. You would use it when you want to efficiently iterate through the object and access its value.