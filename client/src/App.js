import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import Users from './components/Users.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/sign-up-page' component={SignUpPage} />
        <Route path='/users' component={Users} />
      </Switch>
    </div>
  );
}

export default App;
