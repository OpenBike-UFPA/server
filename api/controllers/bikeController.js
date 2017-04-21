var Bike = require('../db/bike'); //Schema Bike

//Function add a new bike
exports.addBike = function(req, res, next) {

	var newBike = new Bike({
		id_station: req.body.id_station,
  		id_user: req.body.id_user,
  		status: req.body.status
  	});

	// adding new bike to DB
	newBike.save(function(err) {
  	if (err) throw err;

  	console.log('Bike saved successfully!');
	});

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