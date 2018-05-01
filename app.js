var express = require('express');
var analyse = require('./captureAnalyse');

var app = express();
app.get('/fridge/doorcharts/:date', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	console.log('GET /doorcharts/' + req.params.date);
	res.send(analyse.buildDayChart('capture.txt', req.params.date, 0, "Frequency per hour"));
});
app.get('/fridge/doordays', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	console.log('GET /doordays');
	res.send(analyse.buildDays('capture.txt'));
});
app.get('/fridge/foodcharts/:date', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	console.log('GET /foodcharts/' + req.params.date);
	res.send(analyse.buildDayChart('foodcap.txt', req.params.date, 1, "Count food items"));
});
app.get('/fridge/fooddays', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	console.log('GET /fooddays');
	res.send(analyse.buildDays('foodcap.txt'));
});
app.listen(3001);
console.log('Listening on port 3001....');
