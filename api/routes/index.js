var express = require('express');
var router = express.Router();
var bikeController = require('../controllers/bikeController');
var stationController = require('../controllers/stationController');
var loanController = require('../controllers/loanController');
var userController = require('../controllers/userController');


//Bikes HTTP Requests////////////////////////////////
	//POST
	router.post('/bikes/', bikeController.addBike); //Add Bike

	//PUT
	router.put('/bikes/changestatus/', bikeController.changeStatusBike); //Change status Bike

	//GET
	router.get('/bikes/:id', bikeController.readBike); //Read bike by ID
	router.get('/bikes/', bikeController.readAllBike); //Read all bikes
	router.get('/bikes/:limit/:skip', bikeController.readLimitSkipBike); //Read quantity :limit bikes skipping :skip

	//DELETE
	router.delete('/bikes/:id', bikeController.deleteBike); //Delete bike by ID
/////////////////////////////////////////////////////


//Stations HTTP Requests////////////////////////////////
	//POST
	router.post('/stations/', stationController.addStation);
	//GET
	router.get('/stations', stationController.readAllStations);
	//DELETE
	router.delete('/stations/', stationController.deleteStation); //Delete user by ID

/////////////////////////////////////////////////////


//Loans HTTP Requests////////////////////////////////
	//POST
	router.post('/loans/', loanController.loan); //Add a new loan

	//GET
	router.get('/loans/user/:id_user', loanController.readUserLoan); //Read loans of a user by ID
	router.get('/loans/station/:id_station', loanController.readStationLoan); //Read loans of a station by ID
	router.get('/loans/:id_station/:id_user', loanController.readStationUserLoan); //Read loans of a stations and user by IDs
	router.get('/loans/', loanController.readAllLoan); //Read all loans
	router.get('/loans/:limit/:skip', loanController.readLimitSkipLoan); //Read quantity :limit bikes skipping :skip

/////////////////////////////////////////////////////


//Users HTTP Requests////////////////////////////////
	//POST
	router.post('/users/', userController.addUser);

	//GET
	router.get('/users/:id', userController.readUser); //Read user by ID
	router.get('/users/', userController.readAllUser); //Read all users
	router.get('/users/:limit/:skip', userController.readLimitSkipUser); //Read quantity :limit bikes

	//DELETE
	router.delete('/users/:id', userController.deleteUser); //Delete user by ID
/////////////////////////////////////////////////////

module.exports = router;
