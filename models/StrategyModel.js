var mongoose = require('mongoose'),
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var StrategySchema = new Schema({
	id        : ObjectId,
	title     : { type: String, required: true},
	vision    : { type: String},
	goals     : [Schema.Types.ObjectId],
});

module.exports = mongoose.model('Strategy', StrategySchema);
