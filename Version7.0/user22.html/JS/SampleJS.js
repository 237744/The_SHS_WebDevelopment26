// Version 7.0
// Name: User 22
// JavaScript Features for Web Portfolio

// --- Base Script Features (1.7b) ---

// 1. changeText - Changes text content and applies dynamic styling class
function changeText() {
    var element = document.getElementById("textChange");
    if (element) {
        element.innerHTML = "Thanks for liking my Webpage!";
        element.classList.add("highlight-text");
    }
}

// 2. Scroll Title Bar - Scroll tab text in browser dynamically
var space = " ";
var pos = 0;
var msg = "User 22 - Web Portfolio ";

function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);
    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout(Scroll, 150); // Set to 150ms to prevent browser lag while keeping animation smooth
}
Scroll(); // Call scroll immediately when page loads

// --- 8 JavaScript DOM Features (Activity 1.7b) ---

// Feature 1: Hover Image Change
function hoverImage(element, isHover) {
    if (isHover) {
        element.src = "images/hover_card.png";
    } else {
        element.src = "images/default_card.png";
    }
}

// Feature 2: Uppercase Converter
function convertToUpperCase() {
    var input = document.getElementById("upperInput");
    if (input) {
        input.value = input.value.toUpperCase();
    }
}

// Feature 3: Dynamic Color Picker
function changeDivBg(color) {
    var div = document.getElementById("colorDiv");
    if (div) {
        div.style.backgroundColor = color;
    }
}

// Feature 4: Live Digital Clock
function updateClock() {
    var clockElement = document.getElementById("digitalClock");
    if (clockElement) {
        var now = new Date();
        clockElement.innerText = now.toLocaleTimeString();
    }
}
setInterval(updateClock, 1000); // Trigger clock update every second

// Feature 5: Show/Hide Element
function toggleDetails() {
    var element = document.getElementById("collapseDetails");
    var btn = document.getElementById("toggleBtn");
    if (element && btn) {
        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "block";
            btn.innerText = "Hide Description";
        } else {
            element.style.display = "none";
            btn.innerText = "Show Description";
        }
    }
}

// Feature 6: Character Counter
function countChars() {
    var textarea = document.getElementById("countText");
    var counter = document.getElementById("charCount");
    var maxLength = 100;
    if (textarea && counter) {
        var remaining = maxLength - textarea.value.length;
        counter.innerText = remaining + " characters left";
        if (remaining < 20) {
            counter.className = "text-danger fw-bold";
        } else {
            counter.className = "text-muted";
        }
    }
}

// Feature 7: Interactive Calculator
function calculate() {
    var num1Input = document.getElementById("calcNum1");
    var num2Input = document.getElementById("calcNum2");
    var opSelect = document.getElementById("calcOp");
    var resElement = document.getElementById("calcResult");
    
    if (num1Input && num2Input && opSelect && resElement) {
        var num1 = parseFloat(num1Input.value) || 0;
        var num2 = parseFloat(num2Input.value) || 0;
        var op = opSelect.value;
        var result = 0;
        
        switch (op) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num2 !== 0 ? (num1 / num2) : "Err: /0"; break;
        }
        resElement.innerText = typeof result === "number" ? result.toFixed(2) : result;
    }
}

// Feature 8: Random Quote Generator
var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Be the change that you wish to see in the world. - Mahatma Gandhi"
];

function generateQuote() {
    var quoteElement = document.getElementById("quoteText");
    if (quoteElement) {
        var index = Math.floor(Math.random() * quotes.length);
        quoteElement.innerText = quotes[index];
    }
}
