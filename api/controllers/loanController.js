exports.addLoan = function(req, res, next) {
// if our user.js file is at app/models/user.js
var Loan = require('../db/loan');
  
// create a new user called chris
var chris = new Loan({
  date: Date(),
  type: 'devolução',
  id_user: '4edd40c86762e0fb12000003',
  id_station: '4edd40c86762e0fb12000003'
  	});


// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('loan saved successfully!');
});
}