
// Feature 1
function changeText() {

    var x = document.getElementById("textChange");

    if (x) {
        x.innerHTML = "Thanks for liking my webpage ^-^ !!!";
        x.className = "bigText";
    }
}

// Feature 2
function showDate() {

    document.getElementById("date").innerHTML = Date();
}

// Feature 3
function changeColor() {

    document.getElementById("colorText").style.color = "blue";
}

// Feature 4
function changeFont() {

    document.getElementById("fontText").style.fontSize = "50px";
}

// Feature 5
function hideText() {

    document.getElementById("hideText").style.display = "none";
}

// Feature 6
function showAlert() {

    alert("Hello! This is an alert message!");
}

// Feature 7
var count = 0;

function increaseCounter() {

    count++;

    document.getElementById("counter").innerHTML = count;
}

// Feature 8
function changeImage() {

    document.getElementById("image").width = 300;
}

// Scrolling browser title
var space = " ";
var pos = 0;
var msg = "User 19 JavaScript Page";

function Scroll() {

    document.title =
        msg.substring(pos, msg.length) +
        space +
        msg.substring(0, pos);

    pos++;

    if (pos > msg.length)
        pos = 0;

    window.setTimeout("Scroll()", 200);
}

Scroll();