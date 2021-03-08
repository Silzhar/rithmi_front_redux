import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Rithmi } from './components/ritmi'

import './App.css'

function App() {
  return (
    <div className="App">
      <Rithmi />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <React.Fragment>
          <Route exact path="/user" render={() => <Rithmi />} />
          </React.Fragment>
        </Router>
      </header>
    </div>
  )
}

export default App;
