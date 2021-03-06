var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

// create a schema
var loanSchema = new Schema({
	date: {type: Date, default: Date, required: true},
	type: ['empréstimo', 'devolução'],
	id_user: { type: String, required: true },
	id_bike: {type: String, required: true},
	id_station: {type: Schema.Types.ObjectId, required: true},
	n_slot: {type: Number, required: true }
}, { collection: 'loans' });

var Loan = mongoose.model('Loan', loanSchema);


module.exports = Loan;
