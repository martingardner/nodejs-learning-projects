const request = require('request'); //npm install request
const ENV = require('../.env');
const key = ENV.MAPQUESTKEYID;
const yargs = require('yargs');

const argv = yargs
	.options({
		address: {
			demand: true,
			alias: 'a',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;
		
let address = encodeURIComponent(argv.address);

request({
	url : `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${address}`,
	json : true
}, (error, response, body) => {
	//console.log('error', error);
	//console.log(JSON.stringify(body, undefined, 2));
	//console.log('response', response);
	//console.log('body', body);
	if(error || body === undefined){
		console.log('Unable to connect to the mapquest api');
	} else if(body.hasOwnProperty('info') && body.info.statuscode !== 0) {
		let errorMsg = body.info.messages[0] || ''
		console.log(`Unable to find that address. ${errorMsg}`);
	} else if(body.hasOwnProperty('info') && body.info.statuscode === 0) {
		console.log(`Address: ${body.results[0].providedLocation.location}`);
		console.log(`Latitude: ${body.results[0].locations[0].displayLatLng.lat} -- Longitude: ${body.results[0].locations[0].displayLatLng.lng}`);
	} else {
		console.log('An unknown error has occurred');
	}
});

