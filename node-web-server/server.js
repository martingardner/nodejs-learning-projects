const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000; // setting this up for Heroku, 3000 if local, whatever port heroku gives if on their site

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use( (req, res, next)=>{
	let now = new Date().toString();
	let log = `${now}: ${req.method} ${req.url}`
	console.log('log', log);
	fs.appendFile('server.log', log + '\n', (err)=> {
		if(err){ console.log('Unable to append to server.log') }
	});
	next(); // needed otherwise any calls will hang in the middleware as it doesn't know to go on.
}); //register middleware

/*
app.use( (req, res, next)=> {
	//res.render('maintenance.hbs');
});
*/

app.use( express.static(__dirname + '/public') ); //register middleware

hbs.registerHelper('getCurrentYear', ()=> {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=> {
	return text.toUpperCase();
});

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
		welcomeText: 'Welcome to the home page'
	})
});

app.get('/about', (req, res) => {
	//res.send('About Yak milk');
	res.render('about.hbs', {
		pageTitle: 'About Page'
		
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Sorry, that page cannot be found'
	})
});


app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});


