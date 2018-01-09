var Bike = require('../db/bike'); //Schema Bike

//Function add a new bike
exports.addBike = function(req, res, next) {

	var newBike = new Bike({
		_id: req.body._id,
		id_station: req.body.id_station,
  		id_user: null,
  		status: req.body.status,
		slot: req.body.slot
  	});

	// adding new bike to DB
	newBike.save(function(err) {
  	if (err) throw err;

  	console.log('Bike saved successfully!');
	console.log(newBike);
	});

	//Adding bike on station slot
	var Station = require('../db/station');
	Station.findByIdAndUpdate(req.body.id_station, {$push:{bikes:{_id:req.body.slot, bike: req.body._id}}},
	 function(err, station) {
		if (err) throw err;

		console.log("bike updated in station");
		});


	// Station.findById(req.body.id_station, function(err, station) {
	// 	if (err) throw err;
	// 	console.log(station.bikes);
	// 	station.bikes[parseInt(req.body.slot) - 1] = req.body.id_station;
	// 	console.log("Isso AQUI" + station);
	// 	// save update in user
	// 	station.save(function(err) {
	//   		if (err) throw err;
	//   			console.log("bike updated in station");
	// 			console.log(station);
	// 	});
	// });

	return res.json(newBike);

}

//Function change status bike
exports.changeStatusBike = function(req, res, next) {

	Bike.findById(req.body.id, function(err, bike) {
  		if (err) throw err;

  		bike.status = req.body.status;

  		// save changes in bike
  		bike.save(function(err) {
    	if (err) throw err;

    	console.log('Bike status successfully updated');
  		});
	});

	return res.json('Status bike changed to ' + req.body.status);
}

//Function to read bike by ID
exports.readBike = function(req, res, next) {
	Bike.findById(req.params.id, function(err, bike) {
  		if (err) throw err;

  		console.log(bike);
  		return res.json(bike);
	});
}

//Function to read all bikes
exports.readAllBike = function(req, res, next) {
	Bike.find({}, function(err, bikes) {
  		if (err) throw err;

  		console.log(bikes);
  		return res.json(bikes);
	});
}

//Function to read quantity of bikes determined and skipping some values (using limit and skip)
exports.readLimitSkipBike = function(req, res, next) {
	Bike.find({}, function(err, bikes) {
  		if (err) throw err;

  		console.log(bikes);
  		return res.json(bikes);
	}).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip));
}

//Function to delete bike by ID
exports.deleteBike = function(req, res, next) {
  Bike.findByIdAndRemove(req.params.id, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('Bike deleted');
  return res.json("Bike deleted");
});
}
