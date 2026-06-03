<?php

$apiKey = "YOUR_API_KEY_HERE"; // <-- put your OpenWeather API key here
$cityId = "5046997"; // Shakopee, MN
$units = "imperial"; // Fahrenheit

date_default_timezone_set("US/Central");

if ($units == 'metric') {
    $temp = "C";
} else {
    $temp = "F";
}

$googleApiUrl = "http://api.openweathermap.org/data/2.5/weather?id=" 
. $cityId . "&lang=en&units=" . $units . "&APPID=" . $apiKey;

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

$tempValue = $data->main->temp;

// Background color based on temperature
if ($tempValue >= 80) {
    $bgColor = "#ff9966"; // hot
} 
elseif ($tempValue >= 60) {
    $bgColor = "#ffd966"; // warm
} 
elseif ($tempValue >= 40) {
    $bgColor = "#66b3ff"; // cool
} 
else {
    $bgColor = "#cce6ff"; // cold
}

?>

<!doctype html>
<html>
<head>
<title>Shakopee Weather App</title>

<style>
body {
    font-family: Arial;
    font-size: 0.95em;
    color: #929292;
    background-color: <?php echo $bgColor; ?>;
}

.report-container {
    border: #E0E0E0 1px solid;
    padding: 20px 40px 40px 40px;
    border-radius: 10px;
    width: 550px;
    margin: 50px auto;
    background: white;
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
        <div><?php echo date("F jS, Y", $currentTime); ?></div>
        <div><?php echo ucwords($data->weather[0]->description); ?></div>
    </div>

    <div class="weather-forecast">
        <img src="http://openweathermap.org/img/w/<?php echo $data->weather[0]->icon; ?>.png" 
        class="weather-icon" />

        <?php echo $data->main->temp; ?>°<?php echo $temp; ?>

        <span class="min-temperature">
            Humidity: <?php echo $data->main->humidity; ?>%
        </span>
    </div>

    <div class="time">
        <div>Wind: <?php echo $data->wind->speed; ?> mph</div>
    </div>

</div>

</body>
</html>