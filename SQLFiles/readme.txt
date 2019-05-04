Create a basic database, not too many rows in each table, just enough to use as examples
Precipitation based on rate of precipitation, inches per hour
Wind speed based on Beaufort scale, in mph
Temperature is using celsius

each table has an ID key identifier, then for precipitation and wind, type describes it 
precipRec and windRec are strings you can pull from the database to use in the output recommendation
precipRange and windRange are for your reference of the amount of rainfall/windspeed that each description falls under, and are VARCHAR.
Check for range in the javascript and pull from the database using the corresponding ID. like if windspeed is calm, or less than 1mph, use windID 1 for calm winds

I wrote a short thing for each rec
I think the best way to do this is just to put the rec columns into strings and add them together into one long string to display in a message box
after getting it from the db based on range 