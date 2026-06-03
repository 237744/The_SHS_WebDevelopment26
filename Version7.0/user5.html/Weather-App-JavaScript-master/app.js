// // || API KEY || PUT YOUR API KEY HERE!!!!!!!!!
const key = "420c9ccc4b8b5ee88c74f0fc394d085b";

// Shakopee coordinates
var latitude = "44.7974";
var longitude = "-93.5273";

// SELECT MAIN ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// SELECT THE 6 METRIC ELEMENTS (With automatic fallback configuration)
let windElement = document.getElementById("wind");
let humidityElement = document.getElementById("humidity");
let visibilityElement = document.getElementById("visibility");
let pressureElement = document.getElementById("pressure");
let uvElement = document.getElementById("uv-index");
let dewPointElement = document.getElementById("dew-point");

// SMART FALLBACK: If IDs are missing in the HTML, find them by their layout positions
if (!windElement) {
    const valueSpans = document.querySelectorAll(".flex.flex-wrap.gap-1 > div > span");
    if (valueSpans.length >= 6) {
        windElement = valueSpans[0];
        humidityElement = valueSpans[1];
        visibilityElement = valueSpans[2];
        pressureElement = valueSpans[3];
        uvElement = valueSpans[4];
        dewPointElement = valueSpans[5];
    }
}

// App data
const weather = {};
weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;

// Helper function to convert wind degrees into compass directions
function getWindDirection(deg) {
    if (deg === undefined) return '';
    if (deg > 337.5 || deg <= 22.5) return 'N';
    if (deg > 22.5 && deg <= 67.5) return 'NE';
    if (deg > 67.5 && deg <= 112.5) return 'E';
    if (deg > 112.5 && deg <= 157.5) return 'SSE';
    if (deg > 157.5 && deg <= 202.5) return 'S';
    if (deg > 202.5 && deg <= 247.5) return 'SSW';
    if (deg > 247.5 && deg <= 292.5) return 'W';
    return 'NW';
}

// GET WEATHER FROM API PROVIDER
function getWeather(){
    // Using https instead of http prevents modern browsers from blocking the request
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // Main Top Weather Data
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;

            // Extracting the 6 Grid Metrics from API Response
            weather.windSpeed = data.wind && data.wind.speed ? Math.round(data.wind.speed) : 0;
            weather.windDeg = data.wind && data.wind.deg ? getWindDirection(data.wind.deg) : '';
            weather.humidity = data.main.humidity ? data.main.humidity : 0;
            weather.visibility = data.visibility ? Math.round(data.visibility / 1000) : 0; // meters to km
            weather.pressure = data.main.pressure ? data.main.pressure : 0;
            
            // Calculating Dew Point using the Lawrence Approximation Formula
            let tempC = data.main.temp - KELVIN;
            weather.dewPoint = Math.round(tempC - ((100 - weather.humidity) / 5));
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    // Render Main Weather Card Info
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;

    // Render Data into the 6 Metric Blocks safely
    if(windElement) windElement.textContent = `${weather.windSpeed} m/s ${weather.windDeg}`;
    if(humidityElement) humidityElement.textContent = `${weather.humidity}%`;
    if(visibilityElement) visibilityElement.textContent = `${weather.visibility}km`;
    if(pressureElement) pressureElement.textContent = `${weather.pressure} hPa`;
    if(dewPointElement) dewPointElement.textContent = `${weather.dewPoint}°C`;
    if(uvElement) uvElement.textContent = "0 UV"; 
}

// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENT
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});

getWeather();