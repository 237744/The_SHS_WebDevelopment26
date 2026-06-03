window.addEventListener('DOMContentLoaded', function() {
    const displayZone = document.getElementById('weatherDisplay');
    if (displayZone) {
        executeWeatherPipeline("Shakopee");
    }
});

const weatherBtn = document.getElementById('getWeatherBtn');
if (weatherBtn) { 
    weatherBtn.addEventListener('click', function() {
        const cityInput = document.getElementById('cityInput').value.trim();
        if (cityInput === "") {
            document.getElementById('weatherDisplay').innerHTML = `<p class="text-warning mb-0">Please enter a destination name first!</p>`;
            return;
        }
        executeWeatherPipeline(cityInput);
    });
}


       document.getElementById('getWeatherBtn').addEventListener('click', function() {
            const cityInput = document.getElementById('cityInput').value.trim();
            const displayZone = document.getElementById('weatherDisplay');
            
            if (cityInput === "") {
                displayZone.innerHTML = `<p class="text-warning mb-0">Please enter a destination name first!</p>`;
                return;
            }
            
            displayZone.innerHTML = `<p class="text-white-50 mb-0">Locating coordinates via satellite grid...</p>`;
            
            const geocodeURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityInput)}&count=1&language=en&format=json`;
            
            fetch(geocodeURL)
                .then(response => {
                    if (!response.ok) throw new Error("Lookup error.");
                    return response.json();
                })
                .then(geoData => {
                    if (!geoData.results || geoData.results.length === 0) {
                        displayZone.innerHTML = `<p class="text-danger mb-0">Location not found. Please check spelling!</p>`;
                        return;
                    }
                    
                    const locationMatch = geoData.results[0];
                    const lat = locationMatch.latitude;
                    const lon = locationMatch.longitude;
                    const displayName = `${locationMatch.name}${locationMatch.admin1 ? ', ' + locationMatch.admin1 : ''}`;
                    
                    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
                    
                    return fetch(weatherURL)
                        .then(response => {
                            if (!response.ok) throw new Error("Weather metrics streaming error.");
                            return response.json();
                        })
                        .then(weatherData => {
                            const tempCelsius = weatherData.current_weather.temperature;
                            const tempFahrenheit = Math.round((tempCelsius * 9/5) + 32);
                            const windSpeed = weatherData.current_weather.windspeed;
                            const weatherCode = weatherData.current_weather.weathercode;
                            
                            const currentEmoji = getWeatherEmoji(weatherCode, tempFahrenheit);
                            const dynamicAdvice = determinePackingAdvice(tempFahrenheit);
                            
                            displayZone.innerHTML = `
                                <div class="py-2">
                                    <div class="mb-2" style="font-size: 3rem; line-height: 1;">${currentEmoji}</div>
                                    <h4 class="text-white mb-1 text-uppercase" style="letter-spacing: 1px; font-size: 1.1rem;">${displayName}</h4>
                                    <p class="small text-white-50 mb-3" style="font-size: 0.75rem;">Coordinates: ${lat.toFixed(4)}°N, ${lon.toFixed(4)}°E</p>
                                    <p class="display-6 fw-bold text-white mb-2">${tempFahrenheit}°F</p>
                                    
                                    <div class="d-flex justify-content-center align-items-center gap-2 mb-2 text-white-50" style="font-size: 0.9rem;">
                                        <span>Wind Speed: <span class="text-white">${windSpeed} km/h</span></span>
                                        <span class="badge bg-secondary px-2 py-1" style="font-size: 0.7rem; border-radius: 4px; background-color: #3d3c3d !important;">Calm</span>
                                    </div>
                                    
                                    <div class="p-3 mt-3 text-start bg-dark border border-secondary mb-4" style="border-radius: 0px;">
                                        <h6 class="text-warning text-uppercase mb-1" style="font-size: 0.8rem; letter-spacing: 1px;">Smart Packing Suggestion:</h6>
                                        <p class="small text-white mb-0" style="line-height: 1.4;">${dynamicAdvice}</p>
                                    </div>

                                    <div class="mt-3 text-center" style="font-family: sans-serif; font-size: 0.85rem; color: #2e7d32; letter-spacing: 0.3px;">
                                        <span style="color: #4caf50; margin-right: 4px;">●</span> Live Global Telemetry Synchronized
                                    </div>
                                </div>
                            `;
                        });
                })
                .catch(error => {
                    console.warn(error);
                    displayZone.innerHTML = `<p class="text-danger mb-0">Error loading weather metrics.</p>`;
                });
        });

        function getWeatherEmoji(code, tempFahrenheit) {
            if (tempFahrenheit <= 32) {
                if (code >= 1 && code <= 3) return "🌨️";
                return "❄️";
            }
            if (code === 0) return "☀️"; 
            if (code >= 1 && code <= 3) return "☁️"; 
            if (code === 45 || code === 48) return "🌫️"; 
            if (code >= 51 && code <= 55) return "🌦️"; 
            if (code >= 61 && code <= 65) return "🌧️"; 
            if (code >= 71 && code <= 77) return "❄️"; 
            if (code >= 80 && code <= 82) return "🌧️"; 
            if (code >= 85 || code === 86) return "❄️"; 
            if (code >= 95) return "⛈️"; 
            return "☁️"; 
        }

        function determinePackingAdvice(fahrenheitValue) {
            if (fahrenheitValue < 60) {
                return "Chilly conditions expected. We highly recommend packing a heavy jacket, thermal layers, and warm boots for this itinerary.";
            } else if (fahrenheitValue > 80) {
                return "Warm or tropical climate detected! Bring breathable linen clothes, light activewear, UV sunglasses, and plenty of sunscreen.";
            } else {
                return "Mild, comfortable weather conditions. Perfect travel climate! Pack a light sweater or cardigans alongside comfortable walking shoes.";
            }
        }