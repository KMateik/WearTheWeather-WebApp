WearTheWeather employs the use of HTML5, CSS, AJAX, PHP, and MySQL: 

+ The main page with the form for entering your location, along with choosing the daily or weekly planner is written in HTML in the Home.HTML file and linked to the WTW_styles.css located in WearTheWeather/Scripts 

+ To process the information from the form, and send to the database there is the scripts.js folder in the WearTheWeather/Scripts
folder. This file is written with  AJAX, and has the calls for sending the information to the Dark Sky API, and posting the GET requests for the information from Dark Sky. The information then is used to pull recommendations from the Recommendations database we have created. 

+ The proxy.php file is used to access the Dark Sky API, and stores the information for the API Key.

+ The reccomendations.sql file was used to create the database for the recommendations for the trip planner. The database is set up with the recID being the primary key, along with columns for the weather condition and the recommendation of clothing to bring. 

+ Within WearTheWeather/SQLFiles there is a createdb.sql file. This database stores information for different temperatures, precipitations, and wind speeds. Within each table, there are different categories, which each have unique recommendations stored under the recs column.
