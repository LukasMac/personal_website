import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router';
import { Row, Col, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import terminalStateReducer from './../lib/terminalStateReducer.js';
import CommandLineInterpreter from './../lib/commandLineInterpreter.js';
import AboutPage from './aboutPage.js';
import StartPage from './startPage.js';
import Terminal from './terminal.js';

var _this = null;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      terminal: {
        shellPrompt: "> ",
        inputText: "",
        history: [],
        historyPointer: -1,
        cursorPosition: 0,
      },
      page: "home",
    }
  }

  componentDidMount() {
    _this = this;
    document.addEventListener('keypress', function (e) {
      if ([8, 37, 39, 46].indexOf(e.keyCode) === -1) {
        e.preventDefault();
        _this.keyPressed(e);
      }
    });
    document.addEventListener('keydown', function (e) {
      if ([8, 37, 38, 39, 40, 46].indexOf(e.keyCode) !== -1) {
        e.preventDefault();
        _this.keyPressed(e);
      }
    });
  }

  keyPressed(e) {
    let currentCommand = this.state.terminal.inputText;

    this.setState({
      terminal: terminalStateReducer(this.state.terminal, e)
    });

    if (e.keyCode == 13 ) {
      let newState = CommandLineInterpreter.run(currentCommand, this.state);

      if (newState.page !== this.state.page) {
        this.props.history.pushState(null, '/' + newState.page);
      }

      this.setState(newState);
    }

  }

  renderPage() {
    if (this.state.page === "about") {
      return <AboutPage />
    }

    return <StartPage />
  }

  render() {
    const { pathname } = this.props.location

    return (
      <div>
          <ReactCSSTransitionGroup component="div" transitionName="moveUp" transitionEnterTimeout={5000} transitionLeaveTimeout={900}>
      <div id="home" className="header wow bounceInDown" data-wow-delay="0.4s">
          <div className="top-header">
            <div className="container">
              <h1>Lukas Maciulis</h1>
              <span></span>
              <p>Passionate software developer, focusing on Ruby and
                JavaScript</p>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
          </ReactCSSTransitionGroup>

        <div className="container main-content">
          <ReactCSSTransitionGroup component="div" transitionName="moveUp" transitionEnterTimeout={1000} transitionLeaveTimeout={100}>
            {React.cloneElement(this.props.children || <div />, { key: pathname })}
          </ReactCSSTransitionGroup>
        </div>
        <Terminal {...this.state.terminal} />
      </div>
    )
  }
}

module.exports = App;
