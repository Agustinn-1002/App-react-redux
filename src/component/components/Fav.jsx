import React, { useEffect, useState } from "react";
import {useSelector , useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import { movieDetails, removeMoviesFav } from "../actions";

const Fav = () => {
    const [alert , setAlert] = useState(false);
    const data = useSelector(state => state.movieFav)
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    }, [data]);

    return (
        <div>
            <h1>Peliculas Favoritas</h1>
            <ul>
                {
                    data && data.map(movie => 
                        <li key={movie.id}>
                            <Link to={`/movie/${movie.id}`} onClick={()=>dispatch(movieDetails(movie.imdbID))}>{movie.title}</Link>
                            <button onClick={() => {
                                dispatch(removeMoviesFav(movie.id))
                                setAlert(true);
                                }}>X</button>
                        </li>    
                    )
                }
            </ul>
            <h3 style={{transition: 'all 3s'}} className={alert ? 'alertIndelete' : 'alertOut'}>Eliminado</h3>
        </div>
    )
}

export default Fav;