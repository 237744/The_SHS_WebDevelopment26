<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Sawyer's Watchlist - The Godfather</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <!-- Your CSS -->
    <link rel="stylesheet" href="CSS/product.css">
</head>

<body>

<!-- NAVBAR -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark">

    <a class="navbar-brand" href="index.php">Sawyer's Watchlist</a>

    <!-- FIX: proper mobile toggle button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="nav">

        <div class="navbar-nav">

            <a href="index.php" class="nav-item nav-link">Home</a>
            <a href="godfather.php" class="nav-item nav-link active">The Godfather</a>
            <a href="interstellar.php" class="nav-item nav-link">Interstellar</a>
            <a href="topgun.php" class="nav-item nav-link">Top Gun</a>
            <a href="ferris.php" class="nav-item nav-link">Ferris Bueller</a>

        </div>
    </div>
</nav>

<!-- CONTENT -->
<div class="container mt-4 text-center">

    <h1>The Godfather</h1>

    <p class="lead">
        A classic crime film about power, family, and loyalty.
    </p>

    <!-- IMAGE (FIX PATH SAFETY) -->
    <img src="images/godfather.jpg" width="300" class="img-fluid rounded">

    <hr>

    <!-- BUTTONS -->
    <button class="btn btn-dark" onclick="getGodfatherInfo()">
        Load Movie Info
    </button>

    <p id="info" class="mt-3"></p>

    <hr>

    <h3>My Rating: 10/10</h3>

    <button class="btn btn-primary" onclick="quoteAlert()">
        Favorite Quote
    </button>

</div>

<!-- JS (IMPORTANT FIX: use correct path + load Bootstrap JS) -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

<script src="JS/script.js"></script>

</body>
</html>