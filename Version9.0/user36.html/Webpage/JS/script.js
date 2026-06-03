
function showGreeting(){
    document.getElementById("greeting").innerHTML =
    "Welcome to Hawaii Paradise!";
}

function showTime(){
    const now = new Date();
    document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();
    setTimeout(showTime,1000);
}

function randomDestination(){

    let places = ["Oahu","Maui","Kauai","Big Island","Lanai"];

    let pick = places[Math.floor(Math.random()*places.length)];

    document.getElementById("randomPlace").innerHTML =
    "Visit: " + pick;
}

function getTravelFact(){

    const hawaiiFacts = [
        "Hawaii is the only U.S. state made up entirely of islands.",
        "Mauna Kea is taller than Mount Everest when measured from its base on the ocean floor.",
        "Hawaii has 8 main islands and over 100 smaller ones.",
        "The Hawaiian alphabet has only 12 letters.",
        "Surfing was first developed in Hawaii by Polynesian settlers.",
        "Hawaii is growing due to volcanic activity on the Big Island."
    ];

    let pick = hawaiiFacts[Math.floor(Math.random() * hawaiiFacts.length)];

    document.getElementById("factBox").innerHTML =
        "<h3>" + pick + "</h3>";
}

function calculateTravelCost(miles, mpg, gasPrice){
    return (miles/mpg)*gasPrice;
}
 function showHawaiiGreeting(){

    const now = new Date();

    const hawaiiTime = now.toLocaleTimeString("en-US", {
        timeZone: "Pacific/Honolulu"
    });

    document.getElementById("hawaiiTime").innerHTML =
    "  Hawaii Time: " + hawaiiTime;
} function shuffleGallery(){

    const grid = document.getElementById("galleryGrid");

    let images = Array.from(grid.children);

    for (let i = images.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [images[i], images[j]] = [images[j], images[i]];
    }
    grid.innerHTML = "";

    images.forEach(img => {
        grid.appendChild(img);
    });
}function calculateFlightCost(){

    let distance = document.getElementById("distance").value;
    let basePrice = document.getElementById("basePrice").value;
    let fees = document.getElementById("fees").value;

    // Simple logic: distance adds small scaling factor
    let distanceCost = distance * 0.12;

    let total = Number(basePrice) + Number(fees) + distanceCost;

    document.getElementById("flightCost").innerHTML =
    "Estimated Flight Cost: $" + total.toFixed(2);
}
function getOceanWarning(){

    const apiKey = "c222bb596cfa3879e48b8e5f0b78ac2d";

    const city = "Honolulu";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        let windSpeed = data.wind.speed;

        let warning = "";

        if(windSpeed > 20){
            warning = "⚠️ High Surf Warning";
        }
        else if(windSpeed > 12){
            warning = "🌊 Moderate Ocean Conditions";
        }
        else{
            warning = "✅ Ocean Conditions Calm";
        }

        document.getElementById("oceanWarning").innerHTML =
        "<h3>" + warning + "</h3>" +
        "<p>Wind Speed: " + windSpeed + " mph</p>";
    });
}