function changeText() {
    document.getElementById("textChange").innerHTML =
        "Thanks for liking my webpage!";

    document.getElementById("textChange").classList.add("highlight");
}

var space = " ";
var pos = 0;
var msg = "User 15";

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


function changeTexts() {
    document.getElementById("text1").innerHTML = "Text has been changed";
}

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

function showAlert() {
    alert("Go Sabers!");
}

function changeImage() {
    document.getElementById("myImage").src = "images/cat2.jpg";
}


function hideText() {
    document.getElementById("hideMe").style.display = "none";
}

function showTime() {
    document.getElementById("time").innerHTML =
        new Date();
}

function makeBig() {
    document.getElementById("bigText").style.fontSize = "40px";
}


function hoverText(element) {
    element.innerHTML = "You're hovering!";
}

function normalText(element) {
    element.innerHTML = "Hover over me";
}