import React from "react";
import {useSelector} from 'react-redux'

const Movie = () => {

    const {Title, Year , Poster , Director , Actors } = useSelector(state => state.movieDetails)

    return (
        <>
            <h1>{Title}</h1>
            <img src={Poster} />
            <h2>{Director}</h2>
            <h4>{Actors}</h4>
            <p>{Year}</p>
        </>
    )
}

export default Movie;