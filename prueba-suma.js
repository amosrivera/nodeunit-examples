var calculadora = require("./calculadora");

module.exports = {
	'2+2 es 4': function(test){
		test.equal(4, calculadora.sumar(2,2));
		test.done();
	},
	'Lanza error si no recibe dos números': function(test){
		test.throws(function(){ calculadora.sumar(1) });
		test.done();
	},
	'Lanza error si algún parametro no es número': function(test){
		test.throws(function(){ calculadora.sumar(1,"a") });
		test.throws(function(){ calculadora.sumar("b",2) });
		test.done();
	}
}