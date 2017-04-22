var mongoose = require('mongoose');
var long = require('mongoose-long')(mongoose);
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

// create a schema
var userSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: {type: String, required: true },
  birthday: {type: String, required: true },
  cep: {type: SchemaTypes.Long, required: true },
  address: {type: String, required: true },
  sex: ['masculino', 'feminino'],
  tel: {type: SchemaTypes.Long, required: true },
  password: { type: String, required: true },
  bike: {type: Schema.Types.ObjectId, default: null },
  date: {type: Date, default: Date, required: true}
}, { collection: 'users' });

var User = mongoose.model('User', userSchema);


module.exports = User;