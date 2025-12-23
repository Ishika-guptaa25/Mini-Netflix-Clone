// TMDB API Configuration
// Get your free API key from: https://www.themoviedb.org/settings/api
const API_KEY = 'your api key';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_URL = 'https://image.tmdb.org/t/p/original';

// API Endpoints
const endpoints = {
    trending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    action: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romance: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
};

// Fetch and display movies
async function fetchMovies(url, containerId, isLarge = false) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        displayMovies(data.results, containerId, isLarge);
    } catch (error) {
        console.error('Error fetching movies:', error);
        displayErrorMessage(containerId);
    }
}

// Display movies in the container
function displayMovies(movies, containerId, isLarge) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    movies.forEach(movie => {
        const posterPath = movie.poster_path || movie.backdrop_path;
        if (posterPath) {
            const img = document.createElement('img');
            img.src = IMG_URL + posterPath;
            img.alt = movie.title || movie.name;
            img.classList.add('movie-poster');
            if (isLarge) img.classList.add('large');

            // Add click event to show modal
            img.addEventListener('click', () => showMovieModal(movie));

            // Add loading effect
            img.addEventListener('load', () => {
                img.style.opacity = '0';
                setTimeout(() => {
                    img.style.transition = 'opacity 0.3s';
                    img.style.opacity = '1';
                }, 50);
            });

            container.appendChild(img);
        }
    });
}

// Display error message
function displayErrorMessage(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '<p style="color: #999; padding: 20px;">Unable to load movies. Please check your API key.</p>';
}

// Show movie details modal
function showMovieModal(movie) {
    const modal = document.getElementById('movieModal');
    const modalPoster = document.getElementById('modalPoster');
    const modalTitle = document.getElementById('modalTitle');
    const modalRating = document.getElementById('modalRating');
    const modalYear = document.getElementById('modalYear');
    const modalOverview = document.getElementById('modalOverview');

    // Set modal content
    modalPoster.src = IMG_URL + (movie.poster_path || movie.backdrop_path);
    modalTitle.textContent = movie.title || movie.name;
    modalRating.textContent = `⭐ ${movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}`;
    modalYear.textContent = movie.release_date ? movie.release_date.split('-')[0] : movie.first_air_date ? movie.first_air_date.split('-')[0] : 'N/A';
    modalOverview.textContent = movie.overview || 'No overview available.';

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('movieModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Initialize the app
function init() {
    // Check if API key is set
    if (API_KEY === 'YOUR_TMDB_API_KEY') {
        console.warn('⚠️ Please add your TMDB API key in script.js');
        console.info('Get your free API key from: https://www.themoviedb.org/settings/api');

        // Load with placeholder images for demo
        loadPlaceholders();
        return;
    }

    // Fetch all movie categories
    fetchMovies(endpoints.trending, 'trending', true);
    fetchMovies(endpoints.topRated, 'top-rated');
    fetchMovies(endpoints.action, 'action');
    fetchMovies(endpoints.comedy, 'comedy');
    fetchMovies(endpoints.horror, 'horror');
    fetchMovies(endpoints.romance, 'romance');
    fetchMovies(endpoints.documentaries, 'documentaries');
}

// Load placeholder images for demo (when API key is not set)
function loadPlaceholders() {
    const categories = ['trending', 'top-rated', 'action', 'comedy', 'horror', 'romance', 'documentaries'];
    const movieTitles = [
        'The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction',
        'Forrest Gump', 'Inception', 'The Matrix', 'Goodfellas', 'The Silence of the Lambs',
        'Saving Private Ryan', 'Interstellar', 'The Green Mile', 'Parasite', 'Gladiator'
    ];

    categories.forEach((category, catIndex) => {
        const container = document.getElementById(category);
        container.innerHTML = '';

        for (let i = 0; i < 10; i++) {
            const div = document.createElement('div');
            div.classList.add('movie-poster');
            if (category === 'trending') div.classList.add('large');

            div.style.background = `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`;
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.justifyContent = 'center';
            div.style.padding = '20px';
            div.style.textAlign = 'center';
            div.style.fontSize = '14px';
            div.style.fontWeight = 'bold';
            div.textContent = movieTitles[(catIndex + i) % movieTitles.length];

            // Add click event
            div.addEventListener('click', () => {
                showDemoModal(movieTitles[(catIndex + i) % movieTitles.length]);
            });

            container.appendChild(div);
        }
    });
}

// Show demo modal (for placeholder mode)
function showDemoModal(title) {
    alert(`Movie: ${title}\n\nTo see real movie data, please add your TMDB API key in script.js\n\nGet your free API key from:\nhttps://www.themoviedb.org/settings/api`);
}

// Modal close handlers
document.addEventListener('DOMContentLoaded', () => {
    init();

    // Close modal on X click
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal on outside click
    const modal = document.getElementById('movieModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Add smooth scroll for movie rows
document.querySelectorAll('.row-posters').forEach(row => {
    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener('mousedown', (e) => {
        isDown = true;
        row.style.cursor = 'grabbing';
        startX = e.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
    });

    row.addEventListener('mouseleave', () => {
        isDown = false;
        row.style.cursor = 'grab';
    });

    row.addEventListener('mouseup', () => {
        isDown = false;
        row.style.cursor = 'grab';
    });

    row.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - row.offsetLeft;
        const walk = (x - startX) * 2;
        row.scrollLeft = scrollLeft - walk;
    });
});
