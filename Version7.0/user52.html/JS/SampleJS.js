function changeText() {
 document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
}

var space = " ";
var pos = 0;
var msg = "User 52";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();

function WhichButton(event) {
  alert("You pressed text: " + event.button)
}

function myFunction() {
  document.getElementById("demo").innerHTML = "This works";
}

function isKeyPressed(event) {
  var text = "The shift key was NOT pressed!";
  if (event.shiftKey == 1) {
    text = "The shift key was pressed!";
  }
  document.getElementById("Shift").innerHTML = text;
}

function thisIsCool() {
  alert("Page has loaded");
}

function thisMakesSize() {
  let w = window.outerWidth;
  let h = window.outerHeight;
  let txt = "Window size: width=" + w + ", height=" + h;
  document.getElementById("demo").innerHTML = txt;
}

function show_coords(event) {
  document.getElementById("demo").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
}


function upperCase(){
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function writeMessage() {
  document.forms[0].mySecondInput.value = document.forms[0].myInput.value;
}