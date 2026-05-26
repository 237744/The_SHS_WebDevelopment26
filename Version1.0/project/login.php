<?php
session_start();
require_once "includes/config.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $u = $_POST["username"];
    $p = $_POST["password"];

    $sql = "SELECT id, username, password FROM users WHERE username=?";
    $stmt = mysqli_prepare($link, $sql);
    mysqli_stmt_bind_param($stmt, "s", $u);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);

    if(mysqli_stmt_num_rows($stmt) == 1){
        mysqli_stmt_bind_result($stmt, $id, $username, $hash);
        mysqli_stmt_fetch($stmt);

        if(password_verify($p, $hash)){
            $_SESSION["loggedin"] = true;
            $_SESSION["username"] = $username;
            header("location: index.php");
            exit;
        }
    }

    echo "Login failed";
}
?>

<form method="post">
    <input name="username" placeholder="Username">
    <input name="password" type="password" placeholder="Password">
    <button>Login</button>
</form>