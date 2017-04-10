var mongoose = require('mongoose');
var long = require('mongoose-long')(mongoose);
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

// create a schema
var stationSchema = new Schema({
  name: { type: String, required: true },
  q_slots: {type: Number, required: true },
  adress: {type: String, required: true },
  cep: {type: SchemaTypes.Long, required: true },
  status: ['online', 'offline', 'em manutenção'],
  geo: {
      lat: Number, lng: Number
    },
  bikes: [Schema.Types.ObjectId]
}, { collection: 'stations' });

var Station = mongoose.model('Station', stationSchema);


module.exports = Station;