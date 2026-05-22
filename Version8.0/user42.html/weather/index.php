<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// FIX TIMEZONE
date_default_timezone_set("US/Central");

// YOUR API KEY
$apiKey = "d2b6e8a6f9d5024ac91bcb2a60dd205e";

// SHAKOPEE CITY ID
$cityId = "5046997";

// USE FAHRENHEIT
$units = "imperial";

if ($units == 'metric'){
    $temp = "C";
    $windUnit = "km/h";
}
else {
    $temp = "F";
    $windUnit = "mph";
}

// API URL
$googleApiUrl = "https://api.openweathermap.org/data/2.5/weather?id="
. $cityId . "&lang=en&units=" . $units . "&APPID=" . $apiKey;

// CURL REQUEST
$ch = curl_init();

curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $googleApiUrl);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($ch);
curl_close($ch);

// CONVERT JSON
$data = json_decode($response);

$currentTime = time();

// CURRENT TEMP
$currentTemp = $data->main->temp;

// DYNAMIC BACKGROUND COLOR
if ($currentTemp >= 80) {
    $bgColor = "#ffccd5";
}
elseif ($currentTemp >= 60 && $currentTemp < 80) {
    $bgColor = "#fff2cc";
}
elseif ($currentTemp >= 40 && $currentTemp < 60) {
    $bgColor = "#d9ead3";
}
else {
    $bgColor = "#c9daf8";
}
?>

<!doctype html>
<html>

<head>

<title>Forecast Weather using OpenWeatherMap with PHP</title>

<style>

body {
    font-family: Arial;
    font-size: 0.95em;
    color: #555555;
    background-color: <?php echo $bgColor; ?>;
    transition: background-color 0.5s ease;
}

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
    font-size: 2em;
    font-weight: bold;
    margin: 20px 0px;
    display:flex;
    align-items:center;
}

span.min-temperature {
    margin-left: 15px;
    color: #929292;
}

.time {
    line-height: 25px;
}

.time div{
    margin:8px 0;
}

</style>

</head>

<body>

<div class="report-container">

    <h2>
        <?php echo $data->name; ?> Weather Status
    </h2>

    <div class="time">

        <div>
            <?php echo date("l g:i a", $currentTime); ?>
        </div>

        <div>
            <?php echo date("jS F, Y", $currentTime); ?>
        </div>

        <div>
            <?php echo ucwords($data->weather[0]->description); ?>
        </div>

    </div>

    <div class="weather-forecast">

        <img
        src="https://openweathermap.org/img/wn/<?php echo $data->weather[0]->icon; ?>@2x.png"
        class="weather-icon" />

        <?php echo $data->main->temp; ?>&deg;<?php echo $temp; ?>

        <span class="min-temperature">
            Min:
            <?php echo $data->main->temp_min; ?>&deg;<?php echo $temp; ?>
        </span>

    </div>

    <div class="time">

        <div>
            Humidity:
            <?php echo $data->main->humidity; ?>%
        </div>

        <div>
            Wind Speed:
            <?php echo $data->wind->speed . " " . $windUnit; ?>
        </div>

        <div>
            Pressure:
            <?php echo $data->main->pressure; ?> hPa
        </div>

        <div>
            Feels Like:
            <?php echo $data->main->feels_like; ?>&deg;<?php echo $temp; ?>
        </div>

        <div>
            Sunrise:
            <?php echo date("g:i a", $data->sys->sunrise); ?>
        </div>

        <div>
            Sunset:
            <?php echo date("g:i a", $data->sys->sunset); ?>
        </div>

    </div>

    <br>

    <h3>

    <?php
    $weatherMain = $data->weather[0]->main;

    if($weatherMain == "Rain"){
        echo "Don't forget your umbrella ☔";
    }
    elseif($weatherMain == "Snow"){
        echo "Bundle up outside ❄️";
    }
    elseif($weatherMain == "Clear"){
        echo "Perfect weather today ☀️";
    }
    elseif($weatherMain == "Clouds"){
        echo "A cloudy day in Shakopee ☁️";
    }
    else{
        echo "Stay prepared for today's weather!";
    }
    ?>

    </h3>

    <!-- FEATURE 1: EXTRA ALERT MESSAGE -->
    <div class="time">
        <?php
        if($currentTemp > 85){
            echo "<b>Heat Advisory: Stay hydrated! 🥤</b>";
        }
        elseif($currentTemp < 32){
            echo "<b>Freezing Alert: Dress warm 🧊</b>";
        }
        ?>
    </div>

    <!-- FEATURE 2: SIMPLE WEATHER ICON TEXT LABEL -->
    <div class="time">
        <b>Weather Type:</b>
        <?php echo $data->weather[0]->main; ?>
    </div>

</div>

</body>
</html>