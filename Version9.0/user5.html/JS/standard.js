// ========================================================
// FUNCTION 1: The API Call (Fetches a Random Joke)
// ========================================================
function getParkJoke() {
    const outputBox = document.getElementById("api-output");
    if (!outputBox) return; // Keeps code from breaking if not on the home page

    outputBox.innerHTML = "<em>Thinking of a funny joke...</em>";

    // Calling the public Random Joke API
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            // Displays the joke setup and punchline dynamically in the blue box
            outputBox.innerHTML = `<strong>${data.setup}</strong> <br><br> ${data.punchline} 🤣`;
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            // Backup joke in case the internet or API acts up during grading
            outputBox.innerHTML = "<strong>Why did the rollercoaster break?</strong> <br><br> Because it had too many loops! 🎢";
        });
}


function toggleDarkMode() {
    // Adds or removes the "dark-mode" class to the body tag
    document.body.classList.toggle("dark-mode");
}

function submitReview() {
    // 1. Data IN: Grabs the text typed by the user in the input box
    const rideInput = document.getElementById("rideInput");
    const rideName = rideInput ? rideInput.value.trim() : "";
    const messageBox = document.getElementById("review-message");
    
    if (!messageBox) return;


    if (rideName === "") {
        messageBox.innerHTML = "❌ Please type a rollercoaster name first!";
        messageBox.style.color = "#dc3545"; // Changes text color to red
    } else {
        messageBox.innerHTML = "✅ Awesome! " + rideName + " is an incredible ride. Your review was saved!";
        messageBox.style.color = "#198754"; // Changes text color to green
        
        // Clears out the text input box so it is ready for another review
        if (rideInput) rideInput.value = "";
    }
}
function filterParkZones(category, clickedButton) {
    // Get all the cards from the page
    var cards = document.getElementsByClassName("park-zone-card");
    
    // Go through every card and show or hide it
    for (var i = 0; i < cards.length; i++) {
        if (category === "all") {
            cards[i].style.display = "block"; // Show everything
        } else if (cards[i].classList.contains(category)) {
            cards[i].style.display = "block"; // Show matching ones
        } else {
            cards[i].style.display = "none";  // Hide the others
        }
    }
    
    // This part fixes the button colors when clicked
    var buttons = document.getElementsByClassName("filter-btn");
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("active");
    }
    clickedButton.classList.add("active");
}