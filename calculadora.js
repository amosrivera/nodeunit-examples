exports.sumar = function(a,b){
	if (arguments.length !== 2) {
		throw new Error('Deben ser dos parámetros.');
	}

	if (typeof a !== "number" || typeof b !== "number"){
		throw new Error('Tienen que ser números.');
	}
	
	return a+b;
}