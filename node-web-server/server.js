const express = require('express');

let app = express();

app.get('/', (req, res)=> {
	//res.send('<h1>Hello Express!</h1>');
	res.send({
		name: 'Martin',
		likes: ['cats', 'board games']
	})
});

app.get('/about', (req, res) => {
	res.send('About Yak milk');
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Sorry, that page cannot be found'
	})
});

app.listen(3000);