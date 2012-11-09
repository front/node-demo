var mongoose = require('mongoose'),
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var StrategySchema = new Schema({
	id        : ObjectId,
	title     : { type: String, required: true},
	vision    : { type: String},
	goals     : { type: String},
});

module.exports = mongoose.model('Strategy', StrategySchema);
