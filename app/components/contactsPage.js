import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
class ContactsPage extends React.Component {

  render() {
    return (
      <div className="inlineblock">
        <Row>
        <Col xs={6} md={4} className="text-right">
          <h1>Kontaktai</h1>
        </Col>
        <Col xs={6} md={8}>
          One: aaaa
        </Col>
        </Row>
      </div>
    );
  }
}

module.exports = ContactsPage;
