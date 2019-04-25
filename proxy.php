<?php
$api_key = "48030fcc9da4d24cc0ddb633dfae0e09";
$API_ENDPOINT = "https://api.darksky.net/forecast/";

$lat = $_REQUEST["lat"];
$lng = $_REQUEST["lng"];

$url = $API_ENDPOINT . $api_key . '/' . $lat . ',' . $lng;

$response = file_get_contents($url);
#if(!isset($_GET['url'])) die();
#$url = $url . $_GET['url'];
#$url = file_get_contents($url);

echo $response;
?>
