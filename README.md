# Fridge Chart API

## Description
Simple API using node and express to return Fridge data for charting.
Allows you to chart door data (frequency opened and for how long) as well as food data (count of food taken out of the fridge).
Fridge data comes from capture text files as described below which are generated externally.
It will be in a format ready for charting with chart-js.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)

## Installation

* `git clone https://github.com/JBetts97/fridge-chart-api.git` this repository
* `cd fridge-chart-api`
* `npm install`

## Running / Development

* `node app.js`
* Try out the API by going to [http://localhost:3001/fridge/doordays](http://localhost:3001/fridge/doordays).


## API
* `/fridge/doordays` to return all unique days we have door data for.
* `/fridge/doorcharts/{date}` to return door frequency data for the specified day to chart. 
* `/fridge/fooddays` to return all unique days we have food data for.
* `/fridge/foodcharts/{date}` to return food data for the specified day to chart. 

## Capture files
The capture text files are generated from a raspberry pi.  This repo comes with sample files.
* capture.txt - door opening data
* foodcap.txt - food choice data

capture.txt contains lines of text in the following format: -
```
Date/time opened, Date/time closed, duration open
YYYY-MM-DD HH:MM:SS.ss, YYYY-MM-DD HH:MM:SS.ss, HH:MM:SS
```

foodcap.txt contain lines of text in the following format: -
```
Date/time chosen, item chosen
YYYY-MM-DD HH:MM:SS.ss, food item
```

See my other github projects for more info.
