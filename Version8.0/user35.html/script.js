// Your activated OpenWeatherMap API Key
const apiKey = '8b75bdc782b45cb8fc55e855480431d2'; 

// Selecting UI elements from the HTML
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherBox = document.getElementById('weather-box');
const errorMsg = document.getElementById('error-message');

// Event listener for when the search button is clicked
searchBtn.addEventListener('click', () => {
    getWeather(cityInput.value.trim());
});

// Event listener for when the user presses the "Enter" key inside the input box
cityInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getWeather(cityInput.value.trim());
    }
});

// Main function to fetch data from the Weather API
function getWeather(city) {
    // If the input is empty, stop the function
    if (!city) return;

    // URL to fetch data in Metric units (Celsius, meters/second)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            // If the server returns an error (like a 404), throw an error to the catch block
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // Success: Hide error messages and reveal the weather display box
            errorMsg.classList.add('hidden');
            weatherBox.classList.remove('hidden');

            // Updating core elements
            document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}°C`;
            document.getElementById('description').innerText = data.weather[0].description;

            // ==========================================
            // EXTRA FEATURES IMPLEMENTED (FOR THE ASSIGNMENT):
            // ==========================================
            
            // Feature 1: Dynamic Weather Condition Icons
            const iconCode = data.weather[0].icon;
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            // Feature 2: "Feels Like" Temperature Conversion
            document.getElementById('feels-like').innerText = `${Math.round(data.main.feels_like)}°C`;

            // Feature 3: Live Humidity Percentages
            document.getElementById('humidity').innerText = `${data.main.humidity}%`;

            // Feature 4: Wind Speed Tracking
            document.getElementById('wind').innerText = `${data.wind.speed} m/s`;

            // Feature 5: Barometric/Atmospheric Pressure
            document.getElementById('pressure').innerText = `${data.main.pressure} hPa`;
        })
        .catch(err => {
            // Error Handling: If city isn't found, hide the weather box and show the error text
            weatherBox.classList.add('hidden');
            errorMsg.classList.remove('hidden');
            console.error('Error fetching weather data:', err);
        });
}