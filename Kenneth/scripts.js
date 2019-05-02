$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

});

$(document).ready(function(){
  $("button").click(function(){
    var value = $("input").val();
    console.log(value);
    var geocodingParams = {
        searchText: value
    };
    console.log(geocodingParams);
    geocoder.geocode(geocodingParams, onResult, function(e) {
      alert(e);
    });
		$(".box").show();
  });
});

var platform = new H.service.Platform({
  app_id: 'f6fqbFAthaWAiThOBNcp',
  app_code: 'ZXjInqsK_bzSR3j4zAmSKQ',
  // useHTTPS: true
});



var onResult = function(result) {
  var locations = result.Response.View[0].Result,
    position;

  for (i = 0;  i < locations.length; i++) {
    position = {
      lat: locations[i].Location.DisplayPosition.Latitude,
      lng: locations[i].Location.DisplayPosition.Longitude
      /*
      lat: 38.98073,
      lng: -76.93727
      */
    };
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("response").innerHTML =
      //this.responseText;
			var jsonResponse = JSON.parse(this.responseText);
			console.log(jsonResponse);
			console.log(jsonResponse.daily.data[0].apparentTemperatureHigh);
			document.getElementsByClassName("HighTemp")[0].innerHTML =
			"HIGH: " + jsonResponse.daily.data[0].apparentTemperatureHigh + "F";
			document.getElementsByClassName("LowTemp")[0].innerHTML =
			"LOW: " + jsonResponse.daily.data[0].apparentTemperatureLow + "F";
			document.getElementsByClassName("PrecipCh")[0].innerHTML =
			"PRECIPITATION: " + (jsonResponse.daily.data[0].precipProbability * 100) + "%";
			document.getElementsByClassName("WindSpd")[0].innerHTML =
			"WIND: " + jsonResponse.daily.data[0].windSpeed + "mph";

    }
  };
  xhttp.open("GET", "proxy.php?lat=" + position.lat + "&lng=" + position.lng, true);
  xhttp.send();

  console.log(position);
};

// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();
