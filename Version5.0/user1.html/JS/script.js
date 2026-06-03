function changeText() {

    document.getElementById("textChange").innerHTML =
    "Thanks for liking my webpage!";

}

function bgChange() {

    document.body.style.backgroundColor =
    "lightblue";

}

function showAlert() {

    alert("Welcome to my JavaScript page!");

}

function bigText() {

    document.getElementById("textChange").style.fontSize =
    "40px";

}

function hideText() {

    document.getElementById("textChange").style.display =
    "none";

}

function showTime() {

    document.getElementById("time").innerHTML =
    Date();

}

function changeColor() {

    document.getElementById("textChange").style.color =
    "red";

}

function showMessage() {

    document.getElementById("secret").innerHTML =
    "JavaScript is awesome!";

}

var space = " ";
var pos = 0;
var msg = "Jamel's JavaScript Page";

function Scroll() {

    document.title =
    msg.substring(pos, msg.length)
    + space +
    msg.substring(0, pos);

    pos++;

    if (pos > msg.length)
        pos = 0;

    window.setTimeout("Scroll()", 150);

}

Scroll();