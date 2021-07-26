import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cardapio from './components/pages/Cardapio';
import Restaurantes from './components/pages/Restaurantes';
import Pecaja from './components/pages/Pecaja';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cardapio' component={Cardapio} />
          <Route path='/restaurantes' component={Restaurantes} />
          <Route path='/pecaja' component={Pecaja} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
