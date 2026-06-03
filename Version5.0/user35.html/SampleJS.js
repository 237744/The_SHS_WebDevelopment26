// --- FOLLOW ALONG FUNCTIONS ---

// Changes the inner text inside the left yellow zone target container block
function changeText() {
    document.getElementById("textChange").innerHTML = "Thanks for liking my Webpage";
}

// Automatically loops title text changes in the upper application layout tab interface
var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll(){
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);
    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout("Scroll()", 180); 
}
Scroll(); // Starts animation when document finishes parsing layout structures


// --- LAB ACTIVITY ALERT ALGORITHMS ---

// Triggers one quick browser info popup overlay block component view notice
function showAlertOne() {
    alert("This is the first alert message!");
}

// Triggers two separate consecutive popup windows back-to-back in clear order
function showAlertTwo() {
    alert("Alert message 1 of 2");
    alert("Alert message 2 of 2");
}

// Triggers three consecutive window blocks sequentially in a clear order setup
function showAlertThree() {
    alert("Alert message 1 of 3");
    alert("Alert message 2 of 3");
    alert("Alert message 3 of 3");
}