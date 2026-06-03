/**
 * SkyGuide FPV Flight Weather App
 * This file contains the JavaScript functions and weather API call for the SkyGuide website.
 * Completed: June 2, 2026
 */

// ----------------------------------------------------
// 5 EMBEDDED JAVASCRIPT FUNCTIONS
// ----------------------------------------------------

/**
 * FUNCTION 1: checkFlightSafety (USER CREATED FUNCTION)
 * ----------------------------------------------------
 * Data needed to operate:
 *   - temp: Current temperature in Fahrenheit (Number)
 *   - windSpeed: Current wind speed in mph (Number)
 *   - weatherCode: The Open-Meteo weather code (Number)
 * 
 * How the function operates:
 *   1. It checks if the wind speed is greater than 15 mph. Wind above 15 mph makes it unsafe for FPV drones to fly.
 *   2. It checks if the temperature is below 32°F or above 100°F. Extreme temperatures degrade LiPo battery performance.
 *   3. It checks if the weather code represents any precipitation (rain, snow, drizzle, or storm). Drones are not waterproof.
 *   4. It returns an object containing:
 *      - safe: true if all conditions are met, false otherwise.
 *      - status: A short message ("Safe to Fly", "Caution Advised", "Flight Suspended").
 *      - colorClass: A Tailwind CSS color class (green, yellow, red) for visual display.
 *      - explanation: A detailed message explaining why the status was chosen.
 */
function checkFlightSafety(temp, windSpeed, weatherCode) {
    let safe = true;
    let status = "Safe to Fly";
    let colorClass = "bg-emerald-500 text-white";
    let explanation = "Weather conditions are perfect for FPV flight! Have a safe flight.";

    // Check Wind Speed
    if (windSpeed > 15) {
        safe = false;
        status = "Flight Suspended";
        colorClass = "bg-red-500 text-white";
        explanation = `Wind speed is too high (${windSpeed} mph). Drones may lose control or drift.`;
    } 
    // Check Precipitation (Open-Meteo codes >= 51 represent rain/snow/showers/storms)
    else if (weatherCode >= 51) {
        safe = false;
        status = "Flight Suspended";
        colorClass = "bg-red-500 text-white";
        explanation = "Precipitation detected (Rain/Snow). Water will damage the drone electronics.";
    } 
    // Check Extreme Temperature
    else if (temp < 32 || temp > 100) {
        safe = false;
        status = "Caution Advised";
        colorClass = "bg-amber-500 text-black";
        explanation = `Extreme temperature (${temp}°F). Lithium batteries (LiPos) will drain much faster than usual.`;
    }

    return {
        safe: safe,
        status: status,
        colorClass: colorClass,
        explanation: explanation
    };
}

/**
 * FUNCTION 2: getWeatherDescription
 * ---------------------------------
 * Data needed: Open-Meteo weather code (Number)
 * How it operates: Maps the numeric weather code from the API to a human-readable text string.
 */
function getWeatherDescription(code) {
    if (code === 0) return "Clear Sky";
    if (code === 1 || code === 2 || code === 3) return "Partly Cloudy";
    if (code === 45 || code === 48) return "Foggy";
    if (code >= 51 && code <= 55) return "Light Drizzle/Rain";
    if (code >= 61 && code <= 65) return "Rainy";
    if (code >= 71 && code <= 77) return "Snowy";
    if (code >= 80 && code <= 82) return "Rain Showers";
    if (code >= 95 && code <= 99) return "Thunderstorm";
    return "Unknown Weather Code";
}

/**
 * FUNCTION 3: fToC
 * ---------------
 * Data needed: tempF (Number, temperature in Fahrenheit)
 * How it operates: Converts a Fahrenheit temperature to Celsius.
 */
function fToC(tempF) {
    return Math.round((tempF - 32) * 5 / 9);
}

/**
 * FUNCTION 4: calculateWindStrengthText
 * -------------------------------------
 * Data needed: windSpeed in mph (Number)
 * How it operates: Provides flight-specific wind assessment based on speed.
 */
function calculateWindStrengthText(windSpeed) {
    if (windSpeed < 5) {
        return "Gentle Breeze (Ideal for tiny whoops and micro drones)";
    } else if (windSpeed <= 15) {
        return "Moderate Wind (Suitable for 5-inch freestyle/racing drones)";
    } else {
        return "High Wind (DANGEROUS! Keep drones grounded)";
    }
}

/**
 * FUNCTION 5: calculateMaxFlightRange
 * -----------------------------------
 * Data needed: capacityMAh (Number), avgAmpDraw (Number), speedMph (Number)
 * How it operates: Estimates the flight range in miles using the 80% battery discharge rule.
 */
function calculateMaxFlightRange(capacityMAh, avgAmpDraw, speedMph) {
    // 80% discharge rule to preserve battery life
    let usableCapacityAh = (capacityMAh * 0.8) / 1000;
    // Flight time in hours = Ah / Amps
    let flightTimeHours = usableCapacityAh / avgAmpDraw;
    // Range in miles = speed * time
    let rangeMiles = speedMph * flightTimeHours;
    return rangeMiles.toFixed(2); // returns range rounded to 2 decimal places
}


// ----------------------------------------------------
// API CALL INTEGRATION (OPEN-METEO API)
// ----------------------------------------------------

// Latitude and Longitude for Shakopee, Minnesota
const LATITUDE = 44.7983;
const LONGITUDE = -93.5269;

// Open-Meteo Forecast URL for current weather in Imperial units (Fahrenheit & mph)
const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph`;

// Run weather fetch once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    fetchWeather();
});

function fetchWeather() {
    const weatherStatusText = document.getElementById("weather-status-text");
    const weatherDataDisplay = document.getElementById("weather-data-display");

    if (!weatherStatusText) return; // Only execute if the weather elements are on the current page

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            if (data && data.current_weather) {
                const current = data.current_weather;
                const temp = Math.round(current.temperature);
                const wind = Math.round(current.windspeed);
                const code = current.weathercode;
                
                // Get weather text and safety check results
                const condition = getWeatherDescription(code);
                const safety = checkFlightSafety(temp, wind, code);
                const windTip = calculateWindStrengthText(wind);
                const tempC = fToC(temp);

                // Update the DOM with the Weather data
                document.getElementById("live-temp").innerText = `${temp}°F (${tempC}°C)`;
                document.getElementById("live-wind").innerText = `${wind} mph`;
                document.getElementById("live-condition").innerText = condition;
                
                // Display the calculated flight safety check results
                const badge = document.getElementById("safety-badge");
                badge.innerText = safety.status;
                badge.className = `px-4 py-2 rounded-lg font-bold text-sm tracking-wide inline-block ${safety.colorClass}`;
                
                document.getElementById("safety-explanation").innerText = safety.explanation;
                document.getElementById("wind-tip").innerText = windTip;
                
                // Hide loading message and show weather block
                weatherStatusText.style.display = "none";
                weatherDataDisplay.style.display = "block";
            } else {
                weatherStatusText.innerText = "Error: Invalid weather data received.";
            }
        })
        .catch(error => {
            console.error("Failed to fetch weather data:", error);
            weatherStatusText.innerText = "Failed to load live weather data. Please check your internet connection.";
        });
}


// ----------------------------------------------------
// INTERACTIVE DOM BINDINGS FOR SAFETY CALCULATORS
// ----------------------------------------------------

function runWeightCheck() {
    const weightInput = document.getElementById("drone-weight");
    const resultDiv = document.getElementById("weight-result");
    if (!weightInput || !resultDiv) return;
    
    const weight = parseFloat(weightInput.value);
    if (isNaN(weight) || weight <= 0) {
        resultDiv.innerHTML = "Enter a valid weight in grams.";
        resultDiv.className = "p-4 rounded-lg bg-surface-container-low border border-outline-variant text-sm text-on-surface-variant";
        return;
    }
    
    // Call checkFlightSafety logic or apply category check
    let registrationMessage = "";
    if (weight < 250) {
        registrationMessage = "<strong>FAA Registry:</strong> NOT REQUIRED under recreational guidelines. Category 1 Drone Rules apply (no Remote ID needed unless flying over people).";
        resultDiv.className = "p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm";
    } else {
        registrationMessage = "<strong>FAA Registry:</strong> REQUIRED! You must register this drone with the FAA ($5 for 3 years), display your FAA registration number, take the recreational TRUST test, and equip a Remote ID module for flight in public airspace.";
        resultDiv.className = "p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm";
    }
    
    resultDiv.innerHTML = `${registrationMessage}<br/><br/>Takeoff Weight: ${weight}g.`;
}

function runChargeCalc() {
    const capacityInput = document.getElementById("battery-capacity");
    const rateInput = document.getElementById("charge-rate");
    const resultDiv = document.getElementById("charge-result");
    if (!capacityInput || !rateInput || !resultDiv) return;
    
    const capacity = parseFloat(capacityInput.value);
    const rate = parseFloat(rateInput.value);
    if (isNaN(capacity) || capacity <= 0 || isNaN(rate) || rate <= 0) {
        resultDiv.innerHTML = "Enter valid capacity (mAh) and charge rate (C).";
        resultDiv.className = "p-4 rounded-lg bg-surface-container-low border border-outline-variant text-sm text-on-surface-variant";
        return;
    }
    
    // Call fToC / math helpers
    const amps = (capacity / 1000 * rate).toFixed(2);
    const timeMins = Math.round(60 / rate);
    
    resultDiv.innerHTML = `<strong>Required Charger Output:</strong> ${amps} Amps<br/><strong>Estimated Charge Time:</strong> ~${timeMins} minutes (at ${rate}C charge rate).`;
    resultDiv.className = "p-4 rounded-lg bg-sky-50 border border-sky-200 text-sky-800 text-sm";
}

function runRangeCalc() {
    const capacityInput = document.getElementById("range-capacity");
    const currentInput = document.getElementById("avg-current");
    const speedInput = document.getElementById("flight-speed");
    const resultDiv = document.getElementById("range-result");
    if (!capacityInput || !currentInput || !speedInput || !resultDiv) return;
    
    const capacity = parseFloat(capacityInput.value);
    const current = parseFloat(currentInput.value);
    const speed = parseFloat(speedInput.value);
    
    if (isNaN(capacity) || capacity <= 0 || isNaN(current) || current <= 0 || isNaN(speed) || speed <= 0) {
        resultDiv.innerHTML = "Enter valid specifications.";
        resultDiv.className = "p-4 rounded-lg bg-surface-container-low border border-outline-variant text-sm text-on-surface-variant";
        return;
    }
    
    const range = calculateMaxFlightRange(capacity, current, speed);
    const timeMins = ((capacity * 0.8 / 1000) / current * 60).toFixed(1);
    
    resultDiv.innerHTML = `<strong>Estimated Flight Time:</strong> ${timeMins} minutes (using 80% discharge limit)<br/><strong>Estimated Flight Range:</strong> ${range} miles at ${speed} mph.`;
    resultDiv.className = "p-4 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-800 text-sm";
}

function runWindCheck() {
    const windInput = document.getElementById("wind-checker-speed");
    const resultDiv = document.getElementById("wind-result");
    if (!windInput || !resultDiv) return;
    
    const wind = parseFloat(windInput.value);
    if (isNaN(wind) || wind < 0) {
        resultDiv.innerHTML = "Enter a valid wind speed in mph.";
        resultDiv.className = "p-4 rounded-lg bg-surface-container-low border border-outline-variant text-sm text-on-surface-variant";
        return;
    }
    
    const assessment = calculateWindStrengthText(wind);
    
    let alertClass = "";
    if (wind < 5) {
        alertClass = "bg-emerald-50 border-emerald-200 text-emerald-800";
    } else if (wind <= 15) {
        alertClass = "bg-amber-50 border-amber-200 text-amber-800";
    } else {
        alertClass = "bg-red-50 border-red-200 text-red-800";
    }
    
    resultDiv.innerHTML = `<strong>Wind Assessment:</strong> ${assessment}<br/>Wind Speed: ${wind} mph.`;
    resultDiv.className = `p-4 rounded-lg border ${alertClass} text-sm`;
}
