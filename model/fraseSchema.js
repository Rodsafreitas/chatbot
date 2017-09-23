var Mongoose = require('Mongoose');

var fraseSchema = new Mongoose.Schema({
     frase : String,
     retorno : String     
});

module.exports = function (){
	return fraseSchema;
};