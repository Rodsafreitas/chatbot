link = 'http://localhost:7700/';
function talk(){

	//To send to correct method

	var phrase = document.getElementById('phrase').value;
	updateText(phrase);

	if(phrase.substring(0,6) == "insert")
		save(phrase);
	else if(phrase.substring(0,4) == "help")
		help();
	else if(phrase.substring(0,5) == "clear")
		clear();
	else
	    pesquisa(phrase);

	document.getElementById('phrase').value = "";

	
}

function save(phrase){
	
	phrase_send = phrase.split('{')[1].replace("}","");
	phrase_receiver = phrase.split('{')[2].replace("}","");
	
	$.ajax({
	    url:  link+'save',
	    type: 'GET',
	    data: { send: phrase_send, receiver : phrase_receiver },
	    contentType: 'application/json; charset=utf-8'
	})
	.done(function(data) {
		updateText("Meu, eu aprendi direitinho!!!");
	})
	.fail(function(err){
		updateText("puts cara, eu não entendi muito bem, me explica de novo???");
	});



}

function help(){
	
	var texto_ajuda = "Para inserir uma nova palavra no meu vocabulário, utilize a";
	texto_ajuda +=  "função-> insert:{frase}{frase retorno}";
	texto_ajuda += "<br />" + "Para falar comigo basta escrever qualquer coisa e eu responderei!!"

	updateText(texto_ajuda);
}

function pesquisa(frase){

	$.ajax({
	    url: link+'talk',
	    type: 'GET',
	    data: { msg: frase},
	    contentType: 'application/json; charset=utf-8'
	})
	.done(function(data) {
		updateText(data);
	});

}

function updateText(text){
	document.getElementById("text").innerHTML += text + "<br />";
}


function clear(){
	document.getElementById("text").innerHTML = "";
	document.getElementById("phrase").value = "";
}