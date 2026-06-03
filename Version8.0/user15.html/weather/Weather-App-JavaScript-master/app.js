// || API KEY || PUT YOUR API KEY HERE!!!!!!!!!

const key = "2be86bf60a54556a79a0a7e78b0ba04f";

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

// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;

// GET WEATHER FROM API PROVIDER

notificationElement.innerHTML = "Getting weather...";

function getWeather(){

    // changed http -> https
    let api =
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })

        .then(function(data){

            weather.feelsLike = Math.floor(data.main.feels_like - KELVIN);

            console.log(data);

            weather.temperature.value =
            Math.floor(data.main.temp - KELVIN);

            weather.description =
            data.weather[0].description;

            weather.iconId =
            data.weather[0].icon;

            weather.city =
            data.name;

            weather.country =
            data.sys.country;
        })

        .then(function(){
            displayWeather();
        })

        .catch(function(error){
            notificationElement.innerHTML = "Error loading weather data";
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){

    // changed icon source to OpenWeatherMap icons
    iconElement.innerHTML =
    `<img src="https://openweathermap.org/img/wn/${weather.iconId}@2x.png"/>`;

    tempElement.innerHTML =
    `${weather.temperature.value}°<span>C</span>`;

    descElement.innerHTML = weather.description.toUpperCase();

    descElement.innerHTML =
    weather.description.toUpperCase() + " (Feels like " + weather.feelsLike + "°C)";

    locationElement.innerHTML =
    `${weather.city}, ${weather.country}`;
}

// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENT
tempElement.addEventListener("click", function(){

    if(weather.temperature.value === undefined) return;

    if(weather.temperature.unit == "celsius"){

        let fahrenheit =
        celsiusToFahrenheit(weather.temperature.value);

        fahrenheit = Math.floor(fahrenheit);

        tempElement.innerHTML =
        `${fahrenheit}°<span>F</span>`;

        weather.temperature.unit = "fahrenheit";

    }else{

        tempElement.innerHTML =
        `${weather.temperature.value}°<span>C</span>`;

        weather.temperature.unit = "celsius"
    }
});

getWeather();