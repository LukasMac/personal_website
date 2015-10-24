import React from 'react';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
class StartPage extends React.Component {

  render() {
    let tooltip = (
      <Tooltip placement="top" id="1">
        Try to use Command Line bellow, to experience what developers do everyday
      </Tooltip>
    );

    return (
      <div className="inlineblock">
          <div className="down-arrow-container">
          <OverlayTrigger placement="top" overlay={tooltip}>
            <Button bsStyle="link" className="down-arrow"></Button>
          </OverlayTrigger>
          </div>
      </div>
    );
  }
}

module.exports = StartPage;
