# Fridge Chart API

## Description
Simple API using node and express to return Fridge data for charting.
Fridge data comes from a capture.txt file as described below.
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
* Try out the API by going to [http://localhost:3001/fridge/days](http://localhost:3001/fridge/days).


## API
* `/fridge/days` to return all unique days we have data for.
* `/fridge/charts/{date}` to return frequency data for the specified day to chart. 

## Capture.txt
The capture.txt file will be generated from a raspberry pi.
It contains lines of text in the following format:-
```
Date/time opened, Date/time closed, duration open
YYYY-MM-DD HH:MM:SS, YYYY-MM-DD HH:MM:SS, HH:MM:SS
```

See my other github projects for more info.
