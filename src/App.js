import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import DetailsPage from './Components/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/detail">
            <DetailsPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
