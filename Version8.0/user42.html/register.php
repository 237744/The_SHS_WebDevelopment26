<?php
require_once "config.php";

$username = $password = $confirm_password = "";
$username_err = $password_err = $confirm_password_err = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    // USERNAME
    if(empty(trim($_POST["username"]))){
        $username_err = "Please enter a username.";
    } else {

        $sql = "SELECT id FROM users WHERE username = ?";

        if($stmt = mysqli_prepare($link, $sql)){

            mysqli_stmt_bind_param($stmt, "s", $param_username);
            $param_username = trim($_POST["username"]);

            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);

                if(mysqli_stmt_num_rows($stmt) == 1){
                    $username_err = "This username is already taken.";
                } else {
                    $username = trim($_POST["username"]);
                }
            }

            mysqli_stmt_close($stmt);
        }
    }

    // PASSWORD
    if(empty(trim($_POST["password"]))){
        $password_err = "Please enter a password.";
    } elseif(strlen(trim($_POST["password"])) < 6){
        $password_err = "Password must be at least 6 characters.";
    } else {
        $password = trim($_POST["password"]);
    }

    // CONFIRM PASSWORD
    if(empty(trim($_POST["confirm_password"]))){
        $confirm_password_err = "Please confirm password.";
    } else {
        $confirm_password = trim($_POST["confirm_password"]);

        if(empty($password_err) && ($password != $confirm_password)){
            $confirm_password_err = "Passwords do not match.";
        }
    }

    // INSERT USER
    if(empty($username_err) && empty($password_err) && empty($confirm_password_err)){

        $sql = "INSERT INTO users (username, password) VALUES (?, ?)";

        if($stmt = mysqli_prepare($link, $sql)){

            mysqli_stmt_bind_param($stmt, "ss", $param_username, $param_password);

            $param_username = $username;
            $param_password = password_hash($password, PASSWORD_DEFAULT);

            if(mysqli_stmt_execute($stmt)){
                header("location: login.php");
                exit;
            }

            mysqli_stmt_close($stmt);
        }
    }

    mysqli_close($link);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Sign Up</title>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

<style>

body {
    font-family: Arial;
    background: #f4f6f9;
}

.form-box {
    max-width: 420px;
    margin: 60px auto;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 6px 20px rgba(0,0,0,0.1);
}

.error {
    color: red;
    font-size: 0.9em;
}

</style>

</head>

<body>

<!-- NAVBAR -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark">

    <a class="navbar-brand" href="#">WebDev</a>

    <div class="ml-auto navbar-nav">
        <a class="nav-link text-white" href="login.php">Login</a>
    </div>

</nav>

<!-- FORM -->
<div class="form-box">

    <h2 class="text-center">Sign Up</h2>
    <p class="text-center text-muted">Create your account</p>

    <form method="post">

        <div class="form-group">
            <label>Username</label>
            <input type="text" name="username" class="form-control" value="<?php echo $username; ?>">
            <span class="error"><?php echo $username_err; ?></span>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" class="form-control">
            <span class="error"><?php echo $password_err; ?></span>
        </div>

        <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirm_password" class="form-control">
            <span class="error"><?php echo $confirm_password_err; ?></span>
        </div>

        <button type="submit" class="btn btn-primary btn-block">
            Create Account
        </button>

        <a href="login.php" class="btn btn-link btn-block">
            Already have an account?
        </a>

    </form>

</div>

</body>
</html>