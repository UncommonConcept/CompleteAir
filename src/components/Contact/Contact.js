import React, { Component } from 'react';
import {
 // BrowserRouter as Router,
  //Route,
  Link
} from 'react-router-dom'

class Contact extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          
          <h2>Contact Page</h2>
        </div>
        <p className="">
         Contact Page 
        <Link to={'/about'}>About Page ABout About</Link>
        </p>
      </div>
    );
  }
}

export default Contact;