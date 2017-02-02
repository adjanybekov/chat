var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var Message = require('./models/message');

var app = express();

var database = config.database;
var databaseURI = "mongodb://" + database.user + ":" + database.password + "@" + database.server + "/" + database.database;
console.log(databaseURI);
mongoose.connect(databaseURI);

var Schema = mongoose.Schema;

var messageSchema = new Schema({
  _id: String,
  user: String, 
  content: String,
  date: { type: Date, default: Date.now }
});


app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile('public/index.html');
});

app.get('/api/messages', function(req, res){
	res.json([
		{
			_id : '123456789',
			user : 'Erkan',
			content : 'Hi!',
			date : 123456789
		}
	]);
});

app.listen(3000, function(){
	console.log('Chat App is running at http://localhost:3000');
});


process.on('SIGINT', function(){
	mongoose.connection.close();
	console.log('MongoDB connection closed');
	process.exit();
});
