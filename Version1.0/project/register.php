<?php
session_start();
require_once "includes/config.php";

$username = $password = "";
$error = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    if(empty($username) || empty($password)){
        $error = "Fill in all fields";
    } else {

        // check if user exists
        $check = "SELECT id FROM users WHERE username=?";
        $stmt = mysqli_prepare($link, $check);
        mysqli_stmt_bind_param($stmt, "s", $username);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);

        if(mysqli_stmt_num_rows($stmt) > 0){
            $error = "Username already taken";
        } else {

            // insert user
            $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
            $stmt2 = mysqli_prepare($link, $sql);

            $hashed = password_hash($password, PASSWORD_DEFAULT);

            mysqli_stmt_bind_param($stmt2, "ss", $username, $hashed);

            if(mysqli_stmt_execute($stmt2)){
                header("location: login.php");
                exit;
            } else {
                $error = "Error creating account";
            }
        }
    }
}
?>

<?php include "includes/header.php"; ?>

<h1>Register</h1>

<form method="post">
    <input class="form-control mb-2" name="username" placeholder="Username">
    <input class="form-control mb-2" type="password" name="password" placeholder="Password">

    <button class="btn btn-primary">Create Account</button>
</form>

<p style="color:red;"><?php echo $error; ?></p>

<?php include "includes/footer.php"; ?>