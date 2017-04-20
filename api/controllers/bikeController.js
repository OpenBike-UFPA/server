exports.addBike = function(req, res, next) {
// if our user.js file is at app/models/user.js
var Bike = require('../db/bike');
  
// create a new user called chris
var chris = new Bike({
  id_station: '4edd40c86762e0fb12000003',
  id_user: '4edd40c86762e0fb12000003',
  status: 'funcionando'
  });


// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('Bike saved successfully!');
});
}