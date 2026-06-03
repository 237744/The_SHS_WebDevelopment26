const API_KEY = '9a3ebec4ff0eb2d08051a702937ba7cf'; 

async function loadScatteredMovies() {

    const allMovieElements = document.querySelectorAll('[data-movie-id]');
    
    const uniqueMovieIds = new Set();
    allMovieElements.forEach(el => uniqueMovieIds.add(el.dataset.movieId));

    uniqueMovieIds.forEach(async (movieId) => {
        const apiURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

        try {
            const response = await fetch(apiURL);
            if (!response.ok) throw new Error(`Failed to fetch movie ID: ${movieId}`);
            const data = await response.json();

            const matchingElements = document.querySelectorAll(`[data-movie-id="${movieId}"]`);

            matchingElements.forEach(el => {
                const dataType = el.dataset.type;

                if (dataType === 'title') {
                    el.textContent = data.title;
                } else if (dataType === 'rating') {
                    el.textContent = data.vote_average.toFixed(1);
                } else if (dataType === 'overview') {
                    el.textContent = data.overview;
                }
            });

        } catch (error) {
            console.error("Error loading scattered movie data:", error);
            
            document.querySelectorAll(`[data-movie-id="${movieId}"][data-type="title"]`)
                .forEach(el => el.textContent = "Error loading title.");
        }
    });
}

window.addEventListener('DOMContentLoaded', loadScatteredMovies);