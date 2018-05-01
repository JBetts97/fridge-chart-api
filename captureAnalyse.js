var fs = require('fs');
var randomcolor = require("randomcolor");

function randomColours(count) {
	var randomcolors = [];
	for(i=0; i < count; i++) {
		randomcolors.push(randomcolor());
	}
	return randomcolors;
}

function dayChartData(filename, dateMatch, labelField) {
	var lines = fs.readFileSync(filename).toString().split('\n');
    var labels = [];
	var frequency = [];
	if (labelField == 0) {
		labels = ["0", "1","2","3","4","5","6","7","8","9","10","11","12", "13","14","15","16","17","18","19","20","21","22","23"],
		frequency = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	}
	for(var i = 0; i < lines.length; i++) {
		var fields = lines[i].split(',');
		var startTime = fields[0];
		var dateParts = startTime.split(' ');
		if (dateParts[0] === dateMatch) {
			var hour = parseInt(dateParts[1].slice(0,2));
			if (labelField == 0) {
				frequency[hour] += 1;
			} else {
				var label = fields[labelField];
				var index = labels.indexOf(label);
				if (index < 0) {
					labels.push(label);
					frequency.push(1);
				} else {
					frequency[index] += 1;
				}
			}
		}
	}
	return {
		labels: labels,
		frequency: frequency
	}
}

exports.buildDayChart = function(filename, dateMatch, labelField, keyLabel) {
	var data = dayChartData(filename, dateMatch, labelField);
    var colours = randomColours(data.frequency.length);
	var model = {
		id: dateMatch,
		type: 'bar',
		chartData: {
			labels: data.labels,
			datasets: [{
				label: keyLabel,
				data: data.frequency,
				backgroundColor: colours
			}]
		},	
		borderWidth: 1
	};
	return model;
}

exports.buildDays = function(filename) {
	var lines = fs.readFileSync(filename).toString().split('\n');
	var result = [];
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
