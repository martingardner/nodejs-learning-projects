const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
app.use( express.static(__dirname + '/public') ); //middleware

app.get('/', (req, res) => {
	//res.send('<h1>Hello Express!</h1>');
	/*
	res.send({
		name: 'Martin',
		likes: ['cats', 'board games']
	})
	*/
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		currentYear: new Date().getFullYear(),
		welcomeText: 'Welcome to the home page'
	})
});

app.get('/about', (req, res) => {
	//res.send('About Yak milk');
	res.render('about.hbs', {
		pageTitle: 'About Page',
		currentYear: new Date().getFullYear()
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Sorry, that page cannot be found'
	})
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});