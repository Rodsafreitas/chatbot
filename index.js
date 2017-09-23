var Mongoose = require('Mongoose');
var fraseSchema = require('./model/fraseSchema.js')();
var link = 'mongodb://localhost:27017/chat';

Mongoose.connect(link);

var db = Mongoose.connection;

db.once('open', function() {

 console.log('Conectado ao banco');  
 
 //Cria variavel com o schema da tabela.

 var Talk = Mongoose.model('talk',fraseSchema);
  
  //instanciando a variavel para cadastrar no banco 
  var fala = new Talk({
     frase: 'Olá',
     retorno: 'Olá, seja bem vindo!'
  });

  // Cadastrando nova fala
  fala.save(function(err, thor) {
      if (err) return console.error(err);
      console.log('Salvo: ')
      console.dir(thor);
    });

//Procura os dados e retorna a frase
  Talk.find(function (err, dados) {
  if (err) return console.error(err);
  console.log('Find your data');
  console.log(dados[0]["retorno"]);
});

Talk.find({ name: /^Olá/ });


  
});