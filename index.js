 //Initializing models to be used
 var fraseSchema = require('./model/fraseSchema.js')();
 var fraseDAO = require('./DAO/FraseDAO.js');
 var db = require('./config/db.js')();
 var app = require('./config.js').express();
 var Mongoose = require('Mongoose'); 
 var cons = require('consolidate');
 
 Promise = require('bluebird');
 
 Mongoose.Promise = Promise;
 
 //Variable to deal with the database
 var Talk = Mongoose.model('talk', fraseSchema);

 db.once('openUri', function() {

 console.log('Connect successfully');  
  
});

//Initializing page default
app.get('/',function(req,res){
   res.render('index.html');
});

//To talk with chatbot
app.get('/talk', function(req,res){

  var frase = {frase: req.param("msg")};

  //Search the phrase.
  fraseDAO.find(Talk, frase).then(data => {    
    res.json(JSON.stringify(data));  
  })
  .catch(e => res.json(JSON.stringify('error')));

});

//Teaching a new world
app.get('/save', function(req,res){      

  var phrase = req.param('send');
  var phrase_return = req.param('receiver');
  
  //Schema
  var speak = new Talk({
    frase: phrase,
    retorno: phrase_return
  });

  //Save the phrase.
  try{
      fraseDAO.save(speak);
      res.json(JSON.stringify(true));
  }
  catch (err){
      res.json(JSON.stringify(false));
  }
  
});



