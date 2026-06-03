<?php
require_once "config.php";

$msg = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $u = trim($_POST["username"]);
    $p = password_hash(trim($_POST["password"]), PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, password) VALUES (?, ?)";

    if($stmt = mysqli_prepare($link, $sql)){
        mysqli_stmt_bind_param($stmt, "ss", $u, $p);

        if(mysqli_stmt_execute($stmt)){
            $msg = "Account created!";
        } else {
            $msg = "Error creating account.";
        }
    }
}
?>

<div class="container mt-5">
<h2>Register</h2>

<form method="post">
    <input class="form-control" name="username"><br>
    <input class="form-control" type="password" name="password"><br>
    <button class="btn btn-success">Register</button>
</form>

<p><?php echo $msg; ?></p>
</div>