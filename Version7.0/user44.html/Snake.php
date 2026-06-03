<?php
$apiKey = "3b3d7ee928112590da0656922ffe4c02"; //You will need to add in the 
$cityId = "5046997"; //5046997 Shakopee City Id
$units = "imperial";//metric-Celcius  imperial-Farhenheit
if ($units == 'metric'){//Changes the $temp varaible to match 
    $temp = "C";
}
else {
    $temp = "F";
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

//curl_close($ch);
$data = json_decode($response);
$currentTime = time();

$currentTemp = $data->main->temp;

if ($currentTemp < 32) {
    $bgColor = "#a3d5ff"; // cold
} elseif ($currentTemp < 60) {
    $bgColor = "#b2f2bb"; // cool
} elseif ($currentTemp < 80) {
    $bgColor = "#ffd8a8"; // warm
} else {
    $bgColor = "#ff8787"; // hot
}
?>



<!-- Original source code: https://codepen.io/CaioPaiola/pen/nojJmQ -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Snake Game</title>

    <!-- connect CSS -->
    <link rel="stylesheet" href="SnakeStyle.css">
</head>

<body>

<h3>Simple Snake Game</h3>

<canvas id="stage" height="400" width="520"></canvas>

<!-- connect JavaScript -->
<script src="SnakeScript.js"></script>

    <div class="report-container" style="background-color: <?php echo $bgColor; ?>;">
        <h2><?php echo $data->name; ?> Weather Status</h2>
        <div class="time">
            <div><?php echo date("l g:i a", $currentTime); ?></div>
            <div><?php echo date("jS F, Y",$currentTime); ?></div>
            <div><?php echo ucwords($data->weather[0]->description); ?></div>
        </div>
        <div class="weather-forecast">
            <img
                src="http://openweathermap.org/img/w/<?php echo $data->weather[0]->icon; ?>.png"
                class="weather-icon" /> <?php echo $data->main->temp_max; ?>&deg;<?php echo $temp; ?><span
                class="min-temperature"><?php echo $data->main->temp_min; ?>&deg;<?php echo $temp; ?></span>
        </div>
        <div class="time">
            <div>Humidity: <?php echo $data->main->humidity; ?> %</div>
            <div>Wind: <?php echo $data->wind->speed; ?> km/h</div>
        </div>
    </div>

</body>
</html>
