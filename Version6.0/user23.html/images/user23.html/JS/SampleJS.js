function calculateDailyAllowance() {
    
    const budgetInput = document.getElementById('totalBudget').value;
    const daysInput = document.getElementById('tripDays').value;
    const resultDiv = document.getElementById('budgetResult');
    const totalBudget = parseFloat(budgetInput);
    const tripDays = parseInt(daysInput);

    
    if (isNaN(totalBudget) || isNaN(tripDays) || totalBudget <= 0 || tripDays <= 0) {
        resultDiv.className = "mt-4 p-3 rounded text-center alert alert-danger";
        resultDiv.innerText = "⚠️ Please enter valid numbers for budget and days.";
        resultDiv.classList.remove('d-none');
        return;
    }

    const dailyAllowance = totalBudget / tripDays;
    resultDiv.classList.remove('d-none');
    

    if (dailyAllowance < 50) {
        resultDiv.className = "mt-4 p-3 rounded text-center alert alert-warning";
        resultDiv.innerHTML = `Daily Allowance: <strong>$${dailyAllowance.toFixed(2)}</strong><br>⚠️ Budget is lean! Consider cheaper lodging or shorter stays.`;
    } else {
        resultDiv.className = "mt-4 p-3 rounded text-center alert alert-success";
        resultDiv.innerHTML = `Daily Allowance: <strong>$${dailyAllowance.toFixed(2)}</strong><br>✅ Great profile! Plenty for local transit and travel logistics.`;
    }
}

            if (!isFound) {
                const cleanInput = document.getElementById('cityInput').value.trim();
                 
                document.getElementById('invalidLocationName').innerText = `"${cleanInput}"`;
              
                const myModal = new bootstrap.Modal(document.getElementById('errorModal'));
                myModal.show();
                   
                displayZone.innerHTML = `<p class="mb-0 small italic">Live climate metric updates will populate here...</p>`;
                return; 
            }
    const tempCelsius = weatherData.current_weather.temperature;
    const tempFahrenheit = Math.round((tempCelsius * 9/5) + 32);

    // Upgraded function that checks both condition code AND live temperature
function getWeatherEmoji(code, tempFahrenheit) {
    // Overriding fallback: If it's bitterly freezing, prioritize a winter climate icon
    if (tempFahrenheit <= 32) {
        if (code >= 1 && code <= 3) return "🌨️"; // Flurries / Overcast Ice Clouds
        return "❄️"; // Clear but freezing ice conditions
    }

    // Standard temperature mappings (Above 32°F)
    if (code === 0) return "☀️"; // Clear sky
    if (code >= 1 && code <= 3) return "☁️"; // Mainly clear, partly cloudy, overcast
    if (code === 45 || code === 48) return "🌫️"; // Fog
    if (code >= 51 && code <= 55) return "🌦️"; // Drizzle
    if (code >= 61 && code <= 65) return "🌧️"; // Rain
    if (code >= 71 && code <= 77) return "❄️"; // Regular Snow fall
    if (code >= 80 && code <= 82) return "🌧️"; // Rain showers
    if (code >= 85 || code === 86) return "❄️"; // Snow showers
    if (code >= 95) return "⛈️"; // Thunderstorm
    return "☁️"; 
}
    const currentEmoji = getWeatherEmoji(weatherCode, tempFahrenheit);
    
   