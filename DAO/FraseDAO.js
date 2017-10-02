dados = "";

module.exports.save = function(Talk){

	Talk.save(function(err,data){
		if(err)
			throw err;
		else{
			console.log('Dados salvos');
			console.dir(data);
		}
	});
}



module.exports.find = function(Talk,frase){ 

	return new Promise((resolve,reject) => {
		Talk.find(frase, function(err,data){
			if(err)
				throw err;
			else{
				if(data != ""){
				console.log(data[0]['retorno']);
				resolve(data[0]['retorno']);
			}
		}
			
		});

	});
}


