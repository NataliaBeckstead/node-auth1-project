import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <PrivateRoute path="/dashboard" component={Dashboard}/> */}
        <Route exact path='/' component={LoginPage} />
        {/* <Route path='/sign-up-page' component={SignUpPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
