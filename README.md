# nodejs-learning-projects

projects that I am using to learn nodejs and use as references for future developments.

#.env
* note a .env-example is being uploaded to know what env keys you will need, but these aren't the real key codes
* create a .env file in your root and replace the key id's with your own valid ones.  They will be referred too in various files
* there likely is a better way to do it but I have the .env be a module.exports of various keys and I import them in.

#node debugging
* node inspect {filepath with extension}
	* within inspect (n = nextline, c = run until break)
	* in js files, can put (debugger) and c will run until it hits debugger
	* to get inside data, while in debugger type repl
* prettify data return as if it is too deep node may say [Object]
	* take response and JSON.stringify it like console.log(JSON.stringify(body, undefined, 2));  where 2 is the number of spaces of indentation.

#node debugging chrome devtools
* node --inspect-brk {filepath with extension}
	* chrome://inspect
	* open dedicated DevTools for Node

#node inherant variables
* __dirname is inherant in node as part of the main() wrapper function it calculates base to point that __dirname is called.


#nodemon
* nodemon {{file to start}} instead of node {{file to start}}
* nodemon doesn't inherantly watch for certain extension changes like hbs, but in the nodemon command
  nodemon {{file to start}} -e {{file extensions separated by commas}} ((Looks like there is a bug for windows that hbs won't trigger restart for this))

#hbs (handlebars)
* similar to laravel blade {{ varname }} for injection
* for partials {{> partialname}}
* hbs inherently looks for a views folder with partials looked for within that.
* can register partial for data used frequently 
	* for example: hbs.registerHelper('getCurrentYear', ()=> {
	return new Date().getFullYear();
})  and then call it in a hbs file the same as you would any other variable {{getCurrentYear}}
* can also register partials to act as formatters
	* for example: hbs.registerHelper('screamIt', (text)=> {
	return text.toUpperCase();
});  and then call it in a hbs file {{screamIt stringVariable}} -- note it's not called like a normal method, there is a space between what is being passed in and not ().

#heroku
* [cli] heroku create - creates a heroku app.
* [cli] git push heroku - pushes project to remote heroku project (note on new project this won't be attached)
* [cli] $ heroku git:remote -a appname - ties the local git project to a remote heroku project

#nodes-node (class)
* npm install
* makes use of yargs
* node app.js --help brings up all commands


#weather-app (class)
* npm install
* making use of mapquest api https://developer.mapquest.com/user/me/profile
* free account, at least for now.  When create account go to above url and get your My Application key for usage.
* uses the MAPQUESTKEYID from .env
* uses yarg
* uses forecaseio (api.darksky.net) free account up to 1000 hits a day
* uses the FORECASTIO from .env
* also has promise version of weather-app that makes use of axios library.
* for standard callback use "node app.js" for promise version use "node app-promise.js" and then give it --a="" with an address or zip.

#node-web-server (class)
* npm install
* uses express npm package
* hbs view engine (wrapper for handlebars for express to make dynamic views)
* for Heroku release, changing port to be dynamic or 3000 depending on local environment or whatever Heroku gives
* also need to give start script in package.json with "node server.js" in it.  Heroku looks at start script in order to run it.
* NOTE :: for heroku to work, the project must be in a solo environment, so node-web-server project for heroku is at https://github.com/martingardner/node-js-heroku-test