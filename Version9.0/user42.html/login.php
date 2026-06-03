<?php
session_start();
require_once "config.php";

$error = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    $sql = "SELECT id, username, password FROM users WHERE username=?";

    if($stmt = mysqli_prepare($link, $sql)){
        mysqli_stmt_bind_param($stmt, "s", $username);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);

        if(mysqli_stmt_num_rows($stmt) == 1){
            mysqli_stmt_bind_result($stmt, $id, $username, $hashed);
            mysqli_stmt_fetch($stmt);

            if(password_verify($password, $hashed)){
                $_SESSION["loggedin"] = true;
                $_SESSION["id"] = $id;
                $_SESSION["username"] = $username;

                header("location: index.php");
                exit;
            } else {
                $error = "Wrong password";
            }
        } else {
            $error = "User not found";
        }
    }
}
?>

<link rel="stylesheet" href="CSS/style.css">

<div class="container mt-5">
    <h2>Login</h2>

    <form method="post">
        <input class="form-control" name="username" placeholder="Username"><br>
        <input class="form-control" type="password" name="password" placeholder="Password"><br>

        <button class="btn btn-primary">Login</button>
    </form>

    <p style="color:red;"><?php echo $error; ?></p>
</div>