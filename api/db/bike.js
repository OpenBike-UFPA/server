var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

// create a schema
var bikeSchema = new Schema({
  	cont: {type: Number, default: 0 },
  	id_station: {type: Schema.Types.ObjectId, default: null },
  	id_user: {type: String, default: null },
  	status: ['funcionando', 'manutenção']
}, { collection: 'bikes' });

var Bikes = mongoose.model('Bikes', bikeSchema);


module.exports = Bikes;