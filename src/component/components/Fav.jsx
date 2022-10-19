import React, { useEffect, useState } from "react";
import {useSelector , useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import { getAlert, movieDetails, removeMoviesFav } from "../actions";

const Fav = () => {
    const data = useSelector(state => state.movieFav)
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(getAlert(false));
        }, 3000);
    }, [data]);

    return (
        <div>
            <h1>Peliculas Favoritas</h1>
            <ul>
                {
                    data && data.map(movie => 
                        <li key={movie.id}>
                            <Link to={`/movie/${movie.id}`} onClick={()=>dispatch(movieDetails(movie.id))}>{movie.title}</Link>
                            <button onClick={() => {
                                dispatch(removeMoviesFav(movie.id))
                                dispatch(getAlert(true));
                                }}>X</button>
                        </li>    
                    )
                }
            </ul>
            <h3 style={{transition: 'all 1s ease'}} className={alert ? 'alertIndelete' : 'alertOut'} >Eliminado</h3>
        </div>
    )
}

export default Fav;