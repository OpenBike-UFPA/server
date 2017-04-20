var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

// create a schema
var bikeSchema = new Schema({
  	cont: {type: Number, default: 0 },
  	id_station: {type: Schema.Types.ObjectId, required: true, default: 0 },
  	id_user: {type: Schema.Types.ObjectId, required: true, default: 0 },
  	status: ['funcionando', 'em manutenção']
}, { collection: 'bikes' });

var Bikes = mongoose.model('Bikes', bikeSchema);


module.exports = Bikes;