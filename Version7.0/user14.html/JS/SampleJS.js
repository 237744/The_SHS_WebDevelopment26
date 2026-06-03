function changeText() {
    document.getElementById("textChange").innerHTML = "Thanks for liking my Webpage";
}
var space = " ";
var pos = 0;
var msg = "User 14";

function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);

    pos++;

    if (pos > msg.length)
        pos = 0;

    window.setTimeout("Scroll()", 200);
}

Scroll();

function showAlert() {
    alert("Hello");
}

function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}

function resetColor() {
    document.body.style.backgroundColor = "white";
}

function hideText() {
    document.getElementById("hideMe").style.display = "none";
}

function showText() {
    document.getElementById("hideMe").style.display = "block";
}

function changeImage() {
    document.getElementById("Travis").src = "images/Astroworld.png";
}