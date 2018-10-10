// let obj = {
// 	name: 'Andrew'
// };

// let stringObj = JSON.stringify(obj);
// console.log( typeof stringObj);

// let personString = '{"name" : "Andrew", "age" : 25}';

const fs = require('fs');

let originalNote = {
	title: 'Some title',
	body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);