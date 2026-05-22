// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon img");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

// WEATHER OBJECT
const weather = {
    unit: "celsius"
};

// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

// CHECK GEOLOCATION
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    showError({ message: "Geolocation not supported" });
}

// GET POSITION
function setPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    getWeather(lat, lon);
}

// ERROR HANDLER
function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>${error.message}</p>`;
}

// GET WEATHER FROM API
function getWeather(lat, lon) {

    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

    fetch(api)
        .then(res => res.json())
        .then(data => {

            console.log(data);

            weather.temperature = Math.floor(data.main.temp);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;

        })
        .then(displayWeather)
        .catch(() => {
            showError({ message: "Unable to get weather data" });
        });
}

// DISPLAY WEATHER
function displayWeather() {

    iconElement.src = `https://openweathermap.org/img/wn/${weather.iconId}@2x.png`;

    tempElement.innerHTML = `${weather.temperature}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;

    humidityElement.innerHTML = `Humidity: ${weather.humidity}%`;
    windElement.innerHTML = `Wind: ${weather.wind} m/s`;
}

// CONVERT C TO F
function celsiusToFahrenheit(temp) {
    return (temp * 9) / 5 + 32;
}

// TOGGLE TEMPERATURE
tempElement.addEventListener("click", () => {

    if (weather.temperature === undefined) return;

    if (weather.unit === "celsius") {

        let f = Math.floor(celsiusToFahrenheit(weather.temperature));
        tempElement.innerHTML = `${f}°<span>F</span>`;
        weather.unit = "fahrenheit";

    } else {

        tempElement.innerHTML = `${weather.temperature}°<span>C</span>`;
        weather.unit = "celsius";
    }
});