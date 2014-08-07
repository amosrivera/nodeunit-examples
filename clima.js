var Forecast = require('forecast');

// Initialize
var forecast = new Forecast({
  service: 'forecast.io',
  key: 'f3c98f11ab4021551976d818024b0869',
  units: 'celcius'
});

exports.obtenerTemperatura = function(callback){
	// Retrieve weather information, ignoring the cache
	forecast.get([12.8683, -86.2086], true, function(err, weather) {
	  callback(weather.currently.temperature);
	});
}

