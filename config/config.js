var express = require('express');
var port = 7700;
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extend : true}));
app.use(bodyParser.json());
app.listen(port);

module.exports.express = function(){
	return app;
}