var express = require('express');
var router = express.Router();
var bikeController = require('../controllers/bikeController');
var stationController = require('../controllers/stationController');
var loanController = require('../controllers/loanController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//Bikes HTTP Requests
router.get('/bikes/', bikeController.addBike);

//Stations HTTP Requests
router.get('/station/', stationController.addStation);

//Loans HTTP Requests
router.get('/loans/', loanController.addLoan);


module.exports = router;