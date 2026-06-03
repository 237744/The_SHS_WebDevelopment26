function changeText() {
    document.getElementById("textChange").innerHTML="Hold Me Know";

}
function changeTxt() {
    document.getElementById("textChnge").innerHTML="party rock";
}
var space = " ";
var pos = 0;
var msg = "Now or Never";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();
function hoverer(elmnt, clr) {
    elmnt.style.color = clr;
}
function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("You prefer browsing internet with " + prefer);
}
function myFunction(x) {
    x.style.background = "yellow";
}
function myFuntion() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
function myFuncion() {
    alert("You pressed a key inside the input field");
}
function myFunctin() {
    document.getElementById("demo").innerHTML = "Hello World";
}
function mFunction(e) {
  x = e.clientX;
  y = e.clientY;
  coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor
}
