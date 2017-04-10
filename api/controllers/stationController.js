exports.addStation = function(req, res, next) {
// if our user.js file is at app/models/user.js
var Station = require('../db/station');
  
// create a new user called chris
var chris = new Station({
  name: 'PCT - Guamá',
  q_slots: 5,
  adress: 'teste',
  cep: 657746367,
  status: 'online',
  geo: {
      lat: 45.6, lng: 20.7
    },
  bikes: ['58eb68986150f700bd7f273b', '58eb68986150f700bd7f473b', '58eb68986150f700bd7f373b'],
});


// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('Station saved successfully!');
});
}