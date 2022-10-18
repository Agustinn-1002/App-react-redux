import React, {useState} from "react";
import { Link } from "react-router-dom";

const Nav = {
    background: 'grey',
    marginTop: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:'0 20px',
    transition: 'all 1s ease' 
}
const links ={
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '30px 100px',
}
const link = {
   
    color: 'white',
    margin: '0 10px',
    padding: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.4s' 
}
const linkActive = {
    background: 'white',
    color: 'black',
    margin: '0 10px',
    padding: '20px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.4s' 
}

const NavBar = () => {

    const [active,setActive] = useState(true)

    return (
        <div style={Nav}>
            <h1>
                <Link onClick={() => setActive(true)} to={'/'} style={{textDecoration: 'none',color: 'black',}}>
                    App-Henry Replica
                </Link>
            </h1>
            <div style={links}>
                <Link onClick={() => setActive(true)} to={'/'} style={active?linkActive:link}>Home</Link>
                <Link onClick={() => setActive(false)} to={'/fav'} style={active?link:linkActive}>Favoritos</Link>
            </div>
        </div>
    )
}

export default NavBar;
