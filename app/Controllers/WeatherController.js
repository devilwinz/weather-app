const axios = require('axios');

module.exports = {
	searhLocation: (req, res, next) => {
		const city = req.body.src_box;
		const apikey = process.env.API_KEYS;
		const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+apikey;
		console.log(url);

		axios({
			method:'get',
			url: url
		}).then(function (response) {
			res.render('weather-app', {data : response.data});
		}).catch(function (error) {
			res.render('weather-app', {err : error.message});
		});
	}
}