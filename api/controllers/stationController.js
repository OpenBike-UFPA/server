var Station = require('../db/station');

//Adding new station
exports.addStation = function(req, res, next) {

  var newStation = new Station({
    name: req.body.name,
    q_slots: req.body.q_slots,
    address: req.body.address,
    cep: req.body.cep,
    status: req.body.status,
    geo: {
        lat: req.body.geo.lat, lng: req.body.geo.lng
    },
    bikes: req.body.bikes
  });

  for(i=1;i<=newStation.q_slots;i++)
    newStation.bike.push({"_id": i, "bike": null})
    
  // call the built-in save method to save to the database
  newStation.save(function(err) {
    if (err) throw err;

    console.log('Station saved successfully!');
  });

  return res.json(newStation);
}

//Delete a station by ID
exports.deleteStation = function(req, res, next) {
  Station.findByIdAndRemove(req.params.id, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('Station deleted');
  return res.json("Station deleted");
});
}

exports.readAllStations = function(req, res, next) {
	Station.find({}, function(err, stations) {
  		if (err) throw err;

  		console.log(stations);
  		return res.json(stations);
	});
}
