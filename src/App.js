import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
// PAGES
import Home from './pages/Home';
import Aipr from './pages/Aipr';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aipr" exact component={Aipr} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
