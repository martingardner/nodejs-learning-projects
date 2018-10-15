const request = require('request'); //npm install request
const ENV = require('../../.env');
const key = ENV.MAPQUESTKEYID;

function geocodeAddress(argvAddress, callback){
	let address = encodeURIComponent(argvAddress);

	request({
		url : `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${address}`,
		json : true
	}, (error, response, body) => {
		//console.log('error', error);
		//console.log(JSON.stringify(body, undefined, 2));
		//console.log('response', response);
		//console.log('body', body);
		if(error || body === undefined){
			callback('Unable to connect to the mapquest api');
		} else if(body.hasOwnProperty('info') && body.info.statuscode !== 0) {
			let errorMsg = body.info.messages[0] || ''
			callback(`Unable to find that address. ${errorMsg}`);
		} else if(body.hasOwnProperty('info') && body.info.statuscode === 0) {
			callback(undefined, {
				address: body.results[0].providedLocation.location,
				latitude: body.results[0].locations[0].displayLatLng.lat,
				longitude: body.results[0].locations[0].displayLatLng.lng
			});
		} else {
			callback('An unknown error has occurred');
		}
	});
}

module.exports = {
	geocodeAddress : geocodeAddress
}