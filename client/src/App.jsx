import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import PokemonType from './components/PokemonType';



const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route  path="/pokedex" component={Pokedex} />
        <Route  path="/pokemon/:name" component={Pokemon} />
        <Route path="/type/:type" component={PokemonType} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
