 //Inicialização dos modulos a serem utilizados
 var fraseSchema = require('./model/fraseSchema.js')();
 var fraseDAO = require('./DAO/FraseDAO.js');
 var db = require('./config/db.js')();
 var app = require('./config/config.js').express();
 //var app = require('express');
 var Mongoose = require('Mongoose'); 

 db.once('open', function() {

 console.log('Conectado ao banco');  
 
 //Cria variavel com o schema da tabela.
  
  var Talk = Mongoose.model('talk',fraseSchema);
  
  //instanciando a variavel para cadastrar no banco 
  var fala = new Talk({
     frase: 'Olá',
     retorno: 'Olá, seja bem vindo!'
  });

  //Passando parametros para a classe DAO para salvar os dados.
  fraseDAO.save(fala);
  
  //Procura os dados na classe DAO e retorna os valores
  fraseDAO.find(Talk,{ name: /^Olá/ });  
});

 app.get('/',function(req,res){
  //res.send('ok');
 })