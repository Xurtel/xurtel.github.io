import React from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import {HashRouter, Route} from 'react-router-dom';
// import { BrowserRouter, Route, Switch, NavLink, Link, Redirect } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';



 class App extends React.Component{
  render(){
    return(
      <Router>
    {/* <Switch> */}
        <div>
          <HashRouter basename={window.location.pathname || ''}>
            <Route exact path="/" component={Home} />
          </HashRouter>
          {/*<Route path = "/" component={Home} exact/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
