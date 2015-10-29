import React from 'react';
import ReactDOM from 'react-dom';
import { Tooltip, Overlay, Button } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
class StartPage extends React.Component {

  render() {
    const tooltip = (
      <Tooltip id={1}>
        Try to use command line below
      </Tooltip>);
  
    const sharedProps = {
      show: true,
      container: this,
      target: () => ReactDOM.findDOMNode(this.refs.target)
    };

    return (
      <div className="inlineblock start-page">
        <div ref="target" className="down-arrow-container">
          <div className="text-shadow">Try to exprience what developer do! Type commands below.</div>
          <Button bsStyle="link" className="down-arrow" />
        </div>
      </div>
    );
  }
}

module.exports = StartPage;
