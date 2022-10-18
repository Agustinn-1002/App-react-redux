import React from 'react';
import Buscador from './component/components/Buscador';
import Fav from './component/components/Fav';
import Movie from './component/components/Movie';
import NavBar from './component/components/NavBar';
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Route exact path='/' component={Buscador} />
      <Route path='/fav' component={Fav} />
      <Route path='/movie/:id' component={Movie} />
    </>
  );
}

export default App;
