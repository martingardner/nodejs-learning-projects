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