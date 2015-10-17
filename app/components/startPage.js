import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class StartPage extends React.Component {

  render() {
    return (
      <Jumbotron className="text-center">
        <h1>Hello, I'm Lukas Maciulis</h1>
        <p>
          Passionate software developer.
        </p>
      </Jumbotron>
    );
  }
}

module.exports = StartPage;
