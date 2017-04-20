exports.addUser = function(req, res, next) {
// if our user.js file is at app/models/user.js
var User = require('../db/user');
  
// create a new user called chris
var chris = new User({
	_id: '02237974217',
  	name: 'Cleverson Veloso Nahum',
  	email: 'cleversonahum@gmail.com',
  	birthday: '03/04/1996',
  	cep: 66640000,
  	adress: 'Avenida Augusto Montenegro, km 03, 112',
  	sex: 'masculino',
  	tel: 91980866595,
  	password: 'teste',
  	bike: {type: Schema.Types.ObjectId, default: 0, required: true}
  	});


// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});
}