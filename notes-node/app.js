const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		};

const bodyOptions = {
			describe: 'Body of note',
			demand: true,
			alias: 'b'
		};


const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: titleOptions
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
	})
	.help()
	.argv;
let command = argv._[0];


if(command === 'add'){
	let note = notes.addNote(argv.title, argv.body);
	//console.log('note', note);
	if(note !== undefined){
		console.log(`Note Added: The title is ${note.title} and the body is ${note.body}`)
	} else {
		console.log('Add failed: Title already exists');
	}
} else if ( command === 'list'){
	let list = notes.getAll();
	list.forEach( (val) => {
		console.log('List Item', `title: ${val.title} -- body: ${val.body}`);
	});
} else if ( command === 'read') {
	let readNote = notes.getNote(argv.title);
	console.log(`Read Note : ${readNote}`);
} else if ( command === 'remove'){
	let remove = notes.removeNote(argv.title);
	console.log(remove);
} else {
	console.log('Command not recognized');
}