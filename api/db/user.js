var mongoose = require('mongoose');
var long = require('mongoose-long')(mongoose);
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

// create a schema
var userSchema = new Schema({
  _id: {type: String, required: true },
  name: { type: String, required: true },
  email: {type: String, required: true },
  birthday: {type: String, required: true },
  cep: {type: SchemaTypes.Long, required: true },
  adress: {type: String, required: true },
  sex: {type: String, required: true },
  tel: {type: Number, required: true },
  password: { type: String, required: true },
  bike: { type: String}
}, { collection: 'users' });

var User = mongoose.model('User', userSchema);


module.exports = User;