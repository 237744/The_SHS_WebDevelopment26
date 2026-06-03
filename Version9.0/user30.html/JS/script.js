// Function 1
function showWelcomeMessage() {
    alert("Welcome to Sports Central!");
}

// Function 2
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Function 3
function showCurrentDate() {
    document.getElementById("date").innerHTML =
        "Today's Date: " +
        new Date().toLocaleDateString();
}

// Function 4
function filterTeams() {

    let input =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    let teams =
        document.getElementsByClassName("team");

    for(let i = 0; i < teams.length; i++) {

        if(teams[i].innerHTML.toLowerCase().includes(input)) {
            teams[i].style.display = "";
        }
        else {
            teams[i].style.display = "none";
        }
    }
}

function calculateFanScore(wins, points) {

    wins = Number(wins);
    points = Number(points);

    return (wins * 5) + (points * 2);

}

function displayFanScore() {

    let wins =
        document.getElementById("wins").value;

    let points =
        document.getElementById("points").value;

    if(wins === "" || points === "") {

        document.getElementById("score").innerHTML =
            "Please enter both values.";

        return;
    }

    let score =
        calculateFanScore(wins, points);

    document.getElementById("score").innerHTML =
        "Team Performance Score: " + score;

}
// API CALL
async function getTeamInfo() {

    let team =
        document.getElementById("teamInput").value;

    if(team === "") {

        document.getElementById("teamInfo").innerHTML =
            "<div class='alert alert-warning'>Please enter a team name.</div>";

        return;
    }

    let url =
    `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${team}`;

    try {

        let response = await fetch(url);

        let data = await response.json();

        if(data.teams) {

            let t = data.teams[0];

            document.getElementById("teamInfo").innerHTML =

            `
            <div class="card p-4 mb-4">

                <div class="text-center">

                    <img src="${t.strBadge}" width="150">

                    <h2 class="mt-3">
                        ${t.strTeam}
                    </h2>

                    <p>
                        <strong>League:</strong>
                        ${t.strLeague}
                    </p>

                    <p>
                        <strong>Country:</strong>
                        ${t.strCountry}
                    </p>

                    <p>
                        ${t.strDescriptionEN ?
                        t.strDescriptionEN.substring(0,300) + "..."
                        : ""}
                    </p>

                </div>

            </div>
            `;

        } else {

            document.getElementById("teamInfo").innerHTML =
            `
            <div class="alert alert-danger">
                Team not found.
            </div>
            `;
        }

    } catch(error) {

        document.getElementById("teamInfo").innerHTML =
        `
        <div class="alert alert-danger">
            Error loading team information.
        </div>
        `;
    }
}