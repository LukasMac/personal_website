import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

class AboutPage extends React.Component {

  render() {
    return (
      <div className="inlineblock">
        <Row>
        <Col xs={6} md={4} className="text-right">
          <Image
            src="https://scontent.xx.fbcdn.net/hphotos-prn2/t31.0-8/10457660_10154297097070635_6919546779521449027_o.jpg"
            className="face-image" circle/>
        </Col>
        <Col xs={6} md={8}>
          Under contruction...
        </Col>
        </Row>
      </div>
    );
  }
}

module.exports = AboutPage;
