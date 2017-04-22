var Loan = require('../db/loan'); //Schema Loan
var ObjectId = require('mongoose').Types.ObjectId; //Type Object ID

//Fucntion add new loans or devolutions
exports.addLoan = function(req, res, next) {
	
	var newLoan = new Loan({
  		type: req.body.type,
  		id_user: req.body.id_user,
      id_bike: req.body.id_bike,
  		id_station: req.body.id_station,
      n_slot: req.body.n_slot
  	});

	//Adding new Loan to DB
	newLoan.save(function(err) {
  	if (err) throw err;

  	console.log('loan saved successfully!');
	});


    //updating registry in bike model////////////////
    var Bike = require('../db/bike'); //Schema Bike 
    Bike.findById(new ObjectId(req.body.id_bike), function(err, bike) {
      if (err) throw err;
      bike.id_user = req.body.type=="empréstimo" ? req.body.id_user : null;
      bike.id_station = req.body.type=="empréstimo" ? req.body.id_station : null;
      // save update in bike
      bike.save(function(err) {
        if (err) throw err;
        console.log("bike updated in bike");
      });

    });
    /////////////////////////////////////////////////

    //updating registry in user model////////////////
    var User = require('../db/user');

    User.findById(req.body.id_user, function(err, user) {
      if (err) throw err;

      user.id_bike = req.body.type=="empréstimo" ? req.body.id_bike : null;

      // save update in user
      user.save(function(err) {
        if (err) throw err;
        console.log("bike updated in user");
      });

    });
    /////////////////////////////////////////////////

    //updating registry in station model////////////////
    var Station = require('../db/station');

    Station.findById(new ObjectId(req.body.id_station), function(err, station) {
      if (err) throw err;
      station.bikes[parseInt(req.body.n_slot) - 1] = req.body.type=="empréstimo" ? req.body.id_bike : null;
      console.log(station);
      // save update in user
      station.save(function(err) {
        if (err) throw err;
        console.log("bike updated in user");
      });

    });
    /////////////////////////////////////////////////

	return res.json(newLoan);
}

//Function to read all loans
exports.readAllLoan = function(req, res, next) {
  Loan.find({}, function(err, loans) {
      if (err) throw err;

      console.log(loans);
      return res.json(loans);
  }).sort({date: -1});
}

//Function to read quantity of loans determined and skipping some values (using limit and skip)
exports.readLimitSkipLoan = function(req, res, next) {
  Loan.find({}, function(err, loans) {
      if (err) throw err;

      console.log(loans);
      return res.json(loans);
  }).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip)).sort({date: -1});
}

//Read loans of a user by ID
exports.readUserLoan = function(req, res, next) {
	Loan.find({"id_user":req.params.id_user}, function(err, loans) {
  		if (err) throw err;

  		console.log(loans);
  		return res.json(loans);
	});

}

//Read loans of a station by ID
exports.readStationLoan = function(req, res, next) {
	Loan.find({"id_station":req.params.id_station}, function(err, loans) {
  		if (err) throw err;

  		console.log(loans);
  		return res.json(loans);
	}).sort({date: -1});

}

//Read loans of a station and user by IDs
exports.readStationUserLoan = function(req, res, next) {
	Loan.find({"id_station":req.params.id_station, "id_user":req.params.id_user}, function(err, loans) {
  		if (err) throw err;

  		console.log(loans);
  		return res.json(loans);
	}).sort({date: -1});

}