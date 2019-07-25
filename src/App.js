import React from 'react';
// import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';

 class App extends React.Component{
  render(){
    return(
      <Router>
    {/* <Switch> */}
        <div>
          <Route path = "/" component={Home} exact/>
      {/* <Route component = {Error}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
