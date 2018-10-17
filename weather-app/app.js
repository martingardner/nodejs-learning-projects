const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather_api/weather');

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
		

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage){
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, undefined, 2));
		weather.weatherCall(results.latitude, results.longitude, (errorMessage, weatherResults) => {
			if(errorMessage){
				console.log(errorMessage);
			} else {
				Object.entries(weatherResults).forEach( (val)=> {
					console.log(`the ${val[0]} is ${val[1]}`);
				});
			}
		});
	}
});

