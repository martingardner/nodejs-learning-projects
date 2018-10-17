const request = require('request'); //npm install request
const ENV = require('../../.env');
const key = ENV.MAPQUESTKEYID;

let geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {  
		request({
			url : `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${address}`,
			json : true
		}, (error, response, body) => {
			if(error || body === undefined){
				reject('Unable to connect to the mapquest api');
			} else if(body.hasOwnProperty('info') && body.info.statuscode !== 0) {
				let errorMsg = body.info.messages[0] || ''
				reject(`Unable to find that address. ${errorMsg}`);
			} else if(body.hasOwnProperty('info') && body.info.statuscode === 0) {
				resolve({
					address: body.results[0].providedLocation.location,
					latitude: body.results[0].locations[0].displayLatLng.lat,
					longitude: body.results[0].locations[0].displayLatLng.lng
				});
			} else {
				reject('An unknown error has occurred');
			}
		});
	}); 
};

geocodeAddress('19146')
	.then( (location) => {
		console.log(JSON.stringify(location, undefined, 2) );
	})
	.catch( (errorMessage) => {
		console.log('errorMessage', errorMessage);
	});