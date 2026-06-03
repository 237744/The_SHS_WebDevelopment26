function changeText() {

    document.getElementById("textChange").innerHTML =
        "Thanks for liking my webpage!";

    document.getElementById("textChange").classList.add("bigText");

}



var space = " ";
var pos = 0;
var msg = "User 25's JavaScript Sample Code!";

function Scroll() {

    document.title =
        msg.substring(pos, msg.length) +
        space +
        msg.substring(0, pos);

    pos++;

    if (pos > msg.length)
        pos = 0;

    window.setTimeout("Scroll()", 150);

}

Scroll();



function showAlert() {

    alert("Hello! Welcome to my website!");

}



function doubleClick() {

    alert("You double clicked!");

}



function mouseOver() {

    document.getElementById("hoverText").innerHTML =
        "You are hovering!";

}



function mouseOut() {

    document.getElementById("hoverText").innerHTML =
        "Hover over me";

}



function keyPress() {

    document.getElementById("keyText").innerHTML =
        "You pressed a key!";

}



function inputChange() {

    document.getElementById("inputText").innerHTML =
        "Input changed!";

}



window.onload = function () {

    document.getElementById("loadText").innerHTML =
        "Page fully loaded!";

};



function isKeyPressed(event) {

    var text = "The shift key was NOT pressed!";

    if (event.shiftKey == 1) {

        text = "The shift key WAS pressed!";

    }

    document.getElementById("demo").innerHTML = text;

}



function showTime() {

    const date = new Date();

    document.getElementById("timeText").innerHTML =
        date.toLocaleTimeString();

}



function changeBackground() {

    document.body.style.backgroundColor = "lightblue";

}