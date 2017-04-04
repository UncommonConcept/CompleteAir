import React, { Component } from 'react';
import logo from './App.css';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import About from '../About/About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <div className="App-header"> 
              <h2>Complete A/C & Heat, Inc</h2>
                <Link to={'/services'}>Services</Link>
                <Link to={'/contact'}>Contact Page</Link>
                <Link to={'/about'}>About Page</Link>
            </div>
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </div>
      </Router>
    );
  }
}

export default App;
