import React from 'react';
// import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { BrowserRouter, Route, Switch, NavLink, Link, Redirect } from 'react-router-dom';
import './App.css';

import WebFont from 'webfontloader';

import Home from './pages/Home.jsx';

WebFont.load({
  google: {
    families: ['Lato:300,400,700,900', 'sans-serif']
  }
});

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
