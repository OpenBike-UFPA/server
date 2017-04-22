var Loan = require('../db/loan'); //Schema Loan

//Fucntion add new loans or devolutions
exports.addLoan = function(req, res, next) {
	
	var newLoan = new Loan({
  		//date: Date(),
  		type: req.body.type,
  		id_user: req.body.id_user,
  		id_station: req.body.id_station
  	});

	//Adding new Loan to DB
	newLoan.save(function(err) {
  	if (err) throw err;

  	console.log('loan saved successfully!');
	});

	return res.json(newLoan);
}

//Function to read all loans
exports.readAllLoan = function(req, res, next) {
  Loan.find({}, function(err, loans) {
      if (err) throw err;

      console.log(loans);
      return res.json(loans);
  });
}

//Function to read quantity of loans determined and skipping some values (using limit and skip)
exports.readLimitSkipLoan = function(req, res, next) {
  Loan.find({}, function(err, loans) {
      if (err) throw err;

      console.log(loans);
      return res.json(loans);
  }).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip));
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
	});

}

//Read loans of a station and user by IDs
exports.readStationUserLoan = function(req, res, next) {
	Loan.find({"id_station":req.params.id_station, "id_user":req.params.id_user}, function(err, loans) {
  		if (err) throw err;

  		console.log(loans);
  		return res.json(loans);
	});

}