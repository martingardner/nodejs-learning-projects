const fs = require('fs');

let fetchNotes = () => {
	try{
		let notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}
	catch (e) { return []; }
};

let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title, body) => {
	let notes = fetchNotes();
	let note = { title : title, body : body}

	let duplicateNotes = notes.filter( (note)=> {
		return note.title === title;
	});

	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	} 

};

let getAll = () => {
	let notes = fetchNotes();
	return notes.length > 0 ? notes : 'There are no notes saved'
}

let getNote = (title) => {
	let notes = fetchNotes();
	let matchTitle = notes.filter( (note) => {
		return title === note.title;
	});
	return matchTitle.length > 0 ? `The details are.  title : ${matchTitle[0].title} body : ${matchTitle[0].body}` : 'There are no matching records';
};

let removeNote = (title) => {
	let notes = fetchNotes();
	let newNotes = notes.filter( (note) => {
		return note.title !== title;
	});
	saveNotes(newNotes);
	return notes.length === newNotes.length ? 'No title removed' : 'A title was removed'
}

module.exports = {
	addNote: addNote,
	getAll: getAll,
	getNote : getNote,
	removeNote : removeNote
}