import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { Decorator as Cerebral } from 'cerebral-react';
import AboutPage from './aboutPage.js';
import StartPage from './startPage.js';

var _this = null;

@Cerebral({
  isLoading: ['isLoading'],
  inputText: ['inputText'],
  history: ['history'],
  shellPrompt: ['shellPrompt'],
  cursorPosition: ['cursorPosition'],
  menuPage: ['menuPage'],
})
class App extends React.Component {
  componentDidMount() {
    _this = this;
    document.addEventListener('keypress', function (e) {
      e.preventDefault();
      _this.props.signals.keyPressed(e);
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
         _this.props.signals.keyPressed(e);
      }
    });
    this.props.signals.appMounted();
  }

  renderPage() {
    if (this.props.menuPage === "about") {
      return <AboutPage />
    }

    return <StartPage />
  }

  renderCommandLineWelcome() {
    return (
    <span>
      <br /><center>Welcome, to get more information please type 'help'</center><br /><br />
    </span>
    );
  }

  renderHistory() {
    return (
      this.props.history.map(function(item, index) {
        return (
          <span key={index}>
            {this.props.shellPrompt}{item.command}<br />
            {item.output.split(/\n/).map(function(line, index) {
              return (<span key={index}>{line}<br /></span>);
            })}
          </span>
        );
      }, this)
    );
  }

  textBeforeCursor() {
    return this.props.inputText.substring(0, this.props.inputText.length + this.props.cursorPosition);
  }

  textAtCursor() {
    let textAtCursor = this.props.inputText.substring(this.props.inputText.length + this.props.cursorPosition, this.props.inputText.length + this.props.cursorPosition +1);
    if (textAtCursor === "") {
      textAtCursor = "\u00a0";
    }

    return textAtCursor;
  }

  textAfterCursor() {
    return this.props.inputText.substring(this.props.inputText.length + this.props.cursorPosition + 1);
  }

  renderInputTextWithCursor() {
    return(
      <span>
        {this.textBeforeCursor()}
        <span className="terminal-cursor">{this.textAtCursor()}</span>
        {this.textAfterCursor()}
      </span>
    );
  }

  render() {
    return (
      <div>
        {this.renderPage()}
        <div className="down-arrow-container">
          <div className="down-arrow"></div>
        </div>
        <div className="terminal-container">
          <div className="text-container">
          {this.renderCommandLineWelcome()}
          {this.renderHistory()}
          {this.props.shellPrompt}{this.renderInputTextWithCursor()}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
