import React from 'react';
import {HashRouter, BrowserRouter, Route} from 'react-router-dom';
// import { BrowserRouter, Route, Switch, NavLink, Link, Redirect } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';



 class App extends React.Component{
  render(){
    return(
      <BrowserRouter basename={window.location.pathname || ''}>
        <Route exact path="/" component={Home} />
        {/*<Route path = "/" component={Home} exact/>*/}
      </BrowserRouter>
    );
  }
}

export default App;
