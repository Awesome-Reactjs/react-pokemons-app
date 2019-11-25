import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonsList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
 
const App: FunctionComponent = () => {
 
  return (
    <Router>
      <div>
      <nav> 
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">Pokédex</Link>
        </div> 
      </nav>
      <Switch>
        <Route exact path="/" component={PokemonsList} />
        <Route exact path="/pokemons" component={PokemonsList} />
        <Route path="/pokemons/:id" component={PokemonsDetail} />
      </Switch>
      </div>
    </Router>
  );
}
 
export default App;