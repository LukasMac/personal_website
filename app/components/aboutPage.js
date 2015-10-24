import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class AboutPage extends React.Component {

  render() {
    return (
      <div className="banner wow fadeIn" data-wow-delay="0.5s">
        <div className="container">
          <div className="banner-info text-center">
            <h1>Hello, I'm Lukas Maciulis</h1><br />
            <span> </span>
            <p>We are a digital agency that believes in building things that are  meaningful!</p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = AboutPage;
