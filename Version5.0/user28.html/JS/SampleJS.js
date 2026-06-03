function changeText() {
    document.getElementById("textChange").innerHTML =
        "Thanks for liking my webpage!";
}

function showDate() {
    document.getElementById("date").innerHTML =
        new Date();
}

function randomNumber() {
    document.getElementById("randomNumber").innerHTML =
        Math.floor(Math.random() * 100);
}

function changeColor() {
    document.getElementById("colorText").style.color =
        "blue";
}

function changeImage() {
    document.getElementById("image").src =
        "https://picsum.photos/150";
}

var count = 0;

function increaseCounter() {
    count++;
    document.getElementById("counter").innerHTML =
        count;
}

function hideText() {
    document.getElementById("secretText").style.display =
        "none";
}

function welcomeMessage() {
    document.getElementById("welcome").innerHTML =
        "Welcome to my JavaScript page!";
}

/* Scrolling title */

var space = " ";
var pos = 0;
var msg = "Antonio's JavaScript Page";

function Scroll() {
    document.title =
        msg.substring(pos, msg.length) +
        space +
        msg.substring(0, pos);

    pos++;

    if (pos > msg.length) {
        pos = 0;
    }

    window.setTimeout(Scroll, 150);
}

Scroll();