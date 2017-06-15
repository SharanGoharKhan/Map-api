var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AgentSchema = new Schema({
	name: String,
	currentLocation: {
		type: [Number],  //Lng, Lat
		index: '2dsphere',
		default: [0, 0]
	}
});

module.exports = mongoose.model('Agent', AgentSchema);