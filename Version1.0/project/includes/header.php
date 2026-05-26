<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title>WebDev Site</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/style.css">
    <script defer src="/assets/app.js"></script>
</head>

<body>

<nav class="navbar navbar-dark bg-dark px-3">
    <a class="navbar-brand" href="/index.php">WebDev</a>

    <div>
        <a class="btn btn-sm btn-light" href="/index.php">Home</a>
        <a class="btn btn-sm btn-light" href="/movies.php">Movies</a>
        <a class="btn btn-sm btn-light" href="/quotes.php">Quotes</a>
        <a class="btn btn-sm btn-light" href="/gallery.php">Gallery</a>

        <button class="btn btn-sm btn-warning" onclick="toggleDark()">🌙</button>

        <span id="date" class="text-white ml-2"></span>

        <?php if(isset($_SESSION["loggedin"])): ?>
            <a class="btn btn-sm btn-danger ml-2" href="/logout.php">Logout</a>
        <?php else: ?>
            <a class="btn btn-sm btn-success ml-2" href="/login.php">Login</a>
        <?php endif; ?>
    </div>
</nav>

<div class="container mt-4">