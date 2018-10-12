const request = require('request'); //npm install request
const ENV = require('../.env');
const key = ENV.MAPQUESTKEYID;

request({
	url : `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=1301%20lombard%20street%20philadelphia`,
	json : true
}, (error, response, body) => {
	console.log(JSON.stringify(body, undefined, 2));
});