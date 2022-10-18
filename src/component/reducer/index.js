const initialState = {
    movieFav:[],
    getMovies:[],
    movieDetails:{}
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                getMovies: action.payload.Search
            };
        case "ADD_MOVIES_FAVORITE":
            return {
                ...state,
                movieFav: state.movieFav.concat(action.movie)
            }
        case "DELETE_MOVIES-FAVORITE":
            return {
                ...state,
                movieFav: state.movieFav.filter(movie => movie.id !== action.deleteMovie)
            }
        case "MOVIE_DETAILS":
            return {
                ...state,
                movieDetails : action.payload
            }
        default:
            return state;
    };
}

export default reducer;