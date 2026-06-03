function showDate() {
    document.getElementById("date").innerHTML =
    "Today's Date: " + new Date().toDateString();
}

function favoriteAnime() {
    alert("My favorite anime is One Piece!");
}

function countCharacters() {

    let animeName =
    document.getElementById("animeInput").value;

    document.getElementById("count").innerHTML =
    "Character Count: " + animeName.length;
}

function darkMode() {
    document.body.classList.toggle("dark-mode");
}

function animeScore() {

    let story =
    Number(document.getElementById("story").value);

    let animation =
    Number(document.getElementById("animation").value);

    let average =
    (story + animation) / 2;

    document.getElementById("score").innerHTML =
    "Anime Score: " + average;
}

function welcomeUser() {

    let user =
    document.getElementById("userName").value;

    alert("Welcome " + user + " to AnimeVerse!");
}

async function getAnime() {

    try {

        const response =
        await fetch("https://api.jikan.moe/v4/anime/1");

        const data =
        await response.json();

        document.getElementById("animeTitle").innerHTML =
        "Title: " + data.data.title;

        document.getElementById("animeEpisodes").innerHTML =
        "Episodes: " + data.data.episodes;

        document.getElementById("animeScore").innerHTML =
        "Score: " + data.data.score;

    }

    catch(error) {

        document.getElementById("animeTitle").innerHTML =
        "Unable to load anime data.";

    }
}