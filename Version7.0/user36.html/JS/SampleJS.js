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

function myFunction(x) {
  x.style.background = "yellow";
}

function myFunction(this) {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
function myFunction(x) {
  document.getElementById("demo").innerHTML = "You selected some text";
}
function myFunction(elmnt, clr) {
  elmnt.style.color = clr;
}
function myFunction() {
  document.getElementById("demo").innerHTML = "You selected some text";
}
function myFunction() {
  document.getElementById("demo").innerHTML = "You selected some text";
}
function preferedBrowser() {
  prefer = document.forms[0].browsers.value;
  alert("You prefer browsing internet with " + prefer);
}
function myFunction(cd) {
  alert("Page is loaded");
}function isKeyPressed(event) {
  var text = "The shift key was NOT pressed!";
  if (event.shiftKey == 1) {
    text = "The shift key was pressed!";
  }
  document.getElementById("demo").innerHTML = text;
} 



