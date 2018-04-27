var fs = require('fs');
var randomcolor = require("randomcolor");

function dailyFrequency(filename, dateMatch) {
	var lines = fs.readFileSync(filename).toString().split('\n');
	var frequency = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(var i=0; i<lines.length; i++) {
		var fields = lines[i].split(',');
		var startTime = fields[0];
		var dateParts = startTime.split(' ');
		if (dateParts[0] === dateMatch) {
			var hour = parseInt(dateParts[1].slice(0,2));
			frequency[hour] += 1;
		}
	}
	return frequency;
}

exports.buildDayChart = function(filename, dateMatch) {
	var frequency = dailyFrequency(filename, dateMatch);
	var randomcolors = [];
	for(i=0; i < 24; i++) {
		randomcolors.push(randomcolor());
	}
	var model = {
		id: dateMatch,
		type: 'bar',
		chartData: {
			labels: ["0", "1","2","3","4","5","6","7","8","9","10","11","12", "13","14","15","16","17","18","19","20","21","22","23"],
			datasets: [{
				label: "Frequency per hour",
				data: frequency,
				backgroundColor: randomcolors
			}]
		},	
		borderWidth: 1
	};
	return model;
}

exports.buildDays = function(filename) {
	var lines = fs.readFileSync(filename).toString().split('\n');
	var result = []
	var days = {}
	var compare = []
	for(var i=0; i<lines.length; i++) {
		var fields = lines[i].split(',');
		var startTime = fields[0];
		var dateParts = startTime.split(' ');
		var day = dateParts[0];
		if (day && compare.indexOf(day) < 0) {
			compare.push(day);
			var dayElement = {
				id: day,
				dayDate: day
			}
			result.push(dayElement);
		}
	}
	return result;
}
