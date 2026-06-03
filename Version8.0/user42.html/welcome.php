<?php
session_start();

// Redirect if not logged in
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Welcome</title>

<!-- Bootstrap -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

<style>

body {
    font-family: Arial, sans-serif;
    background: #f4f6f9;
    text-align: center;
}

.page-header {
    margin-top: 60px;
}

.card-box {
    margin: 40px auto;
    padding: 30px;
    max-width: 600px;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 6px 20px rgba(0,0,0,0.1);
}

.navbar-brand {
    font-weight: bold;
}

</style>

</head>

<body>

<!-- NAVBAR -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark">

    <a href="#" class="navbar-brand">WebDev</a>

    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">

        <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">About Me</a>
            </li>

            <li class="nav-item disabled">
                <a class="nav-link" href="#" tabindex="-1">Music</a>
            </li>

            <li class="nav-item disabled">
                <a class="nav-link" href="#" tabindex="-1">Lists</a>
            </li>

            <li class="nav-item disabled">
                <a class="nav-link" href="#">Contact</a>
            </li>

        </ul>

        <ul class="navbar-nav ml-auto">

            <li class="nav-item">
                <a class="nav-link" href="reset_password.php">
                    <i class="fa fa-cog"></i>
                    <?php echo htmlspecialchars($_SESSION["username"]); ?>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link btn btn-danger text-white ml-2"
                   href="logout.php"
                   onclick="return confirm('Are you sure you want to logout?');">
                   Logout
                </a>
            </li>

        </ul>

    </div>
</nav>

<!-- MAIN CONTENT -->
<div class="container">

    <div class="card-box">

        <h1>Welcome</h1>

        <h3>
            Hi,
            <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>
        </h3>

        <p>You are now logged in successfully.</p>

    </div>

</div>

</body>
</html>