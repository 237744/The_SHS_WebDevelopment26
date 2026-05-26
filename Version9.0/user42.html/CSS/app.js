// ===============================
// DARK MODE TOGGLE (WORKING + SAVED)
// ===============================

function toggleDark() {
    document.body.classList.toggle("dark");

    // save preference
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "on");
    } else {
        localStorage.setItem("darkMode", "off");
    }
}

// load dark mode on page load
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "on") {
        document.body.classList.add("dark");
    }

    console.log("App loaded ✔");
});

// ===============================
// LOAD MOVIES FROM API (FETCH)
// ===============================

async function loadMovies() {
    try {
        const res = await fetch("api.php");
        const data = await res.json();

        console.log("API DATA:", data);

        const container = document.getElementById("movieList");

        if (!container) return;

        container.innerHTML = "";

        for (let key in data.data) {
            const movie = data.data[key];

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${movie}</h3>
            `;

            container.appendChild(card);
        }

    } catch (error) {
        console.error("API failed:", error);
    }
}

// auto-run if element exists
window.addEventListener("DOMContentLoaded", loadMovies);

// ===============================
// SIMPLE CLICK DEBUG (OPTIONAL)
// ===============================

document.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        console.log("Button clicked:", e.target.innerText);
    }
});