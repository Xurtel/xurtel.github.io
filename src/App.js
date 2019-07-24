import React from 'react';
// import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home.jsx';

/*function App() {
  return (
    
  );
}*/

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path = "/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
