function toggleDark() {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.classList.contains("dark"));
}

window.onload = function () {

    if (localStorage.getItem("dark") === "true") {
        document.body.classList.add("dark");
    }

    // DATE FIX
    const date = document.getElementById("date");
    if (date) {
        date.innerText = new Date().toLocaleString();
    }

    // QUOTES
    const quotes = [
        "I'm gonna make him an offer he can't refuse.",
        "Why so serious?",
        "May the Force be with you.",
        "I'll be back.",
        "I'm king of the world!"
    ];

    const qBtn = document.getElementById("quoteBtn");
    if (qBtn) {
        qBtn.onclick = () => {
            document.getElementById("quoteBox").innerText =
                quotes[Math.floor(Math.random() * quotes.length)];
        };
    }

    // MOVIE INFO
    const mBtn = document.getElementById("movieBtn");
    if (mBtn) {
        mBtn.onclick = () => {
            document.getElementById("movieInfo").innerText =
                "Interstellar (2014) — Christopher Nolan — Space exploration, time dilation, black holes.";
        };
    }
};