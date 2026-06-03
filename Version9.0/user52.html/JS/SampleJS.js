async function getWeather(city) {

    const Key = "fa0a1273d2367fe593d6886ad4c3ffd2";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("weather").innerHTML =
        `Temperature: ${data.main.temp}°C`;

    recommendActivities(data.weather[0].main);
}

function searchCity() {
    let city = document.getElementById("cityInput").value;
    getWeather(city);
}

async function getWeather(city) {

    const Key = "fa0a1273d2367fe593d6886ad4c3ffd2";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("weather").innerHTML =
        `Temperature: ${data.main.temp}°C`;

    recommendActivities(data.weather[0].main);
}

function calculateBudget() {

    let hotel =
        parseFloat(document.getElementById("hotel").value);

    let food =
        parseFloat(document.getElementById("food").value);

    let transport =
        parseFloat(document.getElementById("transport").value);

    let total = hotel + food + transport;

    document.getElementById("total").innerHTML =
        "Trip Total: $" + total;
}

function saveFavorite(city) {

    localStorage.setItem("favoriteCity", city);

    alert(city + " saved!");
}

function displayPackingList(weather) {

    let list = "";

    if (weather === "Rain") {
        list = "Bring an umbrella and rain jacket.";
    }
    else {
        list = "Bring sunglasses and sunscreen.";
    }

    document.getElementById("packing").innerHTML = list;
}