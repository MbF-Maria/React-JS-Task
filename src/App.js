import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Router>
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Route exact path="/" component={Home} /> 
            <Route path="/about" component={About} />
            <Route path="/service" component={Service} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />   
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;