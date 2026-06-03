function changeText() {
 document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
}

var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();

// Assignment Features (8 Items Total)
// Source/Reference: Code generated with Gemini AI Assistant help
// ==========================================

// 1. Live Date & Time
function showDateTime() {
    var current = new Date();
    document.getElementById("dateTimeDisplay").innerHTML = current.toLocaleString();
}

// 2. Box Color Changer
function changeBoxColor(buttonElement) {
    var colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ff99ff", "#99ffff"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    buttonElement.parentNode.style.backgroundColor = randomColor;
}

// 3. Character Counter
function countCharacters() {
    var inputText = document.getElementById("counterInput").value;
    document.getElementById("counterDisplay").innerHTML = "Characters: " + inputText.length;
}

// 4. Name Greeting Popup
function popupGreeting() {
    var name = document.getElementById("userNameInput").value;
    if(name === "") {
        alert("Hello visitor! Please type a name next time.");
    } else {
        alert("Welcome to my Web Development page, " + name + "!");
    }
}

// 5. Hover Box Changes Text/Color (Mouse Over)
function hoverIn() {
    var element = document.getElementById("hoverBox");
    element.innerHTML = "GOODBYE";
    element.style.backgroundColor = "red";
}

// Hover Box Reverts (Mouse Out)
function hoverOut() {
    var element = document.getElementById("hoverBox");
    element.innerHTML = "HELLO";
    element.style.backgroundColor = "black";
}

// 6. Font Size Modifier
function changeFontSize(size) {
    document.getElementById("zoomText").style.fontSize = size + "px";
}

// 7. Toggle Display Visibility (Show / Hide)
function toggleSecretParagraph() {
    var element = document.getElementById("secretText");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// 8. Dynamic Number Guessing Game 
function checkGuess() {
    var userNum = parseInt(document.getElementById("userGuess").value);
    var luckyNum = Math.floor(Math.random() * 5) + 1; // Generates random number 1-5
    var resultDisplay = document.getElementById("gameResult");
    
    if (isNaN(userNum) || userNum < 1 || userNum > 5) {
        resultDisplay.style.color = "black";
        resultDisplay.innerHTML = "Please enter a valid number from 1 to 5.";
    } else if (userNum === luckyNum) {
        resultDisplay.style.color = "green";
        resultDisplay.innerHTML = "🎉 Correct! The number was " + luckyNum + "!";
    } else {
        resultDisplay.style.color = "red";
        resultDisplay.innerHTML = "❌ Wrong! The number was " + luckyNum + ". Try again!";
    }
}