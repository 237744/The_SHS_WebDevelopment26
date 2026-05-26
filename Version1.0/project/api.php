<?php
header("Content-Type: application/json");

// simple “movie database”
$movies = [
    "interstellar" => [
        "title" => "Interstellar",
        "year" => 2014,
        "director" => "Christopher Nolan",
        "desc" => "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    ],
    "inception" => [
        "title" => "Inception",
        "year" => 2010,
        "director" => "Christopher Nolan",
        "desc" => "A thief who steals corporate secrets through dream-sharing technology is given an inverse task of planting an idea."
    ],
    "batman" => [
        "title" => "The Dark Knight",
        "year" => 2008,
        "director" => "Christopher Nolan",
        "desc" => "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into chaos."
    ]
];

// get query like: api.php?movie=interstellar
$key = strtolower($_GET["movie"] ?? "");

if(isset($movies[$key])){
    echo json_encode([
        "status" => "success",
        "data" => $movies[$key]
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Movie not found"
    ]);
}
?>