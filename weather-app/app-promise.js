const yargs = require('yargs');
const axios = require('axios');
const ENV = require('../.env');
const MAPQUEST_KEY = ENV.MAPQUESTKEYID;
const FORECASTIOKEY = ENV.FORECASTIO;

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
let geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=${MAPQUEST_KEY}&location=${address}`;

axios.get(geocodeURL)
	.then( (response) => {
		//console.log('response.data', JSON.stringify(response.data, undefined, 2)  );
		let lat = response.data.results[0].locations[0].displayLatLng.lat;
		let lng = response.data.results[0].locations[0].displayLatLng.lng;
		let formattedAddress = response.data.results[0].providedLocation.location;
		let weatherURL = `https://api.darksky.net/forecast/${FORECASTIOKEY}/${lat},${lng}`;
		return axios.get(weatherURL);
	})
	.then( (response)=> {
		let temperature = response.data.currently.temperature;
		let humidity = response.data.currently.humidity;
		console.log(`the temperature is ${temperature} and the humidity is ${humidity}`);
	})
	.catch( (e) => {
		if(e.status == 404 || e.status == 400){
			console.log('data could not be found');
		} else {
			console.log('e.message', e.message);
		}
		
	});