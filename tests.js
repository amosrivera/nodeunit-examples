var clima = require("./clima");

module.exports = {
	'La temperatura es un numero': function(test){
		clima.obtenerTemperatura(function(temperatura){
			test.ok(true, typeof temperatura === "number");
			test.done();
		})
	}
}