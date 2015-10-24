import React from 'react';

class Terminal extends React.Component {

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
        <div className="terminal-container">
          <div className="text-container">
          {this.renderCommandLineWelcome()}
          {this.renderHistory()}
          {this.props.shellPrompt}{this.renderInputTextWithCursor()}
          </div>
        </div>
    );
  }
}

module.exports = Terminal;
