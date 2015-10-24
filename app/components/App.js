import React from 'react';
import { PageHeader } from 'react-bootstrap';
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
        cursorPosition: 0,
      },
      page: "home",
    }
  }

  componentDidMount() {
    _this = this;
    document.addEventListener('keypress', function (e) {
      e.preventDefault();
      _this.keyPressed(e);
    });
    document.addEventListener('keyup', function (e) {
      if ([8, 37, 39, 46].indexOf(e.keyCode) !== -1) {
        e.preventDefault();
        // _this.props.signals.keyPressed(e);
      }
    });
    document.addEventListener('keydown', function (e) {
      if ([8, 37, 39, 46].indexOf(e.keyCode) !== -1) {
        e.preventDefault();
        _this.keyPressed(e);
      }
    });
  }

  keyPressed(e) {
    if (e.keyCode == 13 ) {
      let changeToPage = CommandLineInterpreter.changeToPage(this.state.terminal.inputText);
      if (changeToPage) {
        this.setState({page: changeToPage});
      }
    }

    let newState = terminalStateReducer(this.state.terminal, e);
    this.setState({terminal: newState});
  }

  renderPage() {
    if (this.state.page === "about") {
      return <AboutPage />
    }

    return <StartPage />
  }

  render() {
    return (
      <div>
        {this.renderPage()}
        <Terminal {...this.state.terminal} />
      </div>
    );
  }
}

module.exports = App;
