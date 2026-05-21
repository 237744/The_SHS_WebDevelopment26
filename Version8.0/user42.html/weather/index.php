<?php
// 1. FIX TIMEZONE: Force Central Time right at the start of the script
date_default_timezone_set("US/Central");

$apiKey = "API KEY"; // Remember to paste your actual OpenWeatherMap API key here
$cityId = "5046997"; // 5046997 Shakopee City Id

// 2. UNIT CHANGE: Changed from "metric" to "imperial" for Fahrenheit
$units = "imperial"; 

if ($units == 'metric'){
    $temp = "C";
    $windUnit = "km/h";
}
else {
    $temp = "F";
    $windUnit = "mph"; // Imperial uses miles per hour
}

$googleApiUrl = "http://api.openweathermap.org/data/2.5/weather?id=" . $cityId . "&lang=en&units=" . $units . "&APPID=" . $apiKey;

$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $googleApiUrl);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response);
$currentTime = time();

// 3. CONDITIONAL STATEMENT: Determine background color based on current temp
// Grab the current temperature from the API object
$currentTemp = $data->main->temp; 

if ($currentTemp >= 80) {
    $bgColor = "#ffccd5"; // Pastel soft red for hot days
} elseif ($currentTemp >= 60 && $currentTemp < 80) {
    $bgColor = "#fff2cc"; // Pastel warm yellow for nice days
} elseif ($currentTemp >= 40 && $currentTemp < 60) {
    $bgColor = "#d9ead3"; // Pastel green for mild/cool days
} else {
    $bgColor = "#c9daf8"; // Pastel blue for cold days
}
?>

<!doctype html>
<html>
<head>
<title>Forecast Weather using OpenWeatherMap with PHP</title>

<style>
/* 4. DYNAMIC BACKGROUND: Injected our PHP $bgColor variable here */
body {
    font-family: Arial;
    font-size: 0.95em;
    color: #555555;
    background-color: <?php echo $bgColor; ?>;
    transition: background-color 0.5s ease; /* Makes color shifts look smooth */
}

/* Added a solid white background with transparency to the container 
   so the text stays perfectly readable over the changing background colors */
.report-container {
    background: rgba(255, 255, 255, 0.9); 
    border: #E0E0E0 1px solid;
    padding: 20px 40px 40px 40px;
    border-radius: 8px;
    width: 550px;
    margin: 50px auto;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.05);
}

.weather-icon {
    vertical-align: middle;
    margin-right: 20px;
}

.weather-forecast {
    color: #212121;
    font-size: 1.2em;
    font-weight: bold;
    margin: 20px 0px;
}

span.min-temperature {
    margin-left: 15px;
    color: #929292;
}

.time {
    line-height: 25px;
}
</style>

</head>
<body>

    <div class="report-container">
        <h2><?php echo $data->name; ?> Weather Status</h2>
        <div class="time">
            <div><?php echo date("l g:i a", $currentTime); ?></div>
            <div><?php echo date("jS F, Y", $currentTime); ?></div>
            <div><?php echo ucwords($data->weather[0]->description); ?></div>
        </div>
        <div class="weather-forecast">