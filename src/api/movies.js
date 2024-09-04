import movies from "../data/movies";


function getMovies() {
    return movies;
}

function getMovieById(id) {
    return movies.find(movie => movie.id == id);
}

function getMoviesByGenre(genre) {
    return movies.filter(movie => movie.genre === genre);
}

export { getMovies, getMovieById, getMoviesByGenre };