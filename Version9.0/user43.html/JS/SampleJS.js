
//////////////////////////////
// WATCHLIST FUNCTIONS
//////////////////////////////

function addToWatchlist(showName) {

    let list = JSON.parse(localStorage.getItem("watchlist")) || [];

    if (!list.includes(showName)) {
        list.push(showName);
    }

    localStorage.setItem("watchlist", JSON.stringify(list));
    alert(showName + " added to watchlist!");
}

function removeFromWatchlist(showName) {

    let list = JSON.parse(localStorage.getItem("watchlist")) || [];

    list = list.filter(item => item !== showName);

    localStorage.setItem("watchlist", JSON.stringify(list));

    loadWatchlist();
}

function loadWatchlist() {

    let list = JSON.parse(localStorage.getItem("watchlist")) || [];

    let output = "";

    list.forEach(show => {

        output += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">

                <div class="card-body text-center">
                    <h3>${show}</h3>

                    <button class="btn btn-dark"
                        onclick="removeFromWatchlist('${show}')">
                        Remove
                    </button>

                </div>

            </div>
        </div>
        `;
    });

    document.getElementById("watchlistContainer").innerHTML = output;
}



//////////////////////////////
// RECOMMENDATION PAGE FUNCTION
//////////////////////////////

function submitRecommendation() {

    let showName = document.getElementById("showName").value;
    let showReason = document.getElementById("showReason").value;

    if (showName === "" || showReason === "") {
        alert("Please fill out both fields.");
        return;
    }

    document.getElementById("recommendationList").innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">
                <div class="card-body text-center">
                    <h3>${showName}</h3>
                    <p>${showReason}</p>
                </div>
            </div>
        </div>
    `;

    document.getElementById("showName").value = "";
    document.getElementById("showReason").value = "";
}



//////////////////////////////
// GENRE FUNCTION (API STYLE LOCAL)
//////////////////////////////

function filterGenre(genre) {

    fetch("https://api.tvmaze.com/shows")
        .then(res => res.json())
        .then(data => {

            let output = "";

            let filtered = data.filter(show =>
                show.genres.map(g => g.toLowerCase()).includes(genre.toLowerCase())
            );

            filtered.slice(0, 12).forEach(show => {

                output += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow">

                        <img src="${show.image ? show.image.medium : ''}">

                        <div class="card-body text-center">

                            <h3>${show.name}</h3>

                            <p>Rating: ${show.rating.average || "N/A"}</p>

                            <button class="btn btn-dark"
                                onclick="addToWatchlist('${show.name}')">
                                Add to Watchlist
                            </button>

                        </div>
                    </div>
                </div>
                `;
            });

            document.getElementById("genreResults").innerHTML = output;
        });
}



//////////////////////////////
// RANDOM RECOMMENDATION (optional fun feature)
//////////////////////////////

function recommendShow() {

    const shows = [
        "Stranger Things",
        "The Rookie",
        "Breaking Bad",
        "Black Mirror",
        "Person of Interest"
    ];

    let random = shows[Math.floor(Math.random() * shows.length)];

    alert("You should watch: " + random);
}