var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
	user : String,
	content : String,
	date : Date
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
