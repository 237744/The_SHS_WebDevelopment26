<?php
session_start();
require_once "config.php";

if(!isset($_SESSION["loggedin"])) {
    header("location: login.php");
    exit;
}

$user = $_SESSION["username"];

/* =========================
   LIKE TOGGLE SYSTEM
========================= */
if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["like"])){

    $photo_id = intval($_POST["like"]);

    // check if like exists
    $check = "SELECT id FROM user_likes WHERE photo_id=? AND user=?";
    $stmt = mysqli_prepare($link, $check);
    mysqli_stmt_bind_param($stmt, "is", $photo_id, $user);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);

    if(mysqli_stmt_num_rows($stmt) > 0){
        // REMOVE LIKE (toggle off)
        $delete = "DELETE FROM user_likes WHERE photo_id=? AND user=?";
        $stmt2 = mysqli_prepare($link, $delete);
        mysqli_stmt_bind_param($stmt2, "is", $photo_id, $user);
        mysqli_stmt_execute($stmt2);
        mysqli_stmt_close($stmt2);
    } else {
        // ADD LIKE
        $insert = "INSERT INTO user_likes (photo_id, user, img_like) VALUES (?,?,1)";
        $stmt2 = mysqli_prepare($link, $insert);
        mysqli_stmt_bind_param($stmt2, "is", $photo_id, $user);
        mysqli_stmt_execute($stmt2);
        mysqli_stmt_close($stmt2);
    }

    mysqli_stmt_close($stmt);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Gallery</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="CSS/style.css">
</head>

<body>

<div class="container text-center">

<h2 class="my-4">🎬 Movie Gallery</h2>

<div class="row">

<?php
$res = mysqli_query($link, "SELECT * FROM photos");

while($row = mysqli_fetch_assoc($res)){

    $photo_id = $row['photo_id'];

    // count likes
    $like_count_sql = "SELECT COUNT(*) as total FROM user_likes WHERE photo_id=$photo_id";
    $like_result = mysqli_query($link, $like_count_sql);
    $like_row = mysqli_fetch_assoc($like_result);
    $likes = $like_row['total'];

    // check if user liked
    $liked_sql = "SELECT id FROM user_likes WHERE photo_id=$photo_id AND user='$user'";
    $liked_res = mysqli_query($link, $liked_sql);
    $isLiked = mysqli_num_rows($liked_res) > 0;

    $icon = $isLiked ? "❤️ Liked" : "🤍 Like";

    echo "
    <div class='col-md-4 mb-4'>
        <div class='card bg-dark text-white p-2'>

            <img src='images/{$photo_id}.jpg' class='img-fluid' style='border-radius:10px;'>

            <form method='POST' class='mt-2'>
                <button name='like' value='{$photo_id}' class='btn btn-primary btn-block'>
                    {$icon}
                </button>
            </form>

            <p class='mt-2'>👍 Likes: {$likes}</p>

        </div>
    </div>
    ";
}
?>

</div>
</div>

</body>
</html>