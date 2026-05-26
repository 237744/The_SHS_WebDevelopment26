<?php
session_start();
?>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Sawyer's Watchlist</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">

    <!-- Your CSS -->
    <link rel="stylesheet" href="CSS/style.css">

</head>

<body>

<!-- NAVBAR -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark">

    <a class="navbar-brand" href="index.php">🎬 Sawyer's Watchlist</a>

    <div class="collapse navbar-collapse show">

        <div class="navbar-nav">

            <a href="index.php" class="nav-item nav-link active">Home</a>
            <a href="godfather.php" class="nav-item nav-link">The Godfather</a>
            <a href="interstellar.php" class="nav-item nav-link">Interstellar</a>
            <a href="topgun.php" class="nav-item nav-link">Top Gun: Maverick</a>
            <a href="ferris.php" class="nav-item nav-link">Ferris Bueller</a>
            <a href="gallery.php" class="nav-item nav-link">Gallery</a>

        </div>

    </div>

</nav>

<!-- HERO SECTION -->
<div class="container mt-4">

    <div class="jumbotron text-center">

        <h1 class="display-4">Welcome to Sawyer's Watchlist 🎬</h1>

        <p class="lead">
            A collection of my favorite movies, reviews, ratings, and film facts.
        </p>

        <hr>

        <button class="btn btn-dark m-2" onclick="darkMode()">Dark Mode</button>

        <button class="btn btn-primary m-2" onclick="randomMovie()">Random Movie</button>

        <button class="btn btn-success m-2" onclick="showDate()">Show Date</button>

        <p id="date" class="mt-3"></p>

        <h3 id="randomMovie" class="mt-3"></h3>

    </div>

    <!-- MOVIE CARDS -->
    <div class="row text-center">

        <div class="col-md-3">
            <h4>The Godfather</h4>
        </div>

        <div class="col-md-3">
            <h4>Interstellar</h4>
        </div>

        <div class="col-md-3">
            <h4>Top Gun: Maverick</h4>
        </div>

        <div class="col-md-3">
            <h4>Ferris Bueller</h4>
        </div>

    </div>

    <hr>

    <!-- API SECTION -->
    <div class="text-center">

        <h2>Featured Movie API Info</h2>

        <button class="btn btn-warning" onclick="getMovieData()">
            Load Interstellar Info
        </button>

        <p id="info" class="mt-3"></p>

    </div>

</div>

<!-- JS -->
<script src="JS/script.js"></script>

</body>
</html>