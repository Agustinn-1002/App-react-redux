export const getMovies = (titulo) => {
    return (dispatch) => {
        return fetch("http://www.omdbapi.com/?apikey=e7422109&s=" + titulo)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
};

export const addMoviesFav = (movie) => {
    return ({type: "ADD_MOVIES_FAVORITE", movie})
};

export const removeMoviesFav = (deleteMovie) => {
    return ({type: "DELETE_MOVIES-FAVORITE", deleteMovie})
};

export const movieDetails = (id) => {
    return (dispatch) => {
        return fetch("http://www.omdbapi.com/?apikey=e7422109&i=" + id)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "MOVIE_DETAILS", payload: json });
        });
    };
};
