// FUNCTION 1
function showMessage(){

    document.getElementById("tip").innerHTML =
    "Always bring water and check the weather before hiking!";
}


// FUNCTION 2
let count = 0;

function increaseCounter(){

    count++;

    document.getElementById("counter").innerHTML = count;
}


// FUNCTION 3
function changeText(){

    document.getElementById("aboutText").innerHTML =
    "Minnesota has amazing outdoor locations!";
}


// FUNCTION 4
function changeTheme(){

    document.body.style.backgroundColor = "#a2d1ff";
}


// FUNCTION 5 (CUSTOM FUNCTION)
function calculateWater(){

    let days = document.getElementById("days").value;

    let gallons = days * 2;

    let message = "";

    if(days <= 0){

        message = "Please enter valid days.";

    }
    else{

        message =
        "For " + days + " days, you need about " +
        gallons + " gallons of water.";
    }

    document.getElementById("waterResult").innerHTML = message;
}



// API CALL

const apiKey = "2e6072dfbdc04340af0c54a08a635bd2";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Shakopee&appid=${apiKey}&units=imperial`)

.then(response => response.json())

.then(data => {

    document.getElementById("city").innerHTML =
    data.name;

    document.getElementById("temp").innerHTML =
    "Temperature: " + data.main.temp + " °F";

    document.getElementById("condition").innerHTML =
    "Condition: " + data.weather[0].description;

});

// SEARCH FUNCTION
function searchActivities(){

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".activity-card");

    cards.forEach(function(card){

        let activity = card.dataset.name;

        if(activity.includes(input)){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";
        }

    });
}

// WELCOME MESSAGE
function welcomeMessage(){

    let username = prompt("Enter your name:");

    if(username){

        alert("Welcome to Minnesota Outdoor Adventures, " + username + "!");
    }
}