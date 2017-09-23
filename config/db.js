 var Mongoose = require('Mongoose');
 var link = 'mongodb://localhost:27017/chat';
 Mongoose.connect(link);
 var db = Mongoose.connection;

 module.exports = function (){
    return db;
 }
 
