<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Sawyer's Watchlist | All Reviews</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="JS/standard.js"></script>

    <style>
        body {
            background: #111;
            color: white;
        }

        .review-card {
            background: #222;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 10px;
        }

        .movie-tag {
            background: #5bc0de;
            padding: 3px 8px;
            border-radius: 5px;
            font-size: 12px;
        }
    </style>
</head>

<body>

<!-- NAVBAR -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="index.php">🎬 Sawyer's Watchlist</a>

    <div class="navbar-nav">
        <a class="nav-link" href="index.php">Home</a>
        <a class="nav-link" href="godfather.php">Godfather</a>
        <a class="nav-link" href="interstellar.php">Interstellar</a>
        <a class="nav-link" href="topgun.php">Top Gun</a>
        <a class="nav-link" href="ferris.php">Ferris</a>
        <a class="nav-link active" href="reviews.php">Reviews Feed</a>
    </div>
</nav>

<div class="container mt-4">

    <h2>All Movie Reviews</h2>
    <p>Live feed of user reviews from Sawyer's Watchlist</p>

    <!-- BUTTON (JS REQUIRED FUNCTION) -->
    <button class="btn btn-primary mb-3" onclick="loadSampleReviews()">
        Load Sample Reviews
    </button>

    <!-- REVIEWS CONTAINER -->
    <div id="reviewsFeed"></div>

</div>

</body>
</html>