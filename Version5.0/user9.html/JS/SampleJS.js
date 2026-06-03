function changeText() {
    var element = document.getElementById("textChange");
    element.innerHTML = "Thanks for liking my Webpage";
    element.className = "textCheese";
}
var space = " ";
var pos = 0;
var msg = "User 09";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 200);
}
Scroll();
 //everything below this line is taken from w3schools
    function keyUpFunction() {
    const x = document.getElementById("fname"); 
    x.value = x.value.toUpperCase();
    }
    function pressKeyFunction() {
    alert("You pressed a key inside the input field");
    }
    function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("You prefer browsing internet with " + prefer);
    }
    function clickColorFunction(elmnt, clr) {
    elmnt.style.color = clr;
    }
    function displayDate() {
    document.getElementById("demo").innerHTML = Date();
    }
    function upperCase() {
    const x = document.getElementById("gname");
    x.value = x.value.toUpperCase();
    }
    function loadFunction() {
    alert("Page is loaded");
    }
    //everything above this line is taken from w3schools