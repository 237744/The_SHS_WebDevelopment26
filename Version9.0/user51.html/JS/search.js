const API_KEY = '9a3ebec4ff0eb2d08051a702937ba7cf';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; 

async function searchMovie() {
    const query = document.getElementById('search-input').value.trim();
    const messageEl = document.getElementById('message');
    const posterEl = document.getElementById('poster');
    const infoEl = document.getElementById('info-block');

    messageEl.textContent = "";
    posterEl.style.display = "none";
    infoEl.style.display = "none";

    if (!query) {
        messageEl.textContent = "Please enter a movie name.";
        return;
    }

    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(searchURL);
        if (!response.ok) throw new Error("Search failed.");
        
        const data = await response.json();

        if (data.results.length === 0) {
            messageEl.textContent = "No movies found matching that name.";
            return;
        }

        const movie = data.results[0];

        document.getElementById('title').textContent = movie.title;
        document.getElementById('rating').textContent = movie.vote_average.toFixed(1);
        document.getElementById('overview').textContent = movie.overview;

        if (movie.poster_path) {
            posterEl.src = `${IMAGE_BASE_URL}${movie.poster_path}`;
            posterEl.style.display = "block";
        } else {
            posterEl.src = "https://via.placeholder.com/200x300?text=No+Poster+Available";
            posterEl.style.display = "block";
        }

        infoEl.style.display = "block";

    } catch (error) {
        console.error("Error searching for movie:", error);
        messageEl.textContent = "An error occurred while fetching data.";
    }
}

document.getElementById('search-button').addEventListener('click', searchMovie);

document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchMovie();
});