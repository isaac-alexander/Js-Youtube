const name = 'Steven';
console.log(typeof name);

const anotherName = new String('Joe');
console.log(typeof anotherName);

let sentence = "A new sentence.";

const doesIncludeNew = sentence.includes('new');
console.log(doesIncludeNew);

console.log(sentence[3]);

const startsWithA = sentence.startsWith('A');
console.log(startsWithA);

const endsWithA = sentence.endsWith('A');
console.log(endsWithA);

let updatedSentence = sentence.replace('new', 'short');
console.log(updatedSentence);

trimmedSentence = sentence.trim();
console.log(trimmedSentence);

const wordsInSentence = sentence.split(' ');
console.log(wordsInSentence);

let email = 'TestEmail@gmail.com';

let lowerCaseEmail = email.toLowerCase();
console.log(lowerCaseEmail);

let upperCaseEmail = email.toUpperCase();
console.log(upperCaseEmail);

