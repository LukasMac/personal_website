import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Icon from 'react-fa';

class ContactsPage extends React.Component {

  render() {
    return (
      <div className="inlineblock text-center">
        <Icon name="github" size="5x" className="social github-container"/>
        <Icon name="linkedin" size="5x" className="social linkedin-container"/>
        <Icon name="twitter" size="5x" className="social twitter-container" />
        <Icon name="envelope-o" size="5x" className="social email-container"/>
      </div>
    );
  }
}

module.exports = ContactsPage;
