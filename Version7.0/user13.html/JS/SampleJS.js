//Source: https://www.w3schools.com/js/js_events_examples.asp

function changeText() {
    var newColor = document.getElementById('userColor').value; // #1
    document.getElementById("textChange").innerHTML="Thanks for <strong>liking</strong> my Webpage";
    document.getElementById('textChange').style.color = newColor; // #1
    
}

let score = 0 // #2
function scoreInc() {
    score += 1
    document.getElementById('scoreCount').innerHTML = 'Score: '+score
}

function texting() { // #3
    document.getElementById('pressed').value = '';
}

function inputFocused(inputBar) { // #4
    inputBar.style.background = 'red';
}

function texthovered(text) { // #5
    text.style.background = 'blue';
}

function doubleclicked(text) { // #6
    text.innerHTML = 'Yay!';
}

function reseted() { // #7
    alert('Box #6 has been reset');
}

function resized() { // #8
    alert('The window is being resized!!');
}

var space = " ";
var pos = 0;
var msg = "User 13";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();