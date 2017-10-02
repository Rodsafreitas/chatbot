var express = require('express');
var port = process.env.PORT || 7700;
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extend : true}));
app.use(bodyParser.json());
app.listen(port);

//Para renderizar a página do bot.
app.set('views', './views/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

module.exports.express = function(){
	return app;
}