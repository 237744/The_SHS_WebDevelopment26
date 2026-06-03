function recommendActivities(weather) {
    let activity = "";

    if (weather === "Clear") {
        activity = "Perfect day for hiking and sightseeing!";
    } 
    else if (weather === "Rain") {
        activity = "Good day to visit museums or cafes.";
    } 
    else if (weather === "Snow") {
        activity = "Great weather for skiing!";
    } 
    else {
        activity = "Explore local attractions indoors.";
    }

    document.getElementById("activities").innerHTML = activity;
}