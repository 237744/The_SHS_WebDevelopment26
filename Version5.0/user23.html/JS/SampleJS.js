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


function greetUser() {
    alert("Welcome to Version 7.0!");
}


function showDate() {
    document.getElementById("dateBox").innerHTML = Date();
}


function changeBg() {
    document.body.style.backgroundColor = "#2c3e50";
    document.body.style.color = "white";
}


function makeUpper() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function mOver(obj) {
  obj.innerHTML = "You hovered!";
}
function mOut(obj) {
  obj.innerHTML = "Hover over me";
}


function printPage() {
    window.print();
}

function changeColor() {
    document.getElementById("textChange").style.color = "red";
}

function welcome() {
    alert("Welcome!");
}

function upperCase() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

