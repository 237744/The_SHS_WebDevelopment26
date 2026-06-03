// SampleJS.js
// Sources: W3Schools JavaScript DOM examples, MDN JavaScript Date and Math.random

var clickCount = 0;
var currentColorIndex = 0;
var colorList = ['#e9ecef', '#d1ecf1', '#f8d7da', '#d4edda', '#fff3cd'];
var titleMsg = 'User 26';
var titlePos = 0;
var randomQuotes = [
    'JavaScript can change HTML content instantly.',
    'DOM events make your page interactive.',
    'A function is a reusable block of code.',
    'Use classList to add or remove styles from elements.',
    'The Date object gives you the current time and date.'
];

function changeText() {
    var x = document.getElementById('textChange');
    if (x) {
        x.innerHTML = 'Thanks for liking my Webpage!';
        x.classList.add('favorite');
    }
}

function toggleHighlight() {
    var box = document.getElementById('highlightBox');
    if (box) {
        box.classList.toggle('page-highlight');
    }
}

function showDate() {
    var now = new Date();
    var display = document.getElementById('dateDisplay');
    if (display) {
        display.textContent = 'Today is ' + now.toLocaleString();
    }
}

function showRandomQuote() {
    var quote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    var output = document.getElementById('quoteDisplay');
    if (output) {
        output.textContent = quote;
    }
}

function countClicks() {
    clickCount += 1;
    var output = document.getElementById('clickCount');
    if (output) {
        output.textContent = 'Button clicked ' + clickCount + ' time' + (clickCount === 1 ? '' : 's') + '.';
    }
}

function hoverMessage() {
    var note = document.getElementById('hoverNote');
    if (note) {
        note.textContent = 'Nice! You are using a mouseover event.';
    }
}

function resetHover() {
    var note = document.getElementById('hoverNote');
    if (note) {
        note.textContent = 'Move your mouse over the text to see a message.';
    }
}

function swapBoxColor() {
    var box = document.getElementById('colorBox');
    var label = document.getElementById('colorLabel');
    if (box && label) {
        currentColorIndex = (currentColorIndex + 1) % colorList.length;
        box.style.backgroundColor = colorList[currentColorIndex];
        label.textContent = 'Current color: ' + colorList[currentColorIndex];
    }
}

function toggleBackground() {
    document.body.classList.toggle('page-highlight');
}

function Scroll() {
    document.title = titleMsg.substring(titlePos, titleMsg.length) + ' ' + titleMsg.substring(0, titlePos);
    titlePos += 1;
    if (titlePos > titleMsg.length) {
        titlePos = 0;
    }
    window.setTimeout(Scroll, 300);
}

function initPage() {
    var status = document.getElementById('status');
    if (status) {
        status.textContent = 'JavaScript loaded and ready.';
    }
    Scroll();
}

window.addEventListener('load', initPage);
