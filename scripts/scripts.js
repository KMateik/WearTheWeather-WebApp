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
    console.log("User Input: ", value);
    var geocodingParams = {
        searchText: value
    };
    console.log("Geocode Send: ", geocodingParams);
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

function search(ele) {
	if (event.key === 'Enter') {
		$("button").click();
	}
}

var onResult = function(result) {
  var locations = result.Response.View[0].Result,
    position;

  for (i = 0;  i < locations.length; i++) {
    position = {
      lat: locations[i].Location.DisplayPosition.Latitude,
      lng: locations[i].Location.DisplayPosition.Longitude
    };
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("response").innerHTML =
      //this.responseText;
			var jsonResponse = JSON.parse(this.responseText);
			console.log("DarkSkyResponse: ", jsonResponse);
			//console.log(jsonResponse.daily.data[0].apparentTemperatureHigh);
			document.getElementsByClassName("HighTemp")[0].innerHTML =
			"HIGH: " + Math.round(jsonResponse.daily.data[0].apparentTemperatureHigh) + "F";
			document.getElementsByClassName("LowTemp")[0].innerHTML =
			"LOW: " + Math.round(jsonResponse.daily.data[0].apparentTemperatureLow) + "F";
			document.getElementsByClassName("PrecipCh")[0].innerHTML =
			"PRECIPITATION: " + (Math.round(jsonResponse.daily.data[0].precipProbability * 100)) + "%";
			document.getElementsByClassName("WindSpd")[0].innerHTML =
			"WIND: " + jsonResponse.daily.data[0].windSpeed + "mph";
			let data = {temp: jsonResponse.daily.data[0].apparentTemperatureHigh};
			console.log("dataSent: ", data);
			let rain = jsonResponse.daily.data[0].precipProbability;
			console.log("rain", rain);
			getRecommendation(data);
			getUmbrella(rain);
			document.getElementById('location-input').value='';
    }
  };
  xhttp.open("GET", "proxy.php?lat=" + position.lat + "&lng=" + position.lng, true);
  xhttp.send();

	var reverseGeocodingParameters = {
		prox: position.lat + "," + position.lng + ",150",
		mode: 'retrieveAddresses',
		maxresults: 1
	};
	geocoder.reverseGeocode(reverseGeocodingParameters, onSuccess, function(e){
		alert(e);
	});
  console.log("Geocode Response: ", position);
};

function onSuccess(result) {
	var location = result.Response.View[0].Result[0];
	console.log("reverseGeo: ", location.Location.Address.Label);
	$(".Location").html(location.Location.Address.Label);
};

function getUmbrella(rain) {
	console.log("rainfunc: ", rain);
	if (rain >= 0.40) {
		let yep = "Bring an Umbrella!";
		$(".umbrella").show();
		$("p.umbrella").html(yep);
	} else {
		$(".umbrella").hide();
	}

}

function getRecommendation(data) {
	console.log("temp Posted: ", data);
	$.post("engine.php", data, function(result){
		console.log("database success!", result);
		$("p.RecText").html(result);
	});
}

// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();
