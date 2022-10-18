import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import {addMoviesFav, getMovies, movieDetails} from '../actions'

const Buscador = () => {
    
    const dispatch = useDispatch()
    const data = useSelector(state => state.getMovies)
    const favState = useSelector(state => state.movieFav)
    const [title , setTitle] = useState('');
    const [alert , setAlert] = useState(false);
    
    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getMovies(title))
    }


    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    }, [favState]);

    return (
        <div style={{transition: 'all 3s'}}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>Buscador</h2>
                <label>Película: </label>
                <input type="text" onChange={(e) => handleChange(e)}/>
                <button type="submit">BUSCAR</button>
            </form>
            <ul>
                {data && data.map(movie=>
                    <li key={movie.imdbID}>
                        <Link to={`/movie/${movie.imdbID}`} onClick={()=>dispatch(movieDetails(movie.imdbID))}>{movie.Title}</Link>
                        <button onClick={() => {
                            dispatch(addMoviesFav({title: movie.Title,id:movie.imdbID}));
                            setAlert(true);
                        }}>Add +</button>
                    </li>
                )}
            </ul>
            <h3 style={{transition: 'all 3s'}} className={alert ? 'alertIn' : 'alertOut'}>Agregado a Favoritos</h3>
        </div>
    )
}

export default Buscador;