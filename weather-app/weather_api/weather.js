const request = require('request'); //npm install request
const ENV = require('../../.env');
const FORECASTIOKEY = ENV.FORECASTIO;

function weatherCall(lat, lng){

	request({
		url : `https://api.darksky.net/forecast/${FORECASTIOKEY}/${lat},${lng}`,
		json : true
	}, (error, response, body) => {
		if(!error && response.statusCode === 200){
			console.log(`Current Temperature: ${body.currently.temperature}`)
		} else {
			console.log('Unable to fetch weather from forecase io');
		}
	});

}

weatherCall('37.8267', '-122.4233');

module.exports = {
	weatherCall : weatherCall
}