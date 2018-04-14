var express = require('express');
var analyse = require('./captureAnalyse');

var app = express();
app.get('/fridge/charts/:date', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	console.log('buildDayChart for ' + req.params.date);
	res.send(analyse.buildDayChart('capture.txt', req.params.date));
});
app.get('/fridge/days', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	console.log('buildDays');
	res.send(analyse.buildDays('capture.txt'));
});
app.listen(3001);
console.log('Listening on port 3001....');
