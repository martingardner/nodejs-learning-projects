const request = require('request'); //npm install request
const ENV = require('../.env');
const key = ENV.MAPQUESTKEYID;

request({
	url : `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=1301%20lombard%20street%20philadelphia`,
	json : true
}, (error, response, body) => {
	//console.log(JSON.stringify(body, undefined, 2));
	console.log(`Address: ${body.results[0].providedLocation.location}`);
	console.log(`Latitude: ${body.results[0].locations[0].displayLatLng.lat} -- Longitude: ${body.results[0].locations[0].displayLatLng.lng}`);
});