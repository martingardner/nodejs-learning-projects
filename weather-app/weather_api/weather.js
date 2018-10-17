const request = require('request'); //npm install request
const ENV = require('../../.env');
const FORECASTIOKEY = ENV.FORECASTIO;

function weatherCall(lat, lng, callback){

	request({
		url : `https://api.darksky.net/forecast/${FORECASTIOKEY}/${lat},${lng}`,
		json : true
	}, (error, response, body) => {
		if(!error && response.statusCode === 200){
			callback(undefined, {
				currentTemperature : body.currently.temperature,
				humidity : body.currently.humidity
			});
		} else {
			callback('Unable to fetch weather from forecase io')
		}
	});

}


module.exports = {
	weatherCall : weatherCall
}