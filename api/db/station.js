var mongoose = require('mongoose');
var long = require('mongoose-long')(mongoose);
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

// create a schema
var stationSchema = new Schema({
  name: { type: String, required: true, unique : true },
  q_slots: {type: Number, required: true },
  address: {type: String, required: true },
  cep: {type: String, required: true },
  status: ['online', 'offline', 'em manutenção'],
  geo: {
      lat: Number, lng: Number
    },
  bikes: [
            {
            _id: {type: Number, unique : true}, //Slot number
            bike: {type: String, unique : true}
            }
        ]
}, { collection: 'stations' });

var Station = mongoose.model('Station', stationSchema);


module.exports = Station;
