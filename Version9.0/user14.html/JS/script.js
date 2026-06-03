function updateYear() {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function showRandomFact() {
    const facts = [
        "Tornadoes can form in just a couple minutes",
        "The U.S gets more tornadoes than any other country.",
        "A tornado is usually visible because of the funnel and flying things.",
        "Tornadoes usually happen in spring and summer.",
        "Some tornadoes can be over a mile wide."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const factElement = document.getElementById("randomFact");

    if (factElement) {
        factElement.textContent = facts[randomIndex];
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function resetTheme() {
    document.body.classList.remove("dark-mode");
}

function tornadoRisk(windSpeed, pressure, humidity) {
    if (windSpeed >= 40 && pressure <= 1008) {
        return "High";
    }

    if (windSpeed >= 25 || humidity >= 70) {
        return "Moderate";
    }

    return "Low";
}

async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const weatherResult = document.getElementById("weatherResult");
    const riskResult = document.getElementById("riskResult");

    if (!cityInput || !weatherResult || !riskResult) {
        return;
    }

    const city = cityInput.value.trim();

    if (city === "") {
        weatherResult.innerHTML = "<h2 class='h4'>Please enter a city.</h2>";
        riskResult.innerHTML = "<h2 class='h4'>Tornado Risk</h2><p class='mb-0'>Type a city first.</p>";
        return;
    }

    const apiKey = "f1255383abcdce789f3ec2039807d2d7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            weatherResult.innerHTML = `<h2 class='h4'>Error</h2><p class='mb-0'>${data.message}</p>`;
            riskResult.innerHTML = "<h2 class='h4'>Tornado Risk</h2><p class='mb-0'>No risk estimate available.</p>";
            return;
        }

        const temperature = Math.round(data.main.temp);
        const humidity = data.main.humidity;
        const pressure = data.main.pressure;
        const windSpeed = Math.round(data.wind.speed);
        const description = data.weather[0].description;

        const risk = tornadoRisk(windSpeed, pressure, humidity);

        weatherResult.innerHTML = `
            <h2 class="h4">${data.name}</h2>
            <p class="mb-2">Conditions: ${description}</p>
            <p class="mb-2">Temperature: ${temperature}°F</p>
            <p class="mb-2">Humidity: ${humidity}%</p>
            <p class="mb-2">Pressure: ${pressure} hPa</p>
            <p class="mb-0">Wind Speed: ${windSpeed} mph</p>
        `;

        riskResult.innerHTML = `
            <h2 class="h4">Tornado Risk</h2>
            <p class="mb-0 fw-semibold">${risk}</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = "<h2 class='h4'>Could not load weather data.</h2><p class='mb-0'>Check your API key and try again.</p>";
        riskResult.innerHTML = "<h2 class='h4'>Tornado Risk</h2><p class='mb-0'>No risk estimate available.</p>";
    }
}

updateYear();