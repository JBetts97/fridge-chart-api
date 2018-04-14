#Fridge Chart API

##Description
Simple API using node and express to return Fridge data for charting.
Fridge data comes from a capture.txt file as described below.
It will be in a format ready for charting with chart-js.

##API
`/fridge/days' to return all unique days we have data for.
`/fridge/chart?date=YYYY-MM-DD` to return frequency data to chart.

##Capture.txt
The capture.txt file will be generated from a raspberry pi.
It contains lines of text in the following format:-
```
Date/time opened, Date/time closed, duration open
YYYY-MM-DD HH:MM:SS, YYYY-MM-DD HH:MM:SS, HH:MM:SS
```

See my other github projects for more info.
