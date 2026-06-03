<?php

date_default_timezone_set("US/Central");

// API Key
$apiKey = "2be86bf60a54556a79a0a7e78b0ba04f";

// Shakopee city ID
$cityId = "5046997";

// Fahrenheit
$units = "imperial";

// API URL
$url = "https://api.openweathermap.org/data/2.5/weather?id=$cityId&units=$units&appid=$apiKey";

// Get weather data
$response = file_get_contents($url);

// Convert JSON into PHP array
$data = json_decode($response, true);

// Safety check (prevents errors if API fails)
if ($data && isset($data['main'])) {

    $city = $data['name'];
    $temp = $data['main']['temp'];
    $weather = $data['weather'][0]['description'];
    $humidity = $data['main']['humidity'];
    $wind = $data['wind']['speed'];

} else {

    $city = "Error loading data";
    $temp = 0;
    $weather = "N/A";
    $humidity = 0;
    $wind = 0;
}

// Background color based on temperature
$bgColor = "lightblue";

if ($temp > 85) {
    $bgColor = "red";
} elseif ($temp > 70) {
    $bgColor = "orange";
} elseif ($temp > 50) {
    $bgColor = "lightgreen";
} else {
    $bgColor = "lightblue";
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Weather App</title>

    <style>
        body {
            background-color: <?php echo $bgColor; ?>;
            font-family: Arial;
            text-align: center;
            padding-top: 50px;
        }

        .weatherBox {
            background: white;
            width: 400px;
            margin: auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px gray;
        }
    </style>
</head>

<body>

<div class="weatherBox">

    <h1><?php echo $city; ?> Weather</h1>

    <h2><?php echo $temp; ?> °F</h2>

    <p>Weather: <?php echo $weather; ?></p>

    <p>Humidity: <?php echo $humidity; ?>%</p>

    <p>Wind Speed: <?php echo $wind; ?> mph</p>

    <p>Current Time: <?php echo date("h:i:s A"); ?></p>

</div>

</body>
</html>