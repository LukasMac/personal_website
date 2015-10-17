import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

var _this = null;

@Cerebral({
  isLoading: ['isLoading'],
  inputText: ['inputText'],
  history: ['history'],
  shellPrompt: ['shellPrompt'],
  cursorPosition: ['cursorPosition'],
})
class App extends React.Component {
  componentDidMount() {
    _this = this;
    document.addEventListener('keyup', function (e) {
      _this.props.signals.keyPressed(e);
    });
    this.props.signals.appMounted();
  }

  renderHistory() {
    return (
        this.props.history.map(function(item, index) {
          return (<span key={index}>{item}<br /></span>);
        })
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
        <h1>Hello</h1>
        <div className="terminal-container">
          <div className="text-container">
          {this.renderHistory()}
          {this.props.shellPrompt}{this.renderInputTextWithCursor()}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
