module.exports.save = function(fala){

	fala.save(function(err,data){
		if(err)
			console.log('Error : ' + err);
		else{
			console.log('Dados salvos');
			console.dir(data);
		}
	});
}
module.exports.find = function(Talk,frase){

	 Talk.find(function (err, dados) {
	  if (err) return console.error(err);
	  console.log('Find your data');
	  console.log(dados[0]["retorno"]);
	});

}
