var express = require('express');
var router = express.Router();
var bikeController = require('../controllers/bikeController');
var stationController = require('../controllers/stationController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//Bikes HTTP Requests
router.get('/', bikeController.addBike);

//Station HTTP Requests
router.get('/station/', stationController.addStation);
module.exports = router;
