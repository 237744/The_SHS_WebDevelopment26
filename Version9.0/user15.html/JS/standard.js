//Page 1

function welcomeMessage(button) {
    alert("Welcome to the Invincible Universe!");
    
    button.innerHTML = "Enjoy exploring!";
}



//Page 2
function showSpoiler1() {
        document.getElementById("spoiler1").style.display = "none";
    document.getElementById("spoiler2").style.display = "none";
    document.getElementById("spoiler3").style.display = "none";
    document.getElementById("spoiler4").style.display = "none";


    document.getElementById("spoiler1").style.display = "block";
}
    
function showSpoiler2() {
        document.getElementById("spoiler1").style.display = "none";
    document.getElementById("spoiler2").style.display = "none";
    document.getElementById("spoiler3").style.display = "none";
    document.getElementById("spoiler4").style.display = "none";


    document.getElementById("spoiler2").style.display = "block";
}

function showSpoiler3() {
        document.getElementById("spoiler1").style.display = "none";
    document.getElementById("spoiler2").style.display = "none";
    document.getElementById("spoiler3").style.display = "none";
    document.getElementById("spoiler4").style.display = "none";


    document.getElementById("spoiler3").style.display = "block";
}

function showSpoiler4() {
        document.getElementById("spoiler1").style.display = "none";
    document.getElementById("spoiler2").style.display = "none";
    document.getElementById("spoiler3").style.display = "none";
    document.getElementById("spoiler4").style.display = "none";


    document.getElementById("spoiler4").style.display = "block";
}
function hideSpoiler() {
    document.getElementById("spoiler1").style.display = "none";
    document.getElementById("spoiler2").style.display = "none";
    document.getElementById("spoiler3").style.display = "none";
    document.getElementById("spoiler4").style.display = "none";
}


//Page 3

function buyItem(button) {
    button.innerHTML = "Added to cart!";
}

//Page 4

function countCharacters() {

    let text =
        document.getElementById("message").value;

    let count = text.length;

    document.getElementById("charCount").innerHTML =
        "Characters: " + count;
}

//Page 5

function scanPower() {

    let character =
        document.getElementById("character").value;

    character = character.toLowerCase();

    let power;

    if (
        character === "mark" ||
        character === "mark grayson" ||
        character === "invincible"
    ) {

        power = 9000;

    }

    else if (
        character === "omni man" ||
        character === "nolan grayson" ||
        character === "nolan"
    ) {

        power = 15000;

    }

    else if (
        character === "atom eve" ||
        character === "samantha eve" ||
        character === "eve"
    ) {

        power = 8000;

    }

    else if (
        character === "allen" ||
        character === "allen the alien"
    ) {

        power = 12500;

    }

    else if (
        character === "oliver" ||
        character === "kid omni man"
    ) {

        power = 7500;

    }

    
    else if (
        character === "conquest"
    ) {

        power = 13500;

    }

    

    else if (
        character === "anissa"
    ) {

        power = 12000;

    }

     else if (
        character === "thragg" ||
        character === "grand regent thragg"
    ) {

        power = 25000;

    }

     else if (
        character === "kregg" ||
        character === "general kregg"
    ) {

        power = 14500;

    }

    


    else {

        power = "Unknown";

    }

    document.getElementById("powerLevel").innerHTML =
        "Power Level: " + power;
}

//Page 6

async function getShowInfo() {

    const response = await fetch("https://api.tvmaze.com/shows/37196");

    const data = await response.json();

    document.getElementById("showInfo").innerHTML =
        "Name: " + data.name +
        "<br>Language: " + data.language +
        "<br>Status: " + data.status +
        "<br>Rating: " + data.rating.average +
        "<br>Summary: " + data.summary;
}