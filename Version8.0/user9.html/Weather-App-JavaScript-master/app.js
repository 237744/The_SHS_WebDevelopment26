// || API KEY || PUT YOUR API KEY HERE!!!!!!!!!

const key = "06c3169478896fd243a8fb79dd84545b";

// Since the GeoLocation is not avaliable we can hard code the coordinates
// Shakopee 44.7974' -93.5273'
var latitude = "44.7974";
var longitude = "-93.5273";

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
const formElement = document.getElementById("weather-form");
const latInput = document.getElementById("input-lat");
const lonInput = document.getElementById("input-lon");
const timeElement = document.getElementById("local-time");
const tzElement = document.getElementById("timezone-offset");
const humidityElement = document.querySelector(".humidity span");
const windElement = document.querySelector(".wind span");
const pressureElement = document.querySelector(".pressure span");
// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;

formElement.addEventListener("submit", function(e) {
    e.preventDefault(); 
    latitude = latInput.value;
    longitude = lonInput.value;
    getWeather();
});

// GET WEATHER FROM API PROVIDER
function getWeather(){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.timezoneOffset = data.timezone; 
            weather.localTime = calculateLocalTime(data.timezone);
            weather.humidity = data.main.humidity;
            weather.windSpeed = data.wind.speed;
            weather.pressure = data.main.pressure;
        })
        .then(function(){
            displayWeather();
        });
}

function calculateLocalTime(offsetSeconds) {
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (1000 * offsetSeconds));
    return nd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    timeElement.innerHTML = `Local Time: ${weather.localTime}`;
    tzElement.innerHTML = `UTC Offset: ${weather.timezoneOffset / 3600} hours`;
    humidityElement.innerHTML = weather.humidity;
    windElement.innerHTML = weather.windSpeed;
    pressureElement.innerHTML = weather.pressure;
}

// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
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
