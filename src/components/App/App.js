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
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              Complete Air AC
              <span className="mdl-layout-title">Title</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <Link className="mdl-navigation__link" to={'/services'}>Services</Link>
                <Link className="mdl-navigation__link"to={'/contact'}>Contact Page</Link>
                <Link className="mdl-navigation__link" to={'/about'}>About Page</Link>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Title</span>
            <nav className="mdl-navigation">
                <Link className="mdl-navigation__link" to={'/services'}>Services</Link>
                <Link className="mdl-navigation__link"to={'/contact'}>Contact Page</Link>
                <Link className="mdl-navigation__link" to={'/about'}>About Page</Link>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
