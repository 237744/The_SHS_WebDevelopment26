<?php
session_start();

if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: welcome.php");
    exit;
}

require_once "config.php";

$username = $password = "";
$username_err = $password_err = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    if(empty(trim($_POST["username"]))){
        $username_err = "Please enter username.";
    } else {
        $username = trim($_POST["username"]);
    }

    if(empty(trim($_POST["password"]))){
        $password_err = "Please enter your password.";
    } else {
        $password = trim($_POST["password"]);
    }

    if(empty($username_err) && empty($password_err)){

        $sql = "SELECT id, username, password FROM users WHERE username = ?";

        if($stmt = mysqli_prepare($link, $sql)){

            mysqli_stmt_bind_param($stmt, "s", $param_username);
            $param_username = $username;

            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);

                if(mysqli_stmt_num_rows($stmt) == 1){

                    mysqli_stmt_bind_result($stmt, $id, $username, $hashed_password);

                    if(mysqli_stmt_fetch($stmt)){

                        if(password_verify($password, $hashed_password)){

                            session_start();

                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["username"] = $username;

                            header("location: welcome.php");
                            exit;

                        } else {
                            $password_err = "Incorrect password.";
                        }
                    }

                } else {
                    $username_err = "No account found with that username.";
                }
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

<title>Login</title>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

<style>

body{
    font-family: Arial;
    background: #f4f6f9;
}

.login-box{
    max-width: 400px;
    margin: 70px auto;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 6px 20px rgba(0,0,0,0.1);
}

.error{
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
        <a class="nav-link text-white" href="register.php">Sign Up</a>
    </div>

</nav>

<!-- LOGIN FORM -->
<div class="login-box">

    <h2 class="text-center">Login</h2>
    <p class="text-center text-muted">Enter your credentials</p>

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

        <button type="submit" class="btn btn-primary btn-block">
            Login
        </button>

        <a href="register.php" class="btn btn-link btn-block">
            Create an account
        </a>

    </form>

</div>

</body>
</html>