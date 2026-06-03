<?php

$API_KEY = "YOUR_OMDB_KEY"; // replace this

$movie = "Interstellar";
$url = "https://www.omdbapi.com/?t=" . urlencode($movie) . "&apikey=" . $API_KEY;

// safer request (handles failures better)
$response = @file_get_contents($url);

if ($response === FALSE) {
    die("<h2>API Error: Cannot connect to OMDb</h2>");
}

$data = json_decode($response);

// OMDb error handling
if (!$data || isset($data->Response) && $data->Response == "False") {
    die("<h2>Movie not found or API error</h2>");
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Sawyer's Watchlist - API</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <style>
        body {
            background: #111;
            color: white;
        }

        .card {
            background: #1e1e1e;
            padding: 20px;
            margin-top: 50px;
            border-radius: 12px;
            display: inline-block;
        }

        img {
            border-radius: 10px;
            margin-top: 10px;
        }
    </style>
</head>

<body class="text-center">

<div class="card">

    <h1><?php echo $data->Title ?? "No Title"; ?></h1>

    <img src="<?php echo $data->Poster ?? ''; ?>" width="250">

    <hr>

    <p><b>Year:</b> <?php echo $data->Year ?? "N/A"; ?></p>
    <p><b>Rating:</b> <?php echo $data->imdbRating ?? "N/A"; ?></p>

    <p><b>Plot:</b> <?php echo $data->Plot ?? "No plot available"; ?></p>

</div>

</body>
</html>