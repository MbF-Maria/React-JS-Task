import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-homescreen">
          <h1> Helloworld </h1>
          <Router>
              <div className="container">
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
             </ul>
            <Route exact path="/" component={Home} /> 
            <Route path="/about" component={About} /> 
              </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;