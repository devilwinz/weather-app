var express = require('express');
var router = express.Router();

var WeatherController = require('../app/Controllers/WeatherController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('weather-app');
});

router.post('/search', WeatherController.searhLocation);

module.exports = router;
